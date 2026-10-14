"use client";

import { Chat, Close } from "@/components/ui/Icon";
import { useEffect } from "react";
import { ChatPanel } from "./ChatPanel";
import { useChat } from "./ChatProvider";

/** La bulle en bas à droite : le chat suit le visiteur quand il descend dans la page. */
export function ChatDock() {
	const { assistant, heroVisible, dockOpen, openDock, closeDock } = useChat();

	useEffect(() => {
		if (!dockOpen) return;
		const onKey = (event: KeyboardEvent) => {
			if (event.key === "Escape") closeDock();
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [dockOpen, closeDock]);

	if (heroVisible) return null;

	return (
		<div className="fixed right-4 bottom-[calc(16px+env(safe-area-inset-bottom,0px))] z-20 flex flex-col items-end">
			{dockOpen ? (
				// `dvh` suit la hauteur réelle de l'écran quand la barre d'adresse mobile se replie.
				<div
					role="dialog"
					aria-label={assistant.dock.open}
					className="pop flex h-[min(620px,calc(100dvh-100px))] w-[min(420px,calc(100vw-32px))] flex-col overflow-hidden rounded-[22px] bg-surface shadow-[0_0_0_1px_var(--color-hair),0_32px_70px_-26px_rgb(0_0_0/0.4)]"
				>
					<header className="flex items-center gap-3 bg-linear-to-b from-glow to-surface py-2.5 pr-2 pl-5">
						<div>
							<b className="block font-mono text-base leading-[1.3] font-medium">
								ask<span className="text-accent">Tudor</span>
								<span className="caret text-accent">_</span>
							</b>
							<span className="block text-sm leading-[1.3] text-muted">
								{assistant.dock.subtitle}
							</span>
						</div>
						<button
							type="button"
							onClick={closeDock}
							aria-label={assistant.dock.close}
							className="ml-auto grid size-11 cursor-pointer place-items-center rounded-full text-lg text-muted transition-colors hover:bg-hair hover:text-fg"
						>
							<Close />
						</button>
					</header>
					<div className="min-h-0 flex-1">
						<ChatPanel variant="dock" />
					</div>
				</div>
			) : (
				<button
					type="button"
					onClick={openDock}
					aria-label={assistant.dock.open}
					className="pop flex min-h-[52px] min-w-[52px] cursor-pointer items-center justify-center gap-2 rounded-full bg-fg px-4 font-medium text-bg shadow-[0_16px_36px_-14px_rgb(0_0_0/0.45)] transition-colors hover:bg-accent md:px-5"
				>
					<Chat className="text-xl" />
					<span className="max-md:hidden">{assistant.dock.open}</span>
				</button>
			)}
		</div>
	);
}
