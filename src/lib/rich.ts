/**
 * Le seul format que l'assistant écrit : des paragraphes, des puces « - … »,
 * et du gras entre **deux astérisques**. Le texte est découpé en morceaux typés
 * et rendu par React : rien de ce que renvoie le modèle n'est interprété comme du HTML.
 */
export interface Span {
	bold: boolean;
	text: string;
}

export type RichBlock =
	| { type: "p"; spans: Span[] }
	| { type: "ul"; items: Span[][] };

function spans(line: string): Span[] {
	const out: Span[] = [];
	// Un gras encore ouvert (texte en cours d'arrivée) est rendu en gras jusqu'au bout.
	const pattern = /\*\*([^*]+)(\*\*|$)/g;
	let last = 0;
	for (const match of line.matchAll(pattern)) {
		const start = match.index ?? 0;
		if (start > last) out.push({ bold: false, text: line.slice(last, start) });
		out.push({ bold: true, text: match[1] });
		last = start + match[0].length;
	}
	if (last < line.length)
		out.push({ bold: false, text: line.slice(last).replace(/\*+$/, "") });
	return out;
}

export function parseRich(text: string): RichBlock[] {
	const blocks: RichBlock[] = [];
	for (const raw of text.split("\n")) {
		const line = raw.trim();
		if (!line) continue;
		const bullet = line.match(/^[-•]\s+(.*)$/);
		if (bullet) {
			const previous = blocks.at(-1);
			if (previous?.type === "ul") previous.items.push(spans(bullet[1]));
			else blocks.push({ type: "ul", items: [spans(bullet[1])] });
		} else {
			blocks.push({ type: "p", spans: spans(line) });
		}
	}
	return blocks;
}

/** Retire la balise de section finale, y compris quand elle est encore en cours d'arrivée. */
export function stripTag(text: string): string {
	const at = text.lastIndexOf("[[");
	return (at === -1 ? text : text.slice(0, at)).trim();
}

/** La balise de section en fin de réponse, s'il y en a une. */
export function readTag(text: string): string | null {
	const match = text.match(/\[\[([a-z-]+)\]\]\s*$/);
	return match ? match[1] : null;
}
