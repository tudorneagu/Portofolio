import { isLang } from "@/content";
import type { Lang } from "@/content/types";

/**
 * Garde-fous du chat. Le but : que le site ne serve qu'à parler de Tudor,
 * et qu'un abus coûte au pire quelques centimes.
 */
export const LIMITS = {
	/** Longueur maximale d'une question. */
	questionChars: 500,
	/** Nombre de messages précédents envoyés au modèle. */
	historyTurns: 6,
	/** Taille totale de l'historique envoyé. */
	historyChars: 4000,
	/** Questions par adresse IP et par heure. */
	perHour: 30,
	/** Plafond de longueur de la réponse. */
	maxTokens: 500,
} as const;

export interface ChatTurn {
	role: "user" | "assistant";
	content: string;
}

export interface ChatRequest {
	conversationId: string;
	lang: Lang;
	turns: ChatTurn[];
}

export type GuardResult =
	| { ok: true; request: ChatRequest }
	| {
			ok: false;
			status: number;
			code: "bad_request" | "too_long" | "off_topic";
	  };

/** Formules qui cherchent à détourner l'assistant de ses consignes. */
const INJECTION = [
	/ignore (all |the |your )?(previous|prior|above) (instructions|rules|prompt)/i,
	/(oublie|ignore|ne tiens pas compte de) (toutes )?(tes|les|vos) (instructions|consignes|règles)/i,
	/(system|developer) prompt/i,
	/(révèle|affiche|montre|donne|répète)[- ]?(moi )?(tes|ton|vos|votre) (instructions|consignes|prompt)/i,
	/(reveal|show|print|repeat) (me )?your (instructions|rules|prompt)/i,
	/you are now|tu es (maintenant|désormais)|vous êtes (maintenant|désormais)/i,
	/\bjailbreak\b|\bDAN\b/,
];

/** Demandes d'assistant généraliste, sans rapport avec le portfolio. */
const OFF_TOPIC = [
	/^(écris|rédige|génère|code|traduis|résume)[- ]?(moi )?(un|une|le|la|ce|cet|cette|du|des)\b/i,
	/^(write|generate|code|translate|summari[sz]e) (me )?(a|an|the|this|some)\b/i,
	/\b(recette|météo|horoscope|devoirs?|dissertation)\b/i,
	/\b(recipe|weather|horoscope|homework|essay)\b/i,
];

export function checkRequest(body: unknown): GuardResult {
	if (typeof body !== "object" || body === null) {
		return { ok: false, status: 400, code: "bad_request" };
	}
	const { conversationId, lang, turns } = body as {
		conversationId?: unknown;
		lang?: unknown;
		turns?: unknown;
	};
	if (
		typeof conversationId !== "string" ||
		!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
			conversationId,
		) ||
		!isLang(lang) ||
		!Array.isArray(turns) ||
		turns.length === 0
	) {
		return { ok: false, status: 400, code: "bad_request" };
	}

	const clean: ChatTurn[] = [];
	for (const turn of turns) {
		if (typeof turn !== "object" || turn === null) {
			return { ok: false, status: 400, code: "bad_request" };
		}
		const { role, content } = turn as { role?: unknown; content?: unknown };
		if (
			(role !== "user" && role !== "assistant") ||
			typeof content !== "string"
		) {
			return { ok: false, status: 400, code: "bad_request" };
		}
		const text = content.trim();
		if (text) clean.push({ role, content: text });
	}

	const last = clean.at(-1);
	if (!last || last.role !== "user") {
		return { ok: false, status: 400, code: "bad_request" };
	}
	if (last.content.length > LIMITS.questionChars) {
		return { ok: false, status: 413, code: "too_long" };
	}
	if (
		[...INJECTION, ...OFF_TOPIC].some((pattern) => pattern.test(last.content))
	) {
		return { ok: false, status: 422, code: "off_topic" };
	}

	// On ne garde que la fin de la conversation, et elle doit commencer par le visiteur.
	let recent = clean.slice(-LIMITS.historyTurns);
	while (
		recent.length > 1 &&
		recent.reduce((n, t) => n + t.content.length, 0) > LIMITS.historyChars
	) {
		recent = recent.slice(1);
	}
	while (recent.length > 1 && recent[0].role !== "user") {
		recent = recent.slice(1);
	}

	return { ok: true, request: { conversationId, lang, turns: recent } };
}
