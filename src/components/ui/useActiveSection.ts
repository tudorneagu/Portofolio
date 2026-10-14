"use client";

import { useEffect, useState } from "react";

/** L'ancre de la section actuellement à l'écran, parmi celles demandées. */
export function useActiveSection(ids: string[]): string | null {
	const [active, setActive] = useState<string | null>(null);
	const key = ids.join(",");

	useEffect(() => {
		if (!("IntersectionObserver" in window)) return;
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) setActive(entry.target.id);
				}
			},
			// Une section devient active quand elle occupe le tiers haut de l'écran.
			{ rootMargin: "-30% 0px -60% 0px" },
		);
		for (const id of key.split(",")) {
			const node = document.getElementById(id);
			if (node) observer.observe(node);
		}
		return () => observer.disconnect();
	}, [key]);

	return active;
}
