"use client";

import { useChat } from "@/components/chat/ChatProvider";
import type { ReactNode } from "react";

/** Bouton qui ramène au chat, depuis n'importe où dans la page. */
export function AskButton({
	children,
	className,
}: { children: ReactNode; className?: string }) {
	const { focusChat } = useChat();
	return (
		<button type="button" onClick={focusChat} className={className}>
			{children}
		</button>
	);
}
