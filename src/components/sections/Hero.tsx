"use client";

import { ChatPanel } from "@/components/chat/ChatPanel";
import { useChat } from "@/components/chat/ChatProvider";
import { ArrowDown, ArrowRight } from "@/components/ui/Icon";
import type { Content } from "@/content/types";
import Image from "next/image";

/** L'accueil : qui est Tudor, puis le chat. L'en-tête se replie dès que la conversation démarre. */
export function Hero({ hero }: { hero: Content["hero"] }) {
	const { assistant, talking, heroRef, ask } = useChat();

	return (
		<section
			aria-label={hero.name}
			className={`glow relative isolate flex min-h-[calc(100dvh-61px)] flex-col items-center px-5 pb-10 text-center ${
				talking ? "pt-[22px]" : "pt-14 max-md:pt-[34px]"
			}`}
		>
			<span className="relative inline-block leading-none">
				<Image
					src="/images/tudor.jpg"
					alt={hero.photoAlt}
					width={92}
					height={92}
					sizes="92px"
					priority
					className={`rounded-full object-cover transition-[width,height] duration-300 ${
						talking
							? "size-10 shadow-[0_0_0_1px_var(--color-hair)]"
							: "size-[92px] shadow-[0_0_0_4px_var(--color-bg),0_0_0_5px_var(--color-hair),0_18px_40px_-18px_rgb(0_0_0/0.4)]"
					}`}
				/>
				<span
					className={`absolute rounded-full bg-muted ${
						talking
							? "-right-px -bottom-px size-[11px] border-2 border-bg"
							: "right-[3px] bottom-[3px] size-3.5 border-[3px] border-bg"
					}`}
				/>
			</span>

			<h1
				className={`font-bold ${
					talking
						? "mt-1.5 text-lg tracking-[-0.02em]"
						: "mt-[18px] text-4xl leading-[1.1] tracking-[-0.04em]"
				}`}
			>
				{hero.name}
			</h1>
			{!talking && <p className="mt-1.5 text-lg text-muted">{hero.role}</p>}

			<div
				ref={heroRef}
				className={`w-full max-w-[780px] ${talking ? "mt-[18px]" : "mt-10"}`}
			>
				<ChatPanel variant="hero" />
			</div>
			<p className="mt-4 flex flex-wrap items-center justify-center gap-x-1.5 text-sm text-muted">
				{assistant.labels.notice}
				<button
					type="button"
					onClick={() => ask("demo")}
					className="inline-flex min-h-11 cursor-pointer items-center gap-1 font-medium text-accent underline underline-offset-4 md:min-h-0"
				>
					{assistant.labels.how}
					<ArrowRight />
				</button>
			</p>

			<a
				href="#portfolio"
				className="mt-auto inline-flex min-h-11 items-center gap-1.5 pt-9 text-sm text-muted transition-colors hover:text-fg"
			>
				{hero.readOn}
				<ArrowDown />
			</a>
		</section>
	);
}
