"use client";

import { type ReactNode, useEffect, useRef } from "react";

/**
 * Fait apparaître son contenu en fondu quand il entre dans l'écran.
 * Le contenu est visible par défaut : seul ce qui se trouve sous l'écran au
 * chargement est masqué puis révélé, donc rien ne dépend du JavaScript pour être lu.
 */
export function Reveal({
	children,
	delay = 0,
	className = "",
}: {
	children: ReactNode;
	delay?: number;
	className?: string;
}) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const node = ref.current;
		if (!node || !("IntersectionObserver" in window)) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		if (node.getBoundingClientRect().top < window.innerHeight) return;

		node.classList.add("reveal-wait");
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				node.classList.add("reveal-in");
				observer.disconnect();
			},
			{ rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
		);
		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={className}
			style={{ transitionDelay: `${delay}ms` }}
		>
			{children}
		</div>
	);
}
