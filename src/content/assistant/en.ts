import type { AssistantContent } from "../types";

/**
 * The assistant's prepared answers, in English. Same structure as `fr.ts`:
 * edit by hand, keep the two files in step.
 */
export const assistantEn: AssistantContent = {
	greeting:
		"Hello.\nTudor is somewhere between a bug and a coffee, but his assistant is always here.\nI can tell you about his projects, his background, or why an architect started writing code.",
	placeholder: "Ask your question",
	send: "Send",

	starters: ["pourquoi", "junior", "nexqt", "archizen"],
	fallbackSuggestions: [
		"archi",
		"ia",
		"equipe",
		"stack",
		"dispo",
		"langues",
		"parcours",
		"flowni",
	],

	answers: {
		pourquoi: {
			question: "Why hire Tudor?",
			short: "Why hire him?",
			text: [
				"**Good question, though I may be slightly biased.**",
				"He ships. ArchiZen and Flowni are live, you can open them while we talk.",
				"He knows how to run a project. Seven years leading projects worth tens of millions of euros: a sprint does not scare him.",
				"He builds useful AI, the kind that cites its sources. And architecture left him with a real eye for well-designed screens.",
			].join("\n"),
			link: { label: "See his work", to: "pro" },
			next: ["junior", "ia", "nexqt"],
		},
		junior: {
			question: "Isn't he too junior?",
			short: "Isn't he too junior?",
			text: [
				"**Junior on paper, not in method.**",
				"A serious three-year training path, since February 2024: O'clock, then a level 7 (master's level) title at Liora, and an AWS Solutions Architect course since September 2026.",
				"In the field, as an intern at IACrea then on a work-study contract at NEXQT, hands in the code every day on top of the classes. And in the evenings, he keeps coding: that is how ArchiZen came to life.",
				"Add seven years of architecture, and you get a junior who is not discovering the working world.",
			].join("\n"),
			link: { label: "See his background", to: "experience" },
			next: ["equipe", "nexqt", "archi"],
		},
		nexqt: {
			question: "What does he do at NEXQT?",
			short: "What does he do at NEXQT?",
			text: [
				"**Full Stack Engineer on a work-study contract, from September 2025 to March 2027.**",
				"A climate data startup. NEXQT helps local authorities map their emissions, energy and traffic.",
				"As the only developer, reporting to the CTO, he handles the front-end and back-end repos, the connection to the data APIs and databases, and the AWS infrastructure.",
				"Among his projects: road data exploration, restructuring the application to onboard new local authorities, and Ask, for querying data in natural language.",
			].join("\n"),
			link: { label: "See NEXQT", to: "pro-nexqt" },
			next: ["ia", "equipe", "stack"],
		},
		archizen: {
			question: "What is ArchiZen?",
			short: "What is ArchiZen?",
			text: [
				"**An AI that helps architects frame their projects against the regulations.**",
				"The idea comes from his seven years as an architect: too many hours spent looking for the right rule, in the right version.",
				"How it works: a home-made RAG that answers from official texts only, cites the article behind every sentence and flags changes within 24 hours.",
				"His role: co-founder with Anna Dominguez, he carried all of it, from the need to the RAG. Launched in late September 2026, ArchiZen already has around fifty sign-ups and more than 1,000 questions answered.",
			].join("\n"),
			link: { label: "See ArchiZen", to: "archizen" },
			next: ["ia", "archi", "dispo"],
		},
		dispo: {
			question: "Is he available?",
			short: "Is he available?",
			text: [
				"**On a work-study contract at NEXQT until March 2027.**",
				"After that, he sees himself staying on, and keeping ArchiZen going in the evenings.",
				"But he always keeps an ear open for projects with a strong social impact. He is based in the Paris region and ideally works hybrid. If you have a project like that, the simplest is to write to him on LinkedIn.",
			].join("\n"),
			link: { label: "See contact", to: "contact" },
			next: ["langues", "pourquoi", "parcours"],
		},
		archi: {
			question: "Why did he change careers?",
			short: "Why did he change careers?",
			text: [
				"**He did not really change, he brought his two passions together.**",
				"Tudor always wanted to do both, architecture and code. After seven years at Chartier Dalix, he had seen what the job had to offer, and he chose to combine the two.",
				"To solve the real problems he ran into during his career. The first one: making the legal world, which architecture school barely touches on, more accessible to architects, especially early in their careers. ArchiZen came out of that.",
				"The method has not changed: an application is built like a building, with a plan, a framing, stages and iterations.",
			].join("\n"),
			link: { label: "Read his story", to: "archi" },
			next: ["archizen", "junior", "parcours"],
		},
		flowni: {
			question: "What about Flowni?",
			short: "What about Flowni?",
			text: [
				"**It started as a project for his wife.**",
				"A self-employed practitioner, she wanted to keep track of her patients: how many she had seen, how much she had collected, and what she really kept.",
				"The home-made tool grew into a two-sided app: practitioners track what each session brings in, and practices consolidate what their practitioners pay back.",
				"Tudor built it with Anna Dominguez, on iOS, Android and the web.",
			].join("\n"),
			link: { label: "See Flowni", to: "flowni" },
			next: ["archizen", "nexqt", "stack"],
		},
		parcours: {
			question: "What is his background?",
			short: "His background?",
			text: [
				"**Architecture first, then code.**",
				"- **2017:** state architecture diploma (master's degree) at ENSA Versailles, then the HMONP licence in 2018.",
				"- **2017 – 2024:** architect at Chartier Dalix, leading teams and projects.",
				"- **2024:** application designer-developer at O'clock, RNCP level 6 title (bachelor's level).",
				"- **Dec 2024 – May 2025:** Full Stack Engineer intern at IACrea.",
				"- **Sept 2025 – Mar 2027:** Full Stack Engineer on a work-study contract at NEXQT, with a level 7 (master's level) Liora title.",
				"- **Since Sept 2026:** preparing for the AWS Solutions Architect certification.",
				"And in the evenings, he builds ArchiZen and Flowni.",
			].join("\n"),
			link: { label: "See his background", to: "experience" },
			next: ["archi", "junior", "dispo"],
		},
		stack: {
			question: "What are his skills?",
			short: "His skills?",
			text: [
				"**The right tool for each task.**",
				"Tools are quick to learn, what matters is the know-how. His: turning a business need into a product, breaking it down and leading it, designing RAG systems and AI agents, building web and mobile apps with their APIs, then deploying them on AWS.",
				"Day to day, that mostly means React, Next.js, React Native, Node.js, Python and PostgreSQL.",
			].join("\n"),
			link: { label: "See his skills", to: "competences" },
			next: ["ia", "nexqt", "dispo"],
		},
		ia: {
			question: "How does he use AI?",
			short: "And AI?",
			text: [
				"**On both sides of the screen.**",
				"He builds AI products, like ArchiZen's RAG or Ask at NEXQT.",
				"And he codes with AI, using Claude Code and Cursor, but he learned to code first. He mostly hands it the repetitive tasks worth automating, and keeps design, architecture and code review for himself.",
				"A very fast colleague, in short, whose work he always reviews.",
			].join("\n"),
			link: { label: "See his skills", to: "competences" },
			next: ["ia", "nexqt", "dispo"],
		},
		equipe: {
			question: "How does he work in a team?",
			short: "In a team?",
			text: [
				"**He led teams before he wrote code for a company.**",
				"At the architecture firm, he led about ten people, between architects and engineering consultants.",
				"At NEXQT, he is the only developer, reporting to the CTO, and autonomous on the whole technical side.",
				"Constance Laborie, who managed him at IACrea, puts it this way: “From his very first days, Tudor proved autonomous, motivated and resourceful.”",
			].join("\n"),
			link: { label: "See the recommendations", to: "recommandations" },
			next: ["ia", "nexqt", "dispo"],
		},
		langues: {
			question: "Does he speak English?",
			short: "Does he speak English?",
			text: [
				"**Fluently, since he was six.**",
				"He is bilingual in English.",
				"Romanian is his mother tongue, and French has become one too: he has spoken it for more than twenty years. He also gets by in German, at B1 level.",
			].join("\n"),
			link: { label: "See his skills", to: "competences" },
			next: ["ia", "nexqt", "dispo"],
		},
		demo: {
			question: "How does this assistant work?",
			short: "How does this assistant work?",
			text: [
				"**Nothing magic, I promise.**",
				"A language model, Claude Haiku, connected to a fact sheet drawn from this site, and nothing else. If it is not in there, I tell you I don't know.",
				"Common questions, like this one, have answers written in advance by Tudor. And to prevent abuse, I limit the number of questions and leave off-topic requests aside.",
			].join("\n"),
			link: { label: "See his skills", to: "competences" },
			next: ["pourquoi", "ia", "nexqt"],
		},
	},

	smallTalk: {
		hello:
			"Hello! Tell me what brings you here: one of his projects, his background, his skills?",
		thanks: "My pleasure. If another question comes up, I'm here.",
	},

	labels: {
		name: "askTudor",
		instant: "instant",
		ai: "AI",
		thinking: [
			"Digging through his commits",
			"Rereading his background",
			"Checking my sources",
		],
		notice: "AI assistant. It answers from the content of this site.",
		how: "How it works",
	},

	errors: {
		offline:
			"For now I can only answer the suggested questions. For anything else, the simplest is to message Tudor on LinkedIn.",
		rateLimited:
			"That's a lot of questions at once. Please try again in a moment.",
		tooLong: "Your question is a bit long. Could you shorten it?",
		generic: "The answer could not get through. Please ask again in a moment.",
		offTopic:
			"I only answer questions about Tudor, his work and his background. What would you like to know about him?",
	},

	dock: {
		subtitle: "Tudor's assistant, always here",
		open: "Ask a question",
		close: "Close",
	},

	sectionLinks: {
		recommandations: "See the recommendations",
		archizen: "See ArchiZen",
		flowni: "See Flowni",
		"pro-nexqt": "See NEXQT",
		"pro-iacrea": "See IACrea",
		archi: "Read his story",
		experience: "See his background",
		competences: "See his skills",
		contact: "See contact",
		pro: "See his work",
		projets: "See his projects",
	},

	extraFacts: [
		"How this assistant works: nothing magic, a language model (Claude Haiku) plugged into a fact sheet drawn from this site's content, with a few instructions and simple limits (questions per visitor, off-topic refusal). Common questions have answers written in advance. Stay modest about it: do not present it as a feat or a showcase.",
		'LinkedIn recommendations (quote them as given, with their author; they are translated from French): Constance Laborie, co-founder and CTO of IACrea, who managed him: "From his very first days, Tudor proved autonomous, motivated and resourceful." Pauline Clavelloux, tech entrepreneur, who managed him: "His edge over other developers is a real feel for UI/UX." Benoît Schiex, his instructor at O\'clock: "He is never satisfied with knowing that something works, he wants to understand why." He has four recommendations in total on LinkedIn.',
		"Tudor Neagu describes himself as an app builder. He is a Full Stack Engineer and a trained architect.",
		"Why he codes: he always wanted to do both, architecture and code. After seven years of architecture, he had seen what the job had to offer and chose to combine his two passions, to solve the real problems he ran into during his career: for instance making the legal world, which architecture school barely touches on, more accessible to architects, especially early in their careers. To him, an application is built like a building: a plan, a framing, stages and iterations. That is why he created ArchiZen.",
		"Whether he is too junior: since February 2024 he has followed a serious three-year training path (O'clock, then a level 7 title at Liora, and an AWS Solutions Architect course since September 2026, whose exam he has not taken yet: never say he is certified), done in the field, as an intern at IACrea then on a work-study contract at NEXQT, hands in the code every day on top of the theory. His seven years of architecture taught him to organise, break down and take on every task. He is curious and learns fast. In the evenings, he keeps coding on his own projects: that is how ArchiZen came to life. Avoid repeating the value of his architecture projects from one answer to the next.",
		"Front end or back end: both, with a soft spot for intuitive, well-designed interfaces, an architect's habit. Tools are quick to learn: what matters is the know-how and picking the right tool for each task.",
		"AI: he builds AI products (ArchiZen's home-made RAG, Ask at NEXQT) and codes with AI every day, with Claude Code and Cursor. He learned to code before these tools existed: he mostly hands them the repetitive tasks worth automating, and keeps design, architecture and code review for himself.",
		"Teamwork: at the architecture firm, he led about ten people (architects, engineering consultants). At NEXQT, he is the only developer, reporting to the CTO, and autonomous on the whole technical side.",
		"Languages: bilingual English (since age six), Romanian mother tongue, French spoken for more than twenty years, at native level, German B1.",
		"Flowni started as a project for his wife, a self-employed practitioner, to keep track of her patients: patients seen, money collected, what she really keeps. The tool grew into a two-sided app: practitioners track what each session brings in, practices consolidate what their practitioners pay back. Tudor built it with Anna Dominguez.",
		"Situation and availability: Tudor is on a work-study programme at NEXQT until March 2027, with a Software Engineer programme at Liora (formerly DataScientest), an RNCP level 7 (master's level) title. After that, he sees himself staying on at NEXQT and continuing ArchiZen, while staying open to projects with real impact. At IACrea, from December 2024 to May 2025, he was a Full Stack Engineer intern. He is based in the Paris region, open to remote work, and ideally looking for a hybrid setup. He wants missions with a strong social impact; crypto and speculative projects do not interest him. Salary: not specified, point to LinkedIn.",
		"Never name a NEXQT client authority. Do not mention Figma.",
	],
};
