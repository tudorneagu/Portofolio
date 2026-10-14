"use client";

import type {
	AnswerKey,
	AssistantContent,
	Lang,
	SectionId,
} from "@/content/types";
import { prefersReducedMotion, scrollBehavior } from "@/lib/motion";
import { readTag, stripTag } from "@/lib/rich";
import {
	type ReactNode,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";

export interface ChatMessage {
	id: number;
	role: "user" | "bot";
	text: string;
	/** Réponse préparée (« instantané ») ou rédigée par le modèle (« IA »). Absent pour l'accueil. */
	kind?: "instant" | "ai";
	link?: { label: string; to: SectionId };
	pending?: boolean;
}

export type ChatVariant = "hero" | "dock";

interface ChatContextValue {
	lang: Lang;
	assistant: AssistantContent;
	messages: ChatMessage[];
	suggestions: AnswerKey[];
	busy: boolean;
	/** Vrai dès que le visiteur a posé une question. */
	talking: boolean;
	ask: (key: AnswerKey) => void;
	send: (text: string) => void;
	goTo: (id: SectionId) => void;
	/** Le chat de l'accueil s'enregistre ici : quand il sort de l'écran, la bulle prend le relais. */
	heroRef: (node: HTMLElement | null) => void;
	heroVisible: boolean;
	dockOpen: boolean;
	openDock: () => void;
	closeDock: () => void;
	/** Amène le visiteur au champ de saisie, où qu'il soit dans la page. */
	focusChat: () => void;
	focusRequest: { target: ChatVariant; tick: number };
}

const ChatContext = createContext<ChatContextValue | null>(null);

export function useChat(): ChatContextValue {
	const value = useContext(ChatContext);
	if (!value) throw new Error("useChat doit être utilisé sous <ChatProvider>");
	return value;
}

const HELLO =
	/^\s*(salut|bonjour|bonsoir|coucou|hello|hi|hey|yo|good (morning|evening|afternoon))\b[\s!.,?]*$/i;
const THANKS =
	/^\s*(merci|thanks|thank you|thx|top|super|ok|d'accord|parfait|great|perfect)\b[\s!.,?a-zé]*$/i;
const WORDS_PER_TICK = 3;
const TICK_MS = 45;
/** Durée minimale des messages d'attente, pour qu'on ait le temps d'en lire deux. */
const MIN_THINKING_MS = 2000;

const STATUS_ERRORS: Record<number, keyof AssistantContent["errors"]> = {
	413: "tooLong",
	422: "offTopic",
	429: "rateLimited",
	503: "offline",
};

export function ChatProvider({
	lang,
	assistant,
	children,
}: {
	lang: Lang;
	assistant: AssistantContent;
	children: ReactNode;
}) {
	const [messages, setMessages] = useState<ChatMessage[]>([
		{ id: 0, role: "bot", text: assistant.greeting },
	]);
	const [suggestions, setSuggestions] = useState<AnswerKey[]>([]);
	const [busy, setBusy] = useState(false);
	const [heroVisible, setHeroVisible] = useState(true);
	const [dockOpen, setDockOpen] = useState(false);
	const [focusRequest, setFocusRequest] = useState<{
		target: ChatVariant;
		tick: number;
	}>({
		target: "hero",
		tick: 0,
	});

	const nextId = useRef(1);
	const asked = useRef(new Set<AnswerKey>());
	/** Ce qui est envoyé au modèle : les échanges, sans le message d'accueil. */
	const turns = useRef<{ role: "user" | "assistant"; content: string }[]>([]);
	const timers = useRef(new Set<ReturnType<typeof setInterval>>());
	const dismissed = useRef(false);
	const heroNode = useRef<HTMLElement | null>(null);
	const observer = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		const running = timers.current;
		return () => {
			for (const timer of running) clearInterval(timer);
			observer.current?.disconnect();
		};
	}, []);

	const patch = useCallback((id: number, change: Partial<ChatMessage>) => {
		setMessages((list) =>
			list.map((m) => (m.id === id ? { ...m, ...change } : m)),
		);
	}, []);

	const push = useCallback((message: Omit<ChatMessage, "id">): number => {
		const id = nextId.current++;
		setMessages((list) => [...list, { ...message, id }]);
		return id;
	}, []);

	/** Fait arriver un texte par groupes de mots, comme une réponse qui se diffuse. */
	const typeOut = useCallback(
		(id: number, text: string, done: () => void) => {
			if (prefersReducedMotion()) {
				patch(id, { text });
				done();
				return;
			}
			const words = text.match(/\S+\s*/g) ?? [text];
			let shown = 0;
			const timer = setInterval(() => {
				shown += WORDS_PER_TICK;
				patch(id, { text: words.slice(0, shown).join("") });
				if (shown >= words.length) {
					clearInterval(timer);
					timers.current.delete(timer);
					patch(id, { text });
					done();
				}
			}, TICK_MS);
			timers.current.add(timer);
		},
		[patch],
	);

	const suggest = useCallback(
		(preferred: AnswerKey[]) => {
			const picked: AnswerKey[] = [];
			for (const key of [...preferred, ...assistant.fallbackSuggestions]) {
				if (picked.length === 3) break;
				if (!asked.current.has(key) && !picked.includes(key)) picked.push(key);
			}
			setSuggestions(picked);
		},
		[assistant.fallbackSuggestions],
	);

	const reply = useCallback(
		(
			question: string,
			text: string,
			after: () => Partial<ChatMessage> | undefined,
			next: AnswerKey[],
		) => {
			setBusy(true);
			setSuggestions([]);
			push({ role: "user", text: question });
			const id = push({ role: "bot", text: "", kind: "instant" });
			typeOut(id, text, () => {
				turns.current.push(
					{ role: "user", content: question },
					{ role: "assistant", content: text },
				);
				const extra = after();
				if (extra) patch(id, extra);
				suggest(next);
				setBusy(false);
			});
		},
		[patch, push, suggest, typeOut],
	);

	const ask = useCallback(
		(key: AnswerKey) => {
			if (busy) return;
			const answer = assistant.answers[key];
			asked.current.add(key);
			reply(
				answer.question,
				answer.text,
				() => ({ link: answer.link }),
				answer.next,
			);
		},
		[assistant.answers, busy, reply],
	);

	const send = useCallback(
		(raw: string) => {
			const question = raw.trim();
			if (!question || busy) return;
			if (HELLO.test(question)) {
				reply(question, assistant.smallTalk.hello, () => undefined, []);
				return;
			}
			if (THANKS.test(question)) {
				reply(question, assistant.smallTalk.thanks, () => undefined, []);
				return;
			}

			setBusy(true);
			setSuggestions([]);
			push({ role: "user", text: question });
			const id = push({ role: "bot", text: "", kind: "ai", pending: true });
			const history = [
				...turns.current,
				{ role: "user" as const, content: question },
			];

			const fail = (key: keyof AssistantContent["errors"]) => {
				patch(id, {
					text: assistant.errors[key],
					kind: undefined,
					pending: false,
				});
			};

			(async () => {
				const started = Date.now();
				try {
					const response = await fetch("/api/chat", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ lang, turns: history }),
					});
					if (!response.ok || !response.body) {
						fail(STATUS_ERRORS[response.status] ?? "generic");
						return;
					}
					const reader = response.body.getReader();
					const decoder = new TextDecoder();
					let full = "";
					for (;;) {
						const { done, value } = await reader.read();
						if (done) break;
						full += decoder.decode(value, { stream: true });
						const visible = stripTag(full);
						// Le texte reçu attend la fin des messages d'attente avant de s'afficher.
						if (visible && Date.now() - started >= MIN_THINKING_MS) {
							patch(id, { text: visible, pending: false });
						}
					}
					const answer = stripTag(full);
					if (!answer) {
						fail("generic");
						return;
					}
					const wait = MIN_THINKING_MS - (Date.now() - started);
					if (wait > 0)
						await new Promise((resolve) => setTimeout(resolve, wait));
					const tag = readTag(full) as SectionId | null;
					const label = tag ? assistant.sectionLinks[tag] : undefined;
					patch(id, {
						text: answer,
						pending: false,
						link: tag && label ? { label, to: tag } : undefined,
					});
					turns.current = [...history, { role: "assistant", content: answer }];
				} catch {
					fail("generic");
				} finally {
					suggest([]);
					setBusy(false);
				}
			})();
		},
		[assistant, busy, lang, patch, push, reply, suggest],
	);

	const goTo = useCallback((id: SectionId) => {
		const target = document.getElementById(id);
		if (!target) return;
		target.scrollIntoView({
			block: "start",
			behavior: scrollBehavior(),
		});
		target.classList.remove("flash");
		// Relire une mesure force le navigateur à rejouer l'animation.
		void target.offsetWidth;
		target.classList.add("flash");
	}, []);

	const heroRef = useCallback((node: HTMLElement | null) => {
		observer.current?.disconnect();
		heroNode.current = node;
		if (!node || !("IntersectionObserver" in window)) return;
		observer.current = new IntersectionObserver(
			([entry]) => {
				setHeroVisible(entry.isIntersecting);
				if (entry.isIntersecting) {
					setDockOpen(false);
				} else if (
					!dismissed.current &&
					window.matchMedia("(min-width: 900px)").matches
				) {
					setDockOpen(true);
				}
			},
			{ rootMargin: "-70px 0px 0px 0px" },
		);
		observer.current.observe(node);
	}, []);

	const openDock = useCallback(() => {
		dismissed.current = false;
		setDockOpen(true);
		setFocusRequest((r) => ({ target: "dock", tick: r.tick + 1 }));
	}, []);

	const closeDock = useCallback(() => {
		dismissed.current = true;
		setDockOpen(false);
	}, []);

	const focusChat = useCallback(() => {
		if (heroVisible) {
			window.scrollTo({
				top: 0,
				behavior: scrollBehavior(),
			});
			setFocusRequest((r) => ({ target: "hero", tick: r.tick + 1 }));
		} else {
			openDock();
		}
	}, [heroVisible, openDock]);

	const talking = messages.some((m) => m.role === "user");

	const value = useMemo<ChatContextValue>(
		() => ({
			lang,
			assistant,
			messages,
			suggestions,
			busy,
			talking,
			ask,
			send,
			goTo,
			heroRef,
			heroVisible,
			dockOpen,
			openDock,
			closeDock,
			focusChat,
			focusRequest,
		}),
		[
			lang,
			assistant,
			messages,
			suggestions,
			busy,
			talking,
			ask,
			send,
			goTo,
			heroRef,
			heroVisible,
			dockOpen,
			openDock,
			closeDock,
			focusChat,
			focusRequest,
		],
	);

	return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}
