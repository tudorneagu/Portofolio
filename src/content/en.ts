import type { Content } from "./types";

const LINKEDIN = "https://www.linkedin.com/in/tudor-neagu";

export const en: Content = {
	lang: "en",
	meta: {
		title: "Tudor Neagu · App builder, Full Stack Engineer",
		description:
			"Full Stack Engineer at NEXQT, co-founder of ArchiZen. I design and build applications, after seven years as an architect. Ask my assistant anything.",
	},
	nav: {
		brand: "Tudor",
		links: [
			{ href: "#pro", label: "Experience" },
			{ href: "#projets", label: "Projects" },
			{ href: "#experience", label: "Background" },
			{ href: "#competences", label: "Skills" },
			{ href: "#contact", label: "Contact" },
		],
		linkedin: "LinkedIn",
		ask: "Ask a question",
		summary: "Contents",
		main: "Main navigation",
		skip: "Skip to content",
		rail: [
			{ href: "#intro", label: "What I do" },
			{ href: "#pro", label: "At work" },
			{ href: "#projets", label: "On the side" },
			{ href: "#archi", label: "Why I code" },
			{ href: "#experience", label: "Where I come from" },
			{ href: "#recommandations", label: "What they say" },
			{ href: "#competences", label: "What I can do" },
			{ href: "#contact", label: "Let's talk" },
		],
		switchTo: { href: "/", label: "FR", name: "Version française", lang: "fr" },
	},
	hero: {
		name: "Tudor Neagu",
		role: "App builder · Full Stack Engineer at NEXQT",
		photoAlt: "Portrait of Tudor Neagu",
		readOn: "Or read on",
	},
	intro: {
		title: "What I do",
		lead: "I design and build applications, from the first idea to production.",
		sub: "I'm finishing my work-study programme as a Full Stack Engineer at NEXQT, until March 2027. Alongside it, I build my own applications for real-world business problems: ArchiZen for architects, my former profession, and Flowni for self-employed practitioners.",
		stats: [
			{
				value: "2",
				label: "professional roles in development",
				detail: "NEXQT, IACrea",
			},
			{
				value: "2",
				label: "personal applications",
				detail: "ArchiZen, Flowni, both live",
			},
			{
				value: "2 years",
				label: "of software development",
				detail: "since February 2024",
			},
			{
				value: "7 years",
				label: "of architecture",
				detail: "Chartier Dalix, licensed architect",
			},
		],
	},
	work: {
		title: "What I build at work",
		sub: "What I build in my current work-study role, and what I shipped before.",
		study: {
			id: "pro-nexqt",
			name: "NEXQT",
			state: "Work-study · Sept 2025 – Mar 2027",
			role: "Full Stack Engineer",
			pitch:
				"A climate data startup. NEXQT maps local authorities' emissions, energy and traffic, from the building to the street, to steer their renovation and mobility strategies.",
			url: "https://nexqt.com/en/",
			linkLabel: "Visit nexqt.com",
			primaryLink: false,
			image: {
				src: "/images/nexqt-routes.jpg",
				alt: "NEXQT: a road segment's detail panel and its traffic history, next to the traffic map",
			},
			blocks: [
				{
					label: "My role",
					text: "In charge of the front-end and back-end repos, the connection to the data APIs and databases, and the AWS infrastructure.",
				},
				{
					label: "What I do there",
					items: [
						{
							title: "Architecture.",
							text: "Reviewing and restructuring the application, so new local authorities can be onboarded without custom development.",
						},
						{
							title: "AWS infrastructure.",
							text: "Scaling up: multi-AZ, instance scaling, network rules, sizing of the ECS services.",
						},
						{
							title: "Road data.",
							text: "Exploring traffic, speeds and emissions: map, dashboards per street and per district, exports and a PDF report.",
						},
						{
							title: "Detail panels on the map.",
							text: "The panels that open on a building or a road, with indicators specific to each object.",
						},
						{
							title: "Ask.",
							text: "Querying the data in natural language (Mistral), from the interface to production.",
						},
						{
							title: "Data Explorer.",
							text: "The next data exploration module, in progress.",
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
				meta: "Full Stack Engineer (internship), Dec 2024 – May 2025",
				text: "AI-powered real-estate makeovers: from a single photo, estate agents get furnished, enhanced rooms, videos and floor plans for their listings.",
				role: {
					label: "What I did",
					text: "I took part in redesigning the user interface, from the mockups to the first deployed version: subscriber area, project and image management, authentication, translation.",
				},
				url: "https://www.iacrea.com/fr",
				urlLabel: "iacrea.com",
				image: { src: "/images/iacrea.jpg", alt: "IACrea home page" },
				stack: ["Next.js", "Supabase", "Redux"],
			},
		],
	},
	personal: {
		title: "What I create on the side",
		sub: "What I design and launch alongside my work-study programme, with Anna Dominguez.",
		study: {
			id: "archizen",
			name: "ArchiZen",
			state: "Live since late Sept 2026 · archi-zen.com",
			role: "Co-founder, with Anna Dominguez",
			pitch:
				"Giving architects their design time back. ArchiZen speeds up the regulatory research and framing of projects with an AI that relies only on the official regulatory corpus: precise answers, where every sentence points to its article. Plus a watch that flags what changes in the texts.",
			url: "https://archi-zen.com",
			linkLabel: "Open ArchiZen",
			primaryLink: true,
			image: {
				src: "/images/archizen.jpg",
				alt: "ArchiZen home page: a regulatory question, the answer and the cited articles",
			},
			blocks: [
				{
					label: "My role",
					text: "Everything, end to end: from the need to the live product.",
				},
				{
					label: "What I did",
					items: [
						{
							title: "The need and the roadmap.",
							text: "Identifying and framing the need from my seven years as an architect, then planning the product.",
						},
						{
							title: "Marketing strategy.",
							text: "Positioning the offer and launching it to architects.",
						},
						{
							title: "Architecture.",
							text: "Next.js, PostgreSQL and pgvector, Redis and BullMQ workers, in Docker on our VPS.",
						},
						{
							title: "Corpus import and sync.",
							text: "Légifrance texts, updated every day to flag any change within 24 hours.",
						},
						{
							title: "A home-made RAG.",
							text: "No off-the-shelf framework: every answer cites the articles it comes from.",
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
				{ value: "~50", label: "sign-ups since launch" },
				{ value: "1,000+", label: "questions answered" },
				{ value: "173", label: "official texts tracked" },
				{ value: "24 h", label: "to flag a change" },
			],
		},
		rows: [
			{
				id: "flowni",
				name: "Flowni",
				meta: "with Anna Dominguez",
				text: "Retrocession, clear on both sides: the self-employed practitioner tracks what each session brings in, and the practice consolidates what its practitioners pay back.",
				url: "https://flowni.app",
				urlLabel: "flowni.app",
				image: { src: "/images/flowni.jpg", alt: "Flowni home page" },
				stack: ["React Native", "iOS", "Android", "Web"],
			},
		],
	},
	story: {
		title: "Why I code",
		lead: "Two passions: code and architecture.",
		sub: "I always wanted to do both. After seven years as an architect at Chartier Dalix, I had seen what the job had to offer, and I chose to combine the two to solve the real problems I had run into. The first one: making the legal world, which architecture school barely touches on, more accessible to architects. ArchiZen came out of that. And the method has not changed: an application is built like a building, with a plan, a framing, stages and iterations.",
		before: {
			label: "Before.",
			caption: "Buildings, at Chartier Dalix.",
		},
		after: {
			label: "Today.",
			caption: "Tools for the people who design them.",
			image: { src: "/images/archizen.jpg", alt: "ArchiZen" },
		},
	},
	journey: {
		title: "Where I come from",
		jobs: [
			{
				id: "nexqt",
				name: "NEXQT",
				role: "Full Stack Engineer (work-study)",
				when: "Sept 2025 – Mar 2027",
				text: "In charge of the front-end and back-end repos, the connection to the data APIs and databases, and the AWS infrastructure.",
			},
			{
				name: "ArchiZen",
				role: "Co-founder",
				when: "In parallel",
				text: "An AI that helps architects frame their projects against the regulations: answers sourced from official texts, and a watch on how they change.",
			},
			{
				name: "Flowni",
				role: "with Anna Dominguez",
				when: "In parallel",
				text: "The retrocession app for self-employed practitioners and their practices: everyone knows what they keep or owe. On iOS, Android and the web.",
			},
			{
				name: "IACrea",
				role: "Full Stack Engineer (internship)",
				when: "Dec 2024 – May 2025",
				text: "Redesign of the user interface of an AI-powered real-estate makeover product, from the mockups to the first deployed version.",
			},
			{
				name: "Liora",
				role: "RNCP level 7 title (master's level)",
				when: "2025 – 2027",
				text: "Software Engineer programme at Liora (formerly DataScientest), on a work-study contract with NEXQT.",
			},
			{
				name: "AWS",
				role: "Solutions Architect certification, in preparation",
				when: "Since Sept 2026",
				text: "To formalise what I already practise at NEXQT: networking, scaling, managed services.",
			},
			{
				name: "O'clock",
				role: "RNCP level 6 title (bachelor's level)",
				when: "2024",
				text: "Application designer-developer programme, Opquast certification.",
			},
			{
				name: "Chartier Dalix",
				role: "Licensed architect (HMONP)",
				when: "2017 – 2024",
				text: "Leading teams and projects worth tens of millions of euros, from competition to building site.",
			},
			{
				name: "HMONP",
				role: "French architect's licence to practise under one's own name",
				when: "2018",
				text: "The licence that lets an architect sign their own projects.",
			},
			{
				name: "ENSA Versailles",
				role: "State architecture diploma",
				when: "Graduated 2017",
				text: "Five years of study at the Versailles National School of Architecture.",
			},
		],
	},
	quotes: {
		title: "What they say",
		items: [
			{
				text: "From his very first days, Tudor proved autonomous, motivated and resourceful.",
				author: "Constance Laborie",
				context:
					"Co-founder and CTO of IACrea, managed me · translated from French",
			},
			{
				text: "I would work with him again without hesitation.",
				author: "Pauline Clavelloux",
				context:
					"Tech entrepreneur, managed me at IACrea · translated from French",
			},
			{
				text: "He is never satisfied with knowing that something works, he wants to understand why.",
				author: "Benoît Schiex",
				context: "Developer, my instructor at O'clock · translated from French",
			},
		],
		placeholder: "the best sentence from their LinkedIn recommendation",
		link: "Read all 4 recommendations on LinkedIn",
	},
	skills: {
		title: "What I can do",
		lead: "Tools change and are quick to learn. What matters is the know-how, and picking the right tool for each task.",
		rows: [
			{
				label: "Product",
				strong: "Turning a business need into a product",
				rest: ", from framing to launch",
			},
			{
				label: "Delivery",
				strong: "Breaking down, planning, leading",
				rest: ", seven years leading teams, from competition to building site",
			},
			{
				label: "Interface",
				strong: "Intuitive, well-designed screens",
				rest: ", an architect's habit",
			},
			{
				label: "AI",
				strong: "Designing RAG systems and AI agents",
				rest: ", from importing the corpus to the sourced answer",
			},
			{
				label: "Front end",
				strong: "Web and mobile applications",
				rest: ", with React, Next.js, React Native, TypeScript",
			},
			{
				label: "Back end and data",
				strong: "APIs and databases",
				rest: ", with Node.js, Python, PostgreSQL, MongoDB, DynamoDB",
			},
			{
				label: "Infrastructure",
				strong: "Deploying and handling the load",
				rest: ", with Docker and AWS, monitored with Sentry and PostHog",
			},
			{
				label: "Languages",
				strong: "Native French and Romanian, bilingual English",
				rest: ", German B1",
			},
		],
	},
	contact: {
		title: "Let's talk",
		lead: "On a work-study programme at NEXQT until March 2027, I intend to stay on there and keep building ArchiZen. But I always keep an ear open for projects with a strong social impact. I am based in the Paris region, ideally working hybrid.",
		rows: [
			{
				label: "To write to me",
				value: "linkedin.com/in/tudor-neagu",
				href: LINKEDIN,
			},
			{
				label: "To see my code",
				value: "github.com/tudorneagu",
				href: "https://github.com/tudorneagu",
			},
			{
				label: "To see what I build",
				value: "archi-zen.com",
				href: "https://archi-zen.com",
			},
			{ label: "For a quick question", value: "Ask my assistant" },
		],
		form: {
			title: "Or write to me directly",
			name: "Your name",
			email: "Your email",
			message: "Your message",
			messagePlaceholder: "A project, a role, a question…",
			send: "Send",
			sending: "Sending…",
			sent: "Thank you, your message is on its way. I will get back to you soon.",
			error:
				"The message could not be sent. Try again, or write to me on LinkedIn.",
		},
	},
	footer: "Tudor Neagu, 2026",
	links: { linkedin: LINKEDIN },
};
