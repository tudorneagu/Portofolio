import { emitPostHogLog, flushPostHogLogs } from "@/instrumentation";
import { buildSystemPrompt } from "@/lib/facts";
import { LIMITS, checkRequest } from "@/lib/guard";
import { allow, clientIp } from "@/lib/rate-limit";
import Anthropic from "@anthropic-ai/sdk";
import { SeverityNumber } from "@opentelemetry/api-logs";
import { Anthropic as PostHogAnthropic } from "@posthog/ai/anthropic";
import { PostHog } from "posthog-node";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Réponses courtes à partir d'une fiche d'une page : le plus petit modèle suffit.
const MODEL = "claude-haiku-5-5";

function refuse(status: number, code: string) {
	return Response.json(
		{ error: code },
		{ status, headers: { "Cache-Control": "no-store" } },
	);
}

/**
 * La requête vient-elle d'une page de ce site ? Un navigateur envoie toujours
 * l'en-tête `Origin` sur un POST : on exige qu'il désigne le même hôte que celui
 * qui sert la page. Un autre site ne peut donc pas brancher son interface sur
 * cette route. Un script peut forger l'en-tête ; la limite par adresse et le
 * plafond de dépense couvrent ce cas.
 */
function sameOrigin(request: Request): boolean {
	const origin = request.headers.get("origin");
	if (!origin) return false;
	const host =
		request.headers.get("x-forwarded-host") ?? request.headers.get("host");
	try {
		return new URL(origin).host === host;
	} catch {
		return false;
	}
}

function describe(error: unknown): string {
	if (error instanceof Anthropic.AuthenticationError) return "clé API refusée";
	if (error instanceof Anthropic.RateLimitError)
		return "limite de débit Anthropic atteinte";
	if (error instanceof Anthropic.APIConnectionError)
		return "connexion à l'API impossible";
	if (error instanceof Anthropic.APIError) return `erreur API ${error.status}`;
	return "erreur inattendue";
}

export async function POST(request: Request) {
	if (!sameOrigin(request)) return refuse(403, "forbidden");
	// Sans clé, le site fonctionne quand même : le chat se limite aux réponses préparées.
	const apiKey = process.env.ANTHROPIC_API_KEY;
	if (!apiKey) return refuse(503, "offline");
	if (!allow(clientIp(request.headers))) return refuse(429, "rate_limited");

	let body: unknown;
	try {
		body = await request.json();
	} catch {
		return refuse(400, "bad_request");
	}
	const checked = checkRequest(body);
	if (!checked.ok) return refuse(checked.status, checked.code);
	const { conversationId, lang, turns } = checked.request;
	const posthogToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
	const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;
	if (!posthogToken || !posthogHost) {
		if (process.env.NODE_ENV === "development") {
			const missing = posthogToken
				? "NEXT_PUBLIC_POSTHOG_HOST"
				: "NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN";
			throw new Error(
				`${missing} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missing} is configured`,
			);
		}
	}
	const posthog =
		posthogToken && posthogHost
			? new PostHog(posthogToken, {
					host: posthogHost,
					privacyMode: false,
					flushAt: 1,
					flushInterval: 0,
				})
			: null;
	const traceId = crypto.randomUUID();
	const message = {
		model: MODEL,
		max_tokens: LIMITS.maxTokens,
		// Une réponse de trois lignes n'a pas besoin de réflexion préalable ; on gagne en vitesse.
		thinking: { type: "disabled" as const },
		output_config: { effort: "low" as const },
		system: [
			{
				type: "text" as const,
				text: buildSystemPrompt(lang),
				cache_control: { type: "ephemeral" as const },
			},
		],
		messages: turns,
	};
	emitPostHogLog(SeverityNumber.INFO, "chat stream started", {
		event: "chat_stream_started",
		language: lang,
		model: MODEL,
		turn_count: turns.length,
	});

	const monitoredMessage = {
		...message,
		posthogTraceId: traceId,
		posthogProperties: { $ai_session_id: conversationId },
	};
	const stream = posthog
		? new PostHogAnthropic({ apiKey, posthog }).messages.stream(
				monitoredMessage,
				{ signal: request.signal },
			)
		: new Anthropic({ apiKey }).messages.stream(message, {
				signal: request.signal,
			});

	const encoder = new TextEncoder();
	const text = new ReadableStream<Uint8Array>({
		async start(controller) {
			stream.on("text", (delta) => controller.enqueue(encoder.encode(delta)));
			try {
				await stream.finalMessage();
				emitPostHogLog(SeverityNumber.INFO, "chat stream completed", {
					event: "chat_stream_completed",
					language: lang,
					model: MODEL,
					turn_count: turns.length,
				});
				controller.close();
			} catch (error) {
				if (!request.signal.aborted) {
					const errorType = describe(error);
					console.error(`[chat] ${errorType}`);
					emitPostHogLog(SeverityNumber.ERROR, "chat stream failed", {
						event: "chat_stream_failed",
						error_type: errorType,
						language: lang,
						model: MODEL,
						turn_count: turns.length,
					});
				}
				controller.error(error);
			} finally {
				await posthog?.shutdown();
				await flushPostHogLogs();
			}
		},
		async cancel() {
			stream.abort();
			emitPostHogLog(SeverityNumber.WARN, "chat stream cancelled", {
				event: "chat_stream_cancelled",
				language: lang,
				model: MODEL,
				turn_count: turns.length,
			});
			await posthog?.shutdown();
			await flushPostHogLogs();
		},
	});

	return new Response(text, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "no-store",
			// Demande au proxy nginx de ne pas mettre la réponse en tampon, sinon elle arrive d'un bloc.
			"X-Accel-Buffering": "no",
		},
	});
}
