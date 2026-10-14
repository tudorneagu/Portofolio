import { buildSystemPrompt } from "@/lib/facts";
import { LIMITS, checkRequest } from "@/lib/guard";
import { allow, clientIp } from "@/lib/rate-limit";
import Anthropic from "@anthropic-ai/sdk";

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
	if (!process.env.ANTHROPIC_API_KEY) return refuse(503, "offline");
	if (!allow(clientIp(request.headers))) return refuse(429, "rate_limited");

	let body: unknown;
	try {
		body = await request.json();
	} catch {
		return refuse(400, "bad_request");
	}
	const checked = checkRequest(body);
	if (!checked.ok) return refuse(checked.status, checked.code);
	const { lang, turns } = checked.request;

	const client = new Anthropic();
	const stream = client.messages.stream(
		{
			model: MODEL,
			max_tokens: LIMITS.maxTokens,
			// Une réponse de trois lignes n'a pas besoin de réflexion préalable ; on gagne en vitesse.
			thinking: { type: "disabled" },
			output_config: { effort: "low" },
			system: [
				{
					type: "text",
					text: buildSystemPrompt(lang),
					cache_control: { type: "ephemeral" },
				},
			],
			messages: turns,
		},
		{ signal: request.signal },
	);

	const encoder = new TextEncoder();
	const text = new ReadableStream<Uint8Array>({
		async start(controller) {
			stream.on("text", (delta) => controller.enqueue(encoder.encode(delta)));
			try {
				await stream.finalMessage();
				controller.close();
			} catch (error) {
				if (!request.signal.aborted) console.error(`[chat] ${describe(error)}`);
				controller.error(error);
			}
		},
		cancel() {
			stream.abort();
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
