export type Lang = "fr" | "en";

/** Ancres de la page. Le chat y renvoie, le sommaire les suit. */
export type SectionId =
	| "intro"
	| "pro"
	| "projets"
	| "archi"
	| "experience"
	| "recommandations"
	| "competences"
	| "contact"
	| "pro-nexqt"
	| "pro-iacrea"
	| "archizen"
	| "flowni"
	| "nexqt";

export interface Picture {
	src: string;
	alt: string;
}

export interface Block {
	label: string;
	text?: string;
	items?: { title: string; text: string }[];
}

export interface CaseStudy {
	id: SectionId;
	name: string;
	/** Ligne d'état sous la capture : « En ligne · archi-zen.com ». */
	state: string;
	role: string;
	pitch: string;
	url: string;
	linkLabel: string;
	/** Bouton plein (produit à ouvrir) ou bouton discret (site de l'employeur). */
	primaryLink: boolean;
	image: Picture;
	blocks: Block[];
	stackLabel: string;
	stack: string[];
	numbers?: { value: string; label: string }[];
}

export interface ProjectRow {
	id: SectionId;
	name: string;
	meta: string;
	/** Le produit, en une ou deux phrases. */
	text: string;
	/** Ma part dans le projet, affichée à part pour ne pas la noyer dans la description. */
	role?: { label: string; text: string };
	url: string;
	urlLabel: string;
	image: Picture;
	stack: string[];
}

export interface Job {
	id?: SectionId;
	name: string;
	role: string;
	when: string;
	text: string;
}

export interface Quote {
	/** Laisser vide tant que le texte n'est pas fourni : la page affiche un emplacement. */
	text: string;
	author: string;
	context: string;
}

export interface Content {
	lang: Lang;
	meta: { title: string; description: string };
	nav: {
		brand: string;
		links: { href: `#${SectionId}`; label: string }[];
		linkedin: string;
		ask: string;
		summary: string;
		/** Noms des zones de navigation et lien d'évitement, pour les lecteurs d'écran. */
		main: string;
		skip: string;
		/** Sommaire latéral : une entrée par section. */
		rail: { href: `#${SectionId}`; label: string }[];
		switchTo: { href: string; label: string; name: string; lang: Lang };
	};
	hero: { name: string; role: string; photoAlt: string; readOn: string };
	intro: {
		title: string;
		lead: string;
		sub: string;
		stats: { value: string; label: string; detail: string }[];
	};
	work: { title: string; sub: string; study: CaseStudy; rows: ProjectRow[] };
	personal: {
		title: string;
		sub: string;
		study: CaseStudy;
		rows: ProjectRow[];
	};
	story: {
		title: string;
		lead: string;
		sub: string;
		/** La photo d'architecture. Tant qu'elle manque, le duo d'images n'est pas affiché. */
		before: { caption: string; label: string; image?: Picture };
		after: { caption: string; label: string; image: Picture };
	};
	journey: { title: string; jobs: Job[] };
	quotes: {
		title: string;
		items: Quote[];
		placeholder: string;
		link: string;
	};
	skills: {
		title: string;
		lead: string;
		rows: { label: string; strong?: string; rest?: string }[];
	};
	contact: {
		title: string;
		lead: string;
		/** Les moyens de contact. Sans `href`, la ligne ouvre le chat. */
		rows: { label: string; value: string; href?: string }[];
		/** Le formulaire sous les liens, envoyé par EmailJS. */
		form: {
			title: string;
			name: string;
			email: string;
			message: string;
			messagePlaceholder: string;
			send: string;
			sending: string;
			sent: string;
			error: string;
		};
	};
	footer: string;
	links: { linkedin: string };
}

/** Clés des réponses préparées de l'assistant. */
export type AnswerKey =
	| "pourquoi"
	| "junior"
	| "nexqt"
	| "archizen"
	| "dispo"
	| "archi"
	| "flowni"
	| "parcours"
	| "stack"
	| "ia"
	| "equipe"
	| "langues"
	| "demo";

export interface PreparedAnswer {
	/** La question telle qu'elle s'affiche dans le fil. */
	question: string;
	/** Sa version courte, pour les bulles de suggestion. */
	short: string;
	/**
	 * La réponse. Format : une accroche seule sur sa ligne, entre **…**, puis deux
	 * ou trois paragraphes courts, sans gras.
	 * Des puces « - **Libellé :** texte » seulement pour une vraie liste.
	 */
	text: string;
	link: { label: string; to: SectionId };
	/** Questions proposées ensuite, par ordre de préférence. */
	next: AnswerKey[];
}

export interface AssistantContent {
	greeting: string;
	placeholder: string;
	send: string;
	/** Bulles affichées sous le champ avant la première question. */
	starters: AnswerKey[];
	/** Complète les suggestions quand `next` est épuisé. */
	fallbackSuggestions: AnswerKey[];
	answers: Record<AnswerKey, PreparedAnswer>;
	smallTalk: { hello: string; thanks: string };
	labels: {
		name: string;
		instant: string;
		ai: string;
		/** Messages qui tournent pendant que le modèle cherche. */
		thinking: string[];
		notice: string;
		/** Lien à côté de la mention : fait expliquer à l'assistant comment il est construit. */
		how: string;
	};
	errors: {
		offline: string;
		rateLimited: string;
		tooLong: string;
		generic: string;
		offTopic: string;
	};
	dock: { subtitle: string; open: string; close: string };
	/** Libellés des liens que l'IA peut proposer en fin de réponse. */
	sectionLinks: Partial<Record<SectionId, string>>;
	/** Faits connus de l'assistant en plus de ce qui est sur la page. */
	extraFacts: string[];
}
