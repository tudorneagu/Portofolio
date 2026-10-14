"use client";

import { useChat } from "@/components/chat/ChatProvider";
import type { Content } from "@/content/types";
import { scrollBehavior } from "@/lib/motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowOut } from "./Icon";
import { useActiveSection } from "./useActiveSection";

export function TopBar({
	nav,
	linkedin,
}: { nav: Content["nav"]; linkedin: string }) {
	const { focusChat } = useChat();
	const active = useActiveSection(nav.links.map((link) => link.href.slice(1)));

	return (
		<header className="sticky top-[env(safe-area-inset-top,0px)] z-10 border-b border-hair bg-bg/85 backdrop-blur-md">
			<a
				href="#contenu"
				className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-20 focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
			>
				{nav.skip}
			</a>
			<div className="mx-auto flex max-w-[1040px] items-center justify-between gap-x-4 px-5 py-2">
				<button
					type="button"
					onClick={() =>
						window.scrollTo({ top: 0, behavior: scrollBehavior() })
					}
					className="flex min-h-11 cursor-pointer items-center gap-2.5 font-mono text-sm"
				>
					<span>
						ask<span className="font-medium text-accent">{nav.brand}</span>
						<span className="caret text-accent">_</span>
					</span>
					<Image
						src="/images/tudor.jpg"
						alt=""
						width={26}
						height={26}
						sizes="26px"
						className="size-[26px] rounded-full border border-hair object-cover"
					/>
				</button>
				<nav
					aria-label={nav.main}
					className="flex items-center gap-x-5 text-sm text-muted max-md:gap-x-1"
				>
					{nav.links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className={`transition-colors hover:text-fg max-md:hidden ${
								active === link.href.slice(1) ? "text-fg" : ""
							}`}
						>
							{link.label}
						</a>
					))}
					<a
						href={linkedin}
						className="inline-flex items-center gap-1 transition-colors hover:text-fg max-md:hidden"
					>
						{nav.linkedin}
						<ArrowOut />
					</a>
					<Link
						href={nav.switchTo.href}
						hrefLang={nav.switchTo.lang}
						lang={nav.switchTo.lang}
						aria-label={nav.switchTo.name}
						className="grid min-h-11 min-w-11 place-items-center font-mono text-xs transition-colors hover:text-fg"
					>
						{nav.switchTo.label}
					</Link>
					<button type="button" onClick={focusChat} className="btn btn-solid">
						{nav.ask}
					</button>
				</nav>
			</div>
		</header>
	);
}
