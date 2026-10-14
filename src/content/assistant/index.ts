import type { AssistantContent, Lang } from "../types";
import { assistantEn } from "./en";
import { assistantFr } from "./fr";

export { rules } from "./rules";

const all: Record<Lang, AssistantContent> = {
	fr: assistantFr,
	en: assistantEn,
};

/**
 * Point d'entrée unique du contenu de l'assistant. Si les réponses doivent un jour
 * venir d'un fichier monté sur le serveur ou d'une base, c'est ici que ça se branche.
 */
export function getAssistant(lang: Lang): AssistantContent {
	return all[lang];
}
