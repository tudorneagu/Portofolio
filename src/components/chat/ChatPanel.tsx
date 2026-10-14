"use client";

import { ArrowRight, ArrowUp } from "@/components/ui/Icon";
import type { AnswerKey } from "@/content/types";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { type ChatMessage, type ChatVariant, useChat } from "./ChatProvider";
import { Rich } from "./Rich";

// 44 px de haut au doigt, plus compact à la souris.
const chip =
	"inline-flex min-h-11 cursor-pointer items-center rounded-full border border-hair bg-surface px-3.5 text-sm text-fg transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent md:min-h-9";

function Suggestions({
	keys,
	full,
}: {
	keys: AnswerKey[];
	/** Question entière (bulles de départ) plutôt que sa version courte (enchaînements). */
	full?: boolean;
}) {
	const { assistant, ask } = useChat();
	return (
		<>
			{keys.map((key) => (
				<button
					key={key}
					type="button"
					className={chip}
					onClick={() => ask(key)}
				>
					{full
						? assistant.answers[key].question
						: assistant.answers[key].short}
				</button>
			))}
		</>
	);
}

/** Pendant que le modèle cherche : une ligne qui change, suivie du curseur. */
function Thinking({ lines }: { lines: string[] }) {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(
			() => setIndex((i) => (i + 1) % lines.length),
			1000,
		);
		return () => clearInterval(timer);
	}, [lines.length]);

	return (
		<p className="text-muted">
			{lines[index]}
			<span className="caret text-accent">_</span>
		</p>
	);
}

// Rythme d'arrivée du message d'accueil au chargement de la page.
const GREET_START_MS = 350;
const GREET_WORD_MS = 55;

function BotMessage({
	message,
	variant,
}: { message: ChatMessage; variant: ChatVariant }) {
	const { assistant, goTo, talking } = useChat();
	const isDock = variant === "dock";

	// Avant la première question, l'accueil est un simple texte centré : la grande photo le « dit ».
	if (!talking && !isDock) {
		// Une ligne par phrase : le bonjour d'abord, seul et plus marqué, puis le reste.
		const lines = message.text.split("\n").map((line) => line.split(" "));
		const total = lines.reduce((count, line) => count + line.length, 0);
		let seen = 0;
		return (
			<div className="mx-auto max-w-[32em] text-center tracking-[-0.01em] text-balance">
				{/* Au chargement, le message arrive mot par mot, puis le tiret clignote quelques fois et s'efface. */}
				{lines.map((line, lineIndex) => {
					const start = seen;
					seen += line.length;
					const isLast = lineIndex === lines.length - 1;
					return (
						<p
							// biome-ignore lint/suspicious/noArrayIndexKey: les lignes du message ne changent pas d'ordre
							key={lineIndex}
							className={
								lineIndex === 0
									? "text-xl leading-[1.45] font-medium text-fg"
									: "text-xl leading-[1.45] text-muted"
							}
						>
							{line.map((word, index) => (
								<span
									// biome-ignore lint/suspicious/noArrayIndexKey: les mots d'une ligne ne changent pas d'ordre
									key={index}
									className="greet-word"
									style={{
										animationDelay: `${GREET_START_MS + (start + index) * GREET_WORD_MS}ms`,
									}}
								>
									{word}{" "}
								</span>
							))}
							{isLast && (
								<span
									aria-hidden="true"
									className="greet-caret text-accent"
									style={{
										animationDelay: `${GREET_START_MS + total * GREET_WORD_MS}ms`,
									}}
								>
									_
								</span>
							)}
						</p>
					);
				})}
			</div>
		);
	}

	return (
		<div>
			<div
				className={`w-fit max-w-full rounded-[6px_18px_18px_18px] px-4 py-3 leading-[1.6] ${
					isDock ? "bg-soft text-base" : "border border-hair bg-surface text-lg"
				}`}
			>
				{message.kind && (
					<div className="mb-1 flex items-center gap-2 font-mono text-xs text-muted">
						<span>{assistant.labels.name}</span>
						<span
							className={`rounded-full border px-2 leading-[1.6] ${
								message.kind === "instant"
									? "border-live/40 bg-live-soft text-live-ink"
									: "border-hair bg-surface"
							}`}
						>
							{message.kind === "instant"
								? assistant.labels.instant
								: assistant.labels.ai}
						</span>
					</div>
				)}
				{message.pending ? (
					<Thinking lines={assistant.labels.thinking} />
				) : (
					<Rich text={message.text} />
				)}
				{message.link && (
					<button
						type="button"
						className="mt-2.5 inline-flex min-h-11 cursor-pointer items-center gap-1.5 font-medium text-accent underline underline-offset-4 md:min-h-0"
						onClick={() => message.link && goTo(message.link.to)}
					>
						{message.link.label}
						<ArrowRight />
					</button>
				)}
			</div>
		</div>
	);
}

/**
 * Le chat lui-même : le fil, le champ, et les questions proposées dessous.
 * Il existe en deux exemplaires qui lisent le même état : dans l'accueil, et dans la bulle.
 */
export function ChatPanel({ variant }: { variant: ChatVariant }) {
	const {
		assistant,
		messages,
		suggestions,
		busy,
		talking,
		send,
		focusRequest,
		dockOpen,
	} = useChat();
	const [draft, setDraft] = useState("");
	const thread = useRef<HTMLDivElement>(null);
	const input = useRef<HTMLInputElement>(null);
	const isDock = variant === "dock";
	// Un seul des deux exemplaires annonce les messages aux lecteurs d'écran : celui qu'on voit.
	const announces = isDock || !dockOpen;

	// Le fil suit toujours le dernier message.
	// biome-ignore lint/correctness/useExhaustiveDependencies: on défile à chaque changement du fil
	useEffect(() => {
		const node = thread.current;
		if (node) node.scrollTop = node.scrollHeight;
	}, [messages, suggestions]);

	useEffect(() => {
		if (focusRequest.tick > 0 && focusRequest.target === variant) {
			input.current?.focus({ preventScroll: true });
		}
	}, [focusRequest, variant]);

	function submit(event: FormEvent) {
		event.preventDefault();
		if (!draft.trim() || busy) return;
		send(draft.slice(0, 500));
		setDraft("");
	}

	return (
		<div
			className={
				isDock
					? "flex h-full min-h-0 flex-col px-3.5 pb-3.5"
					: "w-full text-left"
			}
		>
			{/* `aria-busy` retient l'annonce tant que la réponse s'écrit : elle est lue une fois, entière. */}
			<div
				ref={thread}
				aria-live={announces ? "polite" : "off"}
				aria-busy={busy}
				className={`no-scrollbar flex flex-col overflow-y-auto ${
					isDock
						? "min-h-0 flex-1 gap-3 px-0.5 pt-2.5 pb-1.5"
						: "max-h-[min(52vh,520px)] gap-4 px-1 py-1"
				}`}
			>
				{messages.map((message) =>
					message.role === "user" ? (
						<p
							key={message.id}
							className={`max-w-[82%] self-end rounded-[18px_18px_6px_18px] bg-fg px-[18px] py-2.5 text-bg ${
								isDock ? "text-base" : "text-lg"
							}`}
						>
							{message.text}
						</p>
					) : (
						<BotMessage key={message.id} message={message} variant={variant} />
					),
				)}
				{talking && suggestions.length > 0 && (
					<div className={`flex flex-wrap gap-2 `}>
						<Suggestions keys={suggestions} />
					</div>
				)}
			</div>

			<form
				onSubmit={submit}
				className={`flex items-center gap-2.5 border border-hair bg-surface transition-[border-color,box-shadow] focus-within:border-accent ${
					isDock
						? "mt-2 rounded-[14px] py-1 pr-1 pl-3.5 focus-within:shadow-[0_0_0_3px_var(--color-accent-soft)]"
						: `${talking ? "mt-3.5" : "mt-6"} rounded-[20px] py-2.5 pr-2.5 pl-6 shadow-[0_1px_2px_rgb(0_0_0/0.04),0_26px_54px_-32px_rgb(0_0_0/0.38)] focus-within:shadow-[0_0_0_4px_var(--color-accent-soft),0_26px_54px_-32px_rgb(0_0_0/0.38)]`
				}`}
			>
				<input
					ref={input}
					type="text"
					value={draft}
					onChange={(event) => setDraft(event.target.value)}
					maxLength={500}
					autoComplete="off"
					aria-label={assistant.placeholder}
					placeholder={assistant.placeholder}
					className={`min-w-0 flex-1 bg-transparent text-fg outline-none placeholder:text-muted ${
						isDock ? "py-1.5 text-base" : "py-2.5 text-lg"
					}`}
				/>
				<button
					type="submit"
					disabled={busy}
					aria-label={assistant.send}
					className="grid size-11 flex-none cursor-pointer place-items-center rounded-full bg-fg text-lg text-bg transition-colors hover:bg-accent disabled:cursor-default disabled:opacity-40"
				>
					<ArrowUp />
				</button>
			</form>

			{!talking && (
				<div
					className={`flex flex-wrap gap-2 ${isDock ? "pt-2.5" : "justify-center pt-[18px]"}`}
				>
					<Suggestions
						keys={isDock ? assistant.starters.slice(0, 3) : assistant.starters}
						full
					/>
				</div>
			)}
		</div>
	);
}
