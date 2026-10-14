import { type Span, parseRich } from "@/lib/rich";

/** `strong` règle le poids du gras : l'accroche ressort, les libellés de liste restent discrets. */
function Spans({
	spans,
	strong = "font-semibold",
}: { spans: Span[]; strong?: string }) {
	return (
		<>
			{spans.map((span, i) =>
				span.bold ? (
					// biome-ignore lint/suspicious/noArrayIndexKey: l'ordre des morceaux d'une ligne est stable
					<strong key={i} className={strong}>
						{span.text}
					</strong>
				) : (
					// biome-ignore lint/suspicious/noArrayIndexKey: l'ordre des morceaux d'une ligne est stable
					<span key={i}>{span.text}</span>
				),
			)}
		</>
	);
}

/** Affiche une réponse de l'assistant : paragraphes, puces et gras. */
export function Rich({ text }: { text: string }) {
	const blocks = parseRich(text);
	return (
		<div className="space-y-3">
			{blocks.map((block, i) =>
				block.type === "p" ? (
					// biome-ignore lint/suspicious/noArrayIndexKey: les blocs ne changent pas d'ordre
					<p key={i}>
						<Spans spans={block.spans} />
					</p>
				) : (
					// biome-ignore lint/suspicious/noArrayIndexKey: les blocs ne changent pas d'ordre
					<ul key={i} className="list-disc space-y-1.5 pl-5">
						{block.items.map((item, j) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: les puces ne changent pas d'ordre
							<li key={j}>
								<Spans spans={item} strong="font-medium" />
							</li>
						))}
					</ul>
				),
			)}
		</div>
	);
}
