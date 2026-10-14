"use client";

import type { Content } from "@/content/types";
import { useActiveSection } from "./useActiveSection";

/** Le sommaire fixe à gauche : il suit la section en cours pendant le défilement. */
export function SideNav({ nav }: { nav: Content["nav"] }) {
	const active = useActiveSection(nav.rail.map((item) => item.href.slice(1)));

	return (
		<nav
			aria-label={nav.summary}
			className="sticky top-[58px] flex flex-col items-start gap-1 pt-[76px] max-lg:hidden"
		>
			<span className="px-3.5 pb-2 font-mono text-xs tracking-[0.08em] text-muted uppercase">
				{nav.summary}
			</span>
			{nav.rail.map((item) => (
				<a
					key={item.href}
					href={item.href}
					className={`rounded-[10px] px-3.5 py-1.5 text-sm leading-[1.3] transition-colors ${
						active === item.href.slice(1)
							? "bg-fg text-bg"
							: "text-muted hover:text-fg"
					}`}
				>
					{item.label}
				</a>
			))}
		</nav>
	);
}
