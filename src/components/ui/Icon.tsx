import type { SVGProps } from "react";

/**
 * Les icônes du site, dessinées dans le même trait. Elles remplacent les flèches
 * en caractères (↑ ↗ → ×), dont le dessin change d'une police et d'un système à l'autre.
 */
function Svg({ children, ...props }: SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 16 16"
			width="1em"
			height="1em"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.6"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			focusable="false"
			{...props}
		>
			{children}
		</svg>
	);
}

export function ArrowUp(props: SVGProps<SVGSVGElement>) {
	return (
		<Svg {...props}>
			<path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" />
		</Svg>
	);
}

export function ArrowDown(props: SVGProps<SVGSVGElement>) {
	return (
		<Svg {...props}>
			<path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" />
		</Svg>
	);
}

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
	return (
		<Svg {...props}>
			<path d="M3 8h10M8.5 3.5 13 8l-4.5 4.5" />
		</Svg>
	);
}

/** Lien qui sort du site. */
export function ArrowOut(props: SVGProps<SVGSVGElement>) {
	return (
		<Svg {...props}>
			<path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" />
		</Svg>
	);
}

export function Close(props: SVGProps<SVGSVGElement>) {
	return (
		<Svg {...props}>
			<path d="m4 4 8 8M12 4l-8 8" />
		</Svg>
	);
}

/** Bulle de conversation, pour ouvrir le chat. */
export function Chat(props: SVGProps<SVGSVGElement>) {
	return (
		<Svg {...props}>
			<path d="M3 4.5A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5v5a1.5 1.5 0 0 1-1.5 1.5H7l-3 2.5V11h.5" />
		</Svg>
	);
}
