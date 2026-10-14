import { en } from "./en";
import { fr } from "./fr";
import type { Content, Lang } from "./types";

const all: Record<Lang, Content> = { fr, en };

export function getContent(lang: Lang): Content {
	return all[lang];
}

export function isLang(value: unknown): value is Lang {
	return value === "fr" || value === "en";
}

export type * from "./types";
