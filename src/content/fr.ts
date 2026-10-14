import type { Content } from "./types";

const LINKEDIN = "https://www.linkedin.com/in/tudor-neagu";

export const fr: Content = {
	lang: "fr",
	meta: {
		title: "Tudor Neagu · Builder d'apps, Full Stack Engineer",
		description:
			"Full Stack Engineer chez NEXQT, co-fondateur d'ArchiZen. Je conçois et je construis des applications, après sept ans d'architecture. Posez vos questions à mon assistant.",
	},
	nav: {
		brand: "Tudor",
		links: [
			{ href: "#pro", label: "Expérience" },
			{ href: "#projets", label: "Projets" },
			{ href: "#experience", label: "Parcours" },
			{ href: "#competences", label: "Compétences" },
			{ href: "#contact", label: "Contact" },
		],
		linkedin: "LinkedIn",
		ask: "Poser une question",
		summary: "Sommaire",
		main: "Navigation principale",
		skip: "Aller au contenu",
		rail: [
			{ href: "#intro", label: "Ce que je fais" },
			{ href: "#pro", label: "Au travail" },
			{ href: "#projets", label: "À côté" },
			{ href: "#archi", label: "Pourquoi je code" },
			{ href: "#experience", label: "D'où je viens" },
			{ href: "#recommandations", label: "Ce qu'ils en disent" },
			{ href: "#competences", label: "Ce que je sais faire" },
			{ href: "#contact", label: "On en parle ?" },
		],
		switchTo: { href: "/en", label: "EN", name: "English version", lang: "en" },
	},
	hero: {
		name: "Tudor Neagu",
		role: "Builder d'apps · Full Stack Engineer chez NEXQT",
		photoAlt: "Portrait de Tudor Neagu",
		readOn: "Ou lisez la suite",
	},
	intro: {
		title: "Ce que je fais",
		lead: "Je conçois et je construis des applications, de l'idée à la mise en ligne.",
		sub: "Je termine mon alternance de Full Stack Engineer chez NEXQT, jusqu'en mars 2027. À côté, je construis mes propres applications pour des problèmes de métier bien réels : ArchiZen pour les architectes, mon ancien métier, et Flowni pour les praticiens libéraux.",
		stats: [
			{
				value: "2",
				label: "expériences pro en développement",
				detail: "NEXQT, IACrea",
			},
			{
				value: "2",
				label: "applications personnelles",
				detail: "ArchiZen, Flowni, en ligne",
			},
			{
				value: "2,5 ans",
				label: "de développement",
				detail: "depuis février 2024",
			},
			{
				value: "7 ans",
				label: "d'architecture",
				detail: "Chartier Dalix, HMONP",
			},
		],
	},
	work: {
		title: "Ce que je construis au travail",
		sub: "Ce que je construis aujourd'hui en alternance, et ce que j'ai livré avant.",
		study: {
			id: "pro-nexqt",
			name: "NEXQT",
			state: "En alternance · sept. 2025 – mars 2027",
			role: "Full Stack Engineer",
			pitch:
				"Startup de la data climat. NEXQT cartographie les émissions, l'énergie et le trafic des collectivités, du bâtiment à la rue, pour piloter leurs stratégies de rénovation et de mobilité.",
			url: "https://nexqt.com/",
			linkLabel: "Voir nexqt.com",
			primaryLink: false,
			image: {
				src: "/images/nexqt-routes.jpg",
				alt: "NEXQT : la fiche d'un segment routier et l'historique de son trafic, à côté de la carte des fréquentations",
			},
			blocks: [
				{
					label: "Mon rôle",
					text: "En charge des repos front et back, du branchement aux API et aux bases de données, et de l'infrastructure AWS.",
				},
				{
					label: "Ce que j'y fais",
					items: [
						{
							title: "Architecture.",
							text: "Revue et restructuration de l'application, pour accueillir de nouvelles collectivités sans développement spécifique.",
						},
						{
							title: "Infrastructure AWS.",
							text: "La montée en charge : multi-AZ, scaling des instances, règles réseau, dimensionnement des services ECS.",
						},
						{
							title: "Données routières.",
							text: "L'exploration du trafic, des vitesses et des émissions : carte, tableaux de bord par rue et par quartier, exports et rapport PDF.",
						},
						{
							title: "Fiches de détail sur la carte.",
							text: "Les panneaux au clic sur un bâtiment ou une route, avec des indicateurs propres à chaque objet.",
						},
						{
							title: "Ask.",
							text: "L'interrogation des données en langage naturel (Mistral), de l'interface à la mise en production.",
						},
						{
							title: "Data Explorer.",
							text: "Le prochain module d'exploration des données, en cours.",
						},
					],
				},
			],
			stackLabel: "Stack",
			stack: [
				"React",
				"TypeScript",
				"Mapbox GL",
				"Node.js",
				"Prisma",
				"PostgreSQL",
				"DynamoDB",
				"AWS",
				"Python",
				"Mistral",
			],
		},
		rows: [
			{
				id: "pro-iacrea",
				name: "IACrea",
				meta: "Full Stack Engineer (stage), déc. 2024 – mai 2025",
				text: "Le relooking immobilier par l'IA : à partir d'une simple photo, les agents immobiliers obtiennent des pièces meublées et mises en valeur, des vidéos et des plans pour leurs annonces.",
				role: {
					label: "Ce que j'y ai fait",
					text: "J'ai participé à la refonte de l'interface utilisateur, des maquettes jusqu'à la première version déployée : espace abonnés, gestion des projets et des images, authentification, traduction.",
				},
				url: "https://www.iacrea.com/fr",
				urlLabel: "iacrea.com",
				image: { src: "/images/iacrea.jpg", alt: "Page d'accueil d'IACrea" },
				stack: ["Next.js", "Supabase", "Redux"],
			},
		],
	},
	personal: {
		title: "Ce que je crée à côté",
		sub: "Ce que je conçois et lance à côté de mon alternance, avec Anna Dominguez.",
		study: {
			id: "archizen",
			name: "ArchiZen",
			state: "En ligne depuis fin sept. 2026 · archi-zen.com",
			role: "Co-fondateur, avec Anna Dominguez",
			pitch:
				"Libérer du temps de conception pour les architectes. ArchiZen accélère la recherche et le cadrage réglementaire des projets avec une IA qui s'appuie uniquement sur le corpus réglementaire officiel : des réponses précises, où chaque phrase renvoie à son article. Et une veille qui signale ce qui change dans les textes.",
			url: "https://archi-zen.com",
			linkLabel: "Ouvrir ArchiZen",
			primaryLink: true,
			image: {
				src: "/images/archizen.jpg",
				alt: "Page d'accueil d'ArchiZen : une question réglementaire, la réponse et les articles cités",
			},
			blocks: [
				{
					label: "Mon rôle",
					text: "Tout, de bout en bout : du besoin jusqu'au produit en ligne.",
				},
				{
					label: "Ce que j'y ai fait",
					items: [
						{
							title: "Le besoin et la feuille de route.",
							text: "Identifier et cadrer le besoin à partir de mes sept ans d'architecte, puis planifier le produit.",
						},
						{
							title: "La stratégie marketing.",
							text: "Positionner l'offre et la lancer auprès des architectes.",
						},
						{
							title: "L'architecture.",
							text: "Next.js, PostgreSQL et pgvector, des workers Redis et BullMQ, en Docker sur notre VPS.",
						},
						{
							title: "L'import et la synchronisation du corpus.",
							text: "Les textes de Légifrance, mis à jour chaque jour pour signaler toute évolution sous 24 h.",
						},
						{
							title: "Un RAG fait maison.",
							text: "Sans framework tout fait : chaque réponse cite les articles dont elle vient.",
						},
					],
				},
			],
			stackLabel: "Stack",
			stack: [
				"Next.js",
				"Mistral",
				"PostgreSQL",
				"pgvector",
				"Prisma",
				"Meilisearch",
				"BullMQ",
				"Redis",
				"Docker",
			],
			numbers: [
				{ value: "~50", label: "inscrits depuis le lancement" },
				{ value: "1 000+", label: "questions déjà traitées" },
				{ value: "173", label: "textes officiels suivis" },
				{ value: "24 h", label: "pour signaler une évolution" },
			],
		},
		rows: [
			{
				id: "flowni",
				name: "Flowni",
				meta: "avec Anna Dominguez",
				text: "La rétrocession, claire des deux côtés : le praticien libéral suit ce que chaque prestation lui rapporte, et le centre consolide ce que ses praticiens lui reversent.",
				url: "https://flowni.app",
				urlLabel: "flowni.app",
				image: { src: "/images/flowni.jpg", alt: "Page d'accueil de Flowni" },
				stack: ["React Native", "iOS", "Android", "Web"],
			},
		],
	},
	story: {
		title: "Pourquoi je code",
		lead: "Deux passions : le code et l'architecture.",
		sub: "J'ai toujours voulu faire les deux. Après sept ans comme architecte chez Chartier Dalix, j'avais fait le tour du métier, et j'ai choisi de les combiner pour répondre aux vrais problèmes que j'y avais rencontrés. Le premier : rendre le monde juridique, qu'on effleure à peine en école d'architecture, plus accessible aux architectes. ArchiZen est né de là. Et la méthode n'a pas changé : une application se construit comme un bâtiment, avec un plan, un cadrage, des étapes et des itérations.",
		before: {
			label: "Avant.",
			caption: "Des bâtiments, chez Chartier Dalix.",
		},
		after: {
			label: "Aujourd'hui.",
			caption: "Des outils pour ceux qui les dessinent.",
			image: { src: "/images/archizen.jpg", alt: "ArchiZen" },
		},
	},
	journey: {
		title: "D'où je viens",
		jobs: [
			{
				id: "nexqt",
				name: "NEXQT",
				role: "Full Stack Engineer en alternance",
				when: "Sept. 2025 – mars 2027",
				text: "En charge des repos front et back, du branchement aux API et aux bases de données, et de l'infrastructure AWS.",
			},
			{
				name: "ArchiZen",
				role: "Co-fondateur",
				when: "En parallèle",
				text: "Une IA qui aide les architectes à cadrer leurs projets sur le plan réglementaire : des réponses sourcées dans les textes officiels, et une veille sur leurs évolutions.",
			},
			{
				name: "Flowni",
				role: "avec Anna Dominguez",
				when: "En parallèle",
				text: "L'application de la rétrocession entre praticiens libéraux et centres : chacun sait ce qu'il garde ou doit. Sur iOS, Android et le web.",
			},
			{
				name: "IACrea",
				role: "Full Stack Engineer (stage)",
				when: "Déc. 2024 – mai 2025",
				text: "Refonte de l'interface utilisateur d'un produit de relooking immobilier par l'IA, des maquettes jusqu'à la première version déployée.",
			},
			{
				name: "Liora",
				role: "Titre RNCP niveau 7 (Bac+5)",
				when: "2025 – 2027",
				text: "Formation de Software Engineer chez Liora (ex-DataScientest), en alternance avec NEXQT.",
			},
			{
				name: "AWS",
				role: "Certification Solutions Architect, en préparation",
				when: "Depuis sept. 2026",
				text: "Pour formaliser ce que je pratique déjà chez NEXQT : réseau, montée en charge, services managés.",
			},
			{
				name: "O'clock",
				role: "Titre RNCP niveau 6 (Bac+3/4)",
				when: "2024",
				text: "Formation de concepteur développeur d'applications, certification Opquast.",
			},
			{
				name: "Chartier Dalix",
				role: "Architecte HMONP",
				when: "2017 – 2024",
				text: "Pilotage d'équipes et de projets de plusieurs dizaines de millions d'euros, du concours au chantier.",
			},
			{
				name: "HMONP",
				role: "Habilitation à la maîtrise d'œuvre en son nom propre",
				when: "2018",
				text: "L'habilitation qui permet à un architecte de signer ses propres projets.",
			},
			{
				name: "ENSA Versailles",
				role: "Diplôme d'État d'architecte (Bac+5)",
				when: "Diplômé en 2017",
				text: "Cinq ans d'études à l'École nationale supérieure d'architecture de Versailles.",
			},
		],
	},
	quotes: {
		title: "Ce qu'ils en disent",
		items: [
			{
				text: "Dès ses premiers jours, Tudor s'est montré autonome, motivé et débrouillard.",
				author: "Constance Laborie",
				context: "Co-fondatrice et CTO d'IACrea, m'a encadré",
			},
			{
				text: "Je retravaillerai avec lui sans hésitation.",
				author: "Pauline Clavelloux",
				context: "Entrepreneure tech, m'a managé chez IACrea",
			},
			{
				text: "Il ne se contente jamais de savoir qu'une chose fonctionne, il veut comprendre pourquoi.",
				author: "Benoît Schiex",
				context: "Développeur, mon formateur chez O'clock",
			},
		],
		placeholder: "la meilleure phrase de sa recommandation LinkedIn",
		link: "Lire les 4 recommandations sur LinkedIn",
	},
	skills: {
		title: "Ce que je sais faire",
		lead: "Les outils changent et s'apprennent vite. Ce qui compte, c'est le savoir-faire, et choisir le bon outil pour chaque tâche.",
		rows: [
			{
				label: "Produit",
				strong: "Transformer un besoin métier en produit",
				rest: ", du cadrage jusqu'à la mise en ligne",
			},
			{
				label: "Pilotage",
				strong: "Découper, planifier, piloter",
				rest: ", sept ans à mener des équipes, du concours au chantier",
			},
			{
				label: "Interface",
				strong: "Des écrans intuitifs et bien dessinés",
				rest: ", ma déformation d'architecte",
			},
			{
				label: "IA",
				strong: "Concevoir des RAG et des agents IA",
				rest: ", de l'import du corpus jusqu'à la réponse sourcée",
			},
			{
				label: "Front",
				strong: "Des applications web et mobiles",
				rest: ", avec React, Next.js, React Native, TypeScript",
			},
			{
				label: "Back et données",
				strong: "Des API et des bases de données",
				rest: ", avec Node.js, Python, PostgreSQL, MongoDB, DynamoDB",
			},
			{
				label: "Infrastructure",
				strong: "Déployer et tenir la charge",
				rest: ", avec Docker et AWS, suivi avec Sentry et PostHog",
			},
			{
				label: "Langues",
				strong: "Français et roumain natifs, anglais bilingue",
				rest: ", allemand B1",
			},
		],
	},
	contact: {
		title: "On en parle ?",
		lead: "En alternance chez NEXQT jusqu'en mars 2027, je compte y rester et continuer ArchiZen. Mais j'ai toujours une oreille pour les projets à fort impact sociétal. Je suis basé en Île-de-France, idéalement en hybride.",
		rows: [
			{
				label: "Pour m'écrire",
				value: "linkedin.com/in/tudor-neagu",
				href: LINKEDIN,
			},
			{
				label: "Pour voir mon code",
				value: "github.com/tudorneagu",
				href: "https://github.com/tudorneagu",
			},
			{
				label: "Pour voir ce que je construis",
				value: "archi-zen.com",
				href: "https://archi-zen.com",
			},
			{ label: "Pour une question rapide", value: "Demandez à mon assistant" },
		],
		form: {
			title: "Ou écrivez-moi directement",
			name: "Votre nom",
			email: "Votre email",
			message: "Votre message",
			messagePlaceholder: "Un projet, un poste, une question…",
			send: "Envoyer",
			sending: "Envoi…",
			sent: "Merci, votre message est parti. Je vous réponds vite.",
			error:
				"Le message n'a pas pu partir. Réessayez, ou écrivez-moi sur LinkedIn.",
		},
	},
	footer: "Tudor Neagu, 2026",
	links: { linkedin: LINKEDIN },
};
