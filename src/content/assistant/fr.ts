import type { AssistantContent } from "../types";

/**
 * Les réponses préparées de l'assistant, en français.
 *
 * Tout ce fichier s'édite à la main. Une réponse préparée s'affiche tout de suite,
 * sans appel au modèle : c'est elle qui sert pour les bulles et les suggestions.
 *
 * Format du texte d'une réponse :
 *   - une accroche courte, seule sur sa ligne, entre **deux astérisques** ;
 *   - puis deux ou trois paragraphes courts, une ligne chacun, sans gras ;
 *   - des puces « - **Libellé :** texte » seulement pour une vraie liste (le parcours).
 * L'assistant vouvoie le visiteur et parle de Tudor à la troisième personne.
 */
export const assistantFr: AssistantContent = {
	greeting:
		"Bonjour.\nTudor est quelque part entre un bug et un café, mais son assistant est toujours là.\nJe peux vous raconter ses projets, son parcours, ou pourquoi un architecte s'est mis à coder.",
	placeholder: "Posez votre question",
	send: "Envoyer",

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
			question: "Pourquoi recruter Tudor ?",
			short: "Pourquoi le recruter ?",
			text: [
				"**Bonne question, même si j'ai un léger parti pris.**",
				"Il livre. ArchiZen et Flowni sont en ligne, vous pouvez les ouvrir pendant qu'on parle.",
				"Il sait mener un projet. Sept ans à piloter des projets de plusieurs dizaines de millions d'euros : un sprint ne lui fait pas peur.",
				"Il fait de l'IA utile, qui cite ses sources. Et il a gardé de l'architecture un vrai souci des écrans bien dessinés.",
			].join("\n"),
			link: { label: "Voir son travail", to: "pro" },
			next: ["junior", "ia", "nexqt"],
		},
		junior: {
			question: "N'est-il pas trop junior ?",
			short: "N'est-il pas trop junior ?",
			text: [
				"**Junior sur le papier, pas dans la méthode.**",
				"Une formation sérieuse sur trois ans, depuis février 2024 : O'clock, puis un titre de niveau 7 (Bac+5) chez Liora, et depuis septembre 2026 une formation AWS Solutions Architect.",
				"Sur le terrain, en stage chez IACrea puis en alternance chez NEXQT, les mains dans le code tous les jours en plus des cours. Et le soir, il code encore : c'est comme ça qu'ArchiZen a vu le jour.",
				"Ajoutez sept ans d'architecture, et vous avez un junior qui ne découvre pas le monde du travail.",
			].join("\n"),
			link: { label: "Voir son parcours", to: "experience" },
			next: ["equipe", "nexqt", "archi"],
		},
		nexqt: {
			question: "Que fait-il chez NEXQT ?",
			short: "Que fait-il chez NEXQT ?",
			text: [
				"**Full Stack Engineer en alternance, de septembre 2025 à mars 2027.**",
				"Une startup de la data climat. NEXQT aide les collectivités à cartographier leurs émissions, leur énergie et leur trafic.",
				"Seul développeur, sous la responsabilité du CTO, il tient les repos front et back, le branchement aux API et aux bases de données, et l'infrastructure AWS.",
				"Parmi ses chantiers : l'exploration des données routières, la restructuration de l'application pour accueillir de nouvelles collectivités, et Ask, pour interroger les données en langage naturel.",
			].join("\n"),
			link: { label: "Voir NEXQT", to: "pro-nexqt" },
			next: ["ia", "equipe", "stack"],
		},
		archizen: {
			question: "Qu'est-ce qu'ArchiZen ?",
			short: "Qu'est-ce qu'ArchiZen ?",
			text: [
				"**Une IA qui aide les architectes à cadrer leurs projets sur le plan réglementaire.**",
				"L'idée vient de ses sept ans d'architecte : trop d'heures passées à chercher la bonne règle, dans la bonne version.",
				"Comment ça marche : un RAG fait maison, qui répond à partir des seuls textes officiels, cite l'article derrière chaque phrase et signale les évolutions sous 24 h.",
				"Son rôle : co-fondateur avec Anna Dominguez, il en a tout porté, du besoin jusqu'au RAG. Lancé fin septembre 2026, ArchiZen compte déjà une cinquantaine d'inscrits et plus de 1 000 questions traitées.",
			].join("\n"),
			link: { label: "Voir ArchiZen", to: "archizen" },
			next: ["ia", "archi", "dispo"],
		},
		dispo: {
			question: "Est-il disponible ?",
			short: "Est-il disponible ?",
			text: [
				"**En alternance chez NEXQT jusqu'en mars 2027.**",
				"Ensuite, il se voit bien y rester, et continuer ArchiZen le soir.",
				"Mais il garde toujours une oreille ouverte pour les projets à fort impact sociétal. Il est basé en Île-de-France et travaille idéalement en hybride. Si vous avez un projet de ce genre, le plus simple est de lui écrire sur LinkedIn.",
			].join("\n"),
			link: { label: "Voir le contact", to: "contact" },
			next: ["langues", "pourquoi", "parcours"],
		},
		archi: {
			question: "Pourquoi a-t-il changé de métier ?",
			short: "Pourquoi a-t-il changé de métier ?",
			text: [
				"**Il n'a pas vraiment changé, il a réuni ses deux passions.**",
				"Tudor a toujours voulu faire les deux, l'architecture et le code. Après sept ans chez Chartier Dalix, il avait fait le tour du métier, et il a choisi de les combiner.",
				"Pour répondre aux vrais problèmes rencontrés pendant sa carrière. Le premier : rendre le monde juridique, qu'on ne fait qu'effleurer en école d'architecture, plus accessible aux architectes, surtout en début de carrière. ArchiZen est né de là.",
				"La méthode, elle, n'a pas changé : une application se construit comme un bâtiment, avec un plan, un cadrage, des étapes et des itérations.",
			].join("\n"),
			link: { label: "Lire son histoire", to: "archi" },
			next: ["archizen", "junior", "parcours"],
		},
		flowni: {
			question: "Et Flowni ?",
			short: "Et Flowni ?",
			text: [
				"**Au départ, c'était un projet pour sa femme.**",
				"Praticienne libérale, elle voulait suivre sa patientelle : combien de patients vus, combien encaissé, et ce qu'il lui restait vraiment.",
				"L'outil maison est devenu une application à deux faces : les praticiens suivent ce que chaque prestation leur rapporte, et les centres consolident ce que leurs praticiens leur reversent.",
				"Tudor l'a construite avec Anna Dominguez, sur iOS, Android et le web.",
			].join("\n"),
			link: { label: "Voir Flowni", to: "flowni" },
			next: ["archizen", "nexqt", "stack"],
		},
		parcours: {
			question: "Quel est son parcours ?",
			short: "Son parcours ?",
			text: [
				"**D'abord l'architecture, puis le code.**",
				"- **2017 :** diplôme d'État d'architecte (Bac+5) à l'ENSA Versailles, puis la HMONP en 2018.",
				"- **2017 – 2024 :** architecte chez Chartier Dalix, à piloter équipes et projets.",
				"- **2024 :** concepteur développeur d'applications chez O'clock, titre RNCP niveau 6 (Bac+3/4).",
				"- **Déc. 2024 – mai 2025 :** Full Stack Engineer en stage chez IACrea.",
				"- **Sept. 2025 – mars 2027 :** Full Stack Engineer en alternance chez NEXQT, avec un titre Liora de niveau 7 (Bac+5).",
				"- **Depuis sept. 2026 :** préparation de la certification AWS Solutions Architect.",
				"Et le soir, il construit ArchiZen et Flowni.",
			].join("\n"),
			link: { label: "Voir le parcours", to: "experience" },
			next: ["archi", "junior", "dispo"],
		},
		stack: {
			question: "Quelles sont ses compétences ?",
			short: "Ses compétences ?",
			text: [
				"**Le bon outil pour chaque tâche.**",
				"Les outils s'apprennent vite, ce qui compte c'est le savoir-faire. Le sien : transformer un besoin métier en produit, le découper et le piloter, concevoir des RAG et des agents IA, construire des applications web et mobiles avec leurs API, puis les déployer sur AWS.",
				"Au quotidien, ça passe surtout par React, Next.js, React Native, Node.js, Python et PostgreSQL.",
			].join("\n"),
			link: { label: "Voir ses compétences", to: "competences" },
			next: ["ia", "nexqt", "dispo"],
		},
		ia: {
			question: "Comment utilise-t-il l'IA ?",
			short: "Et l'IA ?",
			text: [
				"**Des deux côtés de l'écran.**",
				"Il construit des produits IA, comme le RAG d'ArchiZen ou Ask chez NEXQT.",
				"Et il code avec l'IA, avec Claude Code et Cursor, mais il a appris à coder avant. Il lui confie surtout les tâches répétitives à automatiser, et garde pour lui la conception, l'architecture et la revue de code.",
				"Un collègue très rapide, en somme, qu'il relit toujours.",
			].join("\n"),
			link: { label: "Voir ses compétences", to: "competences" },
			next: ["ia", "nexqt", "dispo"],
		},
		equipe: {
			question: "Comment travaille-t-il en équipe ?",
			short: "En équipe ?",
			text: [
				"**Il a mené des équipes avant d'écrire du code en entreprise.**",
				"En agence, il pilotait une dizaine de personnes, entre architectes et bureaux d'études.",
				"Chez NEXQT, il est le seul développeur, sous la responsabilité du CTO, et autonome sur toute la partie technique.",
				"Constance Laborie, qui l'a encadré chez IACrea, le résume ainsi : « Dès ses premiers jours, Tudor s'est montré autonome, motivé et débrouillard. »",
			].join("\n"),
			link: { label: "Voir les recommandations", to: "recommandations" },
			next: ["ia", "nexqt", "dispo"],
		},
		langues: {
			question: "Parle-t-il anglais ?",
			short: "Parle-t-il anglais ?",
			text: [
				"**Yes, absolutely.**",
				"Il est bilingue en anglais, qu'il parle depuis ses six ans.",
				"Le roumain est sa langue maternelle, et le français l'est devenu : il le parle depuis plus de vingt ans. Il se débrouille aussi en allemand, niveau B1.",
			].join("\n"),
			link: { label: "Voir ses compétences", to: "competences" },
			next: ["ia", "nexqt", "dispo"],
		},
		demo: {
			question: "Comment fonctionne cet assistant ?",
			short: "Comment fonctionne cet assistant ?",
			text: [
				"**Rien de magique, promis.**",
				"Un modèle de langage, Claude Haiku, branché sur une fiche de faits tirée de ce site, et rien d'autre. Si ce n'est pas dedans, je vous dis que je ne sais pas.",
				"Les questions courantes, comme celle-ci, ont des réponses écrites à l'avance par Tudor. Et pour éviter les abus, je limite le nombre de questions et je laisse le hors-sujet de côté.",
			].join("\n"),
			link: { label: "Voir ses compétences", to: "competences" },
			next: ["pourquoi", "ia", "nexqt"],
		},
	},

	smallTalk: {
		hello:
			"Bonjour ! Dites-moi ce qui vous amène : un de ses projets, son parcours, ses compétences ?",
		thanks: "Avec plaisir. Si une autre question vous vient, je suis là.",
	},

	labels: {
		name: "askTudor",
		instant: "instantané",
		ai: "IA",
		thinking: [
			"Je fouille dans ses commits",
			"Je relis son parcours",
			"Je vérifie mes sources",
		],
		notice: "Assistant IA. Il répond à partir du contenu de ce site.",
		how: "Comment ça marche",
	},

	errors: {
		offline:
			"Je ne peux répondre qu'aux questions proposées pour le moment. Pour le reste, le plus simple est d'écrire à Tudor sur LinkedIn.",
		rateLimited:
			"Vous avez posé beaucoup de questions d'un coup. Réessayez dans un moment.",
		tooLong: "Votre question est un peu longue. Pouvez-vous la raccourcir ?",
		generic:
			"La réponse n'a pas pu arriver. Reposez la question dans un instant.",
		offTopic:
			"Je ne réponds qu'aux questions sur Tudor, son travail et son parcours. Que voulez-vous savoir sur lui ?",
	},

	dock: {
		subtitle: "L'assistant de Tudor, toujours là",
		open: "Poser une question",
		close: "Fermer",
	},

	sectionLinks: {
		recommandations: "Voir les recommandations",
		archizen: "Voir ArchiZen",
		flowni: "Voir Flowni",
		"pro-nexqt": "Voir NEXQT",
		"pro-iacrea": "Voir IACrea",
		archi: "Lire son histoire",
		experience: "Voir le parcours",
		competences: "Voir ses compétences",
		contact: "Voir le contact",
		pro: "Voir son travail",
		projets: "Voir ses projets",
	},

	extraFacts: [
		"Comment fonctionne cet assistant : rien de magique, un modèle de langage (Claude Haiku) branché sur une fiche de faits tirée du contenu de ce site, avec quelques consignes et des limites simples (nombre de questions par visiteur, refus du hors-sujet). Les questions courantes ont des réponses écrites à l'avance. Reste sobre là-dessus : ne le présente ni comme une prouesse ni comme une démonstration.",
		"Recommandations LinkedIn (à citer telles quelles, avec leur auteur) : Constance Laborie, co-fondatrice et CTO d'IACrea, qui l'a encadré : « Dès ses premiers jours, Tudor s'est montré autonome, motivé et débrouillard. » Pauline Clavelloux, entrepreneure tech, qui l'a managé : « Son + par rapport aux autres développeurs est d'avoir une bonne approche de l'UI/UX. » et « Je retravaillerai avec lui sans hésitation. » Benoît Schiex, son formateur chez O'clock : « Il ne se contente jamais de savoir qu'une chose fonctionne, il veut comprendre pourquoi. » Il a quatre recommandations en tout sur LinkedIn.",
		"Tudor Neagu se présente comme builder d'apps. Il est Full Stack Engineer et architecte de formation.",
		"Pourquoi il code : il a toujours voulu faire les deux, l'architecture et le code. Après sept ans d'architecture, il avait fait le tour du métier et a choisi de combiner ses deux passions, pour répondre aux vrais problèmes rencontrés pendant sa carrière : par exemple rendre le monde juridique, qu'on ne fait qu'effleurer en école d'architecture, plus accessible aux architectes, surtout en début de carrière. Pour lui, une application se construit comme un bâtiment : un plan, un cadrage, des étapes et des itérations. C'est dans ce sens qu'il a créé ArchiZen.",
		"S'il est trop junior : depuis février 2024, il suit une formation sérieuse sur trois ans (O'clock, puis un titre de niveau 7 chez Liora, et depuis septembre 2026 une formation AWS Solutions Architect, dont il n'a pas encore passé l'examen : ne dis jamais qu'il est certifié), faite sur le terrain, en stage chez IACrea puis en alternance chez NEXQT, les mains dans le code tous les jours en plus des cours théoriques. Ses sept ans d'architecture lui ont appris à organiser, découper et attaquer toutes les tâches. Il est curieux et apprend vite. Le soir, il code encore sur ses propres projets : c'est comme ça qu'ArchiZen a vu le jour. Évite de répéter le montant des projets d'architecture d'une réponse à l'autre.",
		"Front ou back : les deux, avec un faible pour les interfaces intuitives et bien dessinées, sa déformation professionnelle d'architecte. Les outils s'apprennent vite : ce qui compte, c'est le savoir-faire et choisir le bon outil pour chaque tâche.",
		"L'IA : il construit des produits IA (le RAG fait maison d'ArchiZen, Ask chez NEXQT) et il code avec l'IA au quotidien, avec Claude Code et Cursor. Il a appris à coder avant l'arrivée de ces outils : il leur confie surtout les tâches répétitives à automatiser, et garde pour lui la conception, l'architecture et la revue de code.",
		"Travail en équipe : en agence d'architecture, il pilotait une dizaine de personnes (architectes, bureaux d'études). Chez NEXQT, il est le seul développeur, sous la responsabilité du CTO, et autonome sur toute la partie technique.",
		"Langues : anglais bilingue (depuis ses six ans), roumain langue maternelle, français parlé depuis plus de vingt ans, au niveau d'une langue maternelle, allemand B1.",
		"Flowni est né comme un projet pour sa femme, praticienne libérale, pour suivre sa patientelle : patients vus, sommes encaissées, ce qu'il lui reste vraiment. L'outil est devenu une application à deux faces : les praticiens suivent ce que chaque prestation leur rapporte, les centres consolident ce que leurs praticiens leur reversent. Tudor l'a construite avec Anna Dominguez.",
		"Situation et disponibilité : Tudor est en alternance chez NEXQT jusqu'en mars 2027, avec une formation de Software Engineer chez Liora (l'ancien DataScientest), titre RNCP de niveau 7 (Bac+5). Ensuite, il se voit poursuivre chez NEXQT et continuer ArchiZen, tout en restant ouvert aux projets qui ont un vrai impact. Chez IACrea, de décembre 2024 à mai 2025, il était Full Stack Engineer en stage. Il est basé en Île-de-France, ouvert au télétravail, et cherche idéalement un rythme hybride. Il vise des missions à fort impact sociétal ; la crypto et les projets spéculatifs ne l'intéressent pas. Salaire : non renseigné, renvoyer vers LinkedIn.",
		"Ne cite jamais le nom d'une collectivité cliente de NEXQT. Ne mentionne pas Figma.",
	],
};
