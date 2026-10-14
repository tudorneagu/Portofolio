import { ArrowOut, ArrowRight } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SideNav } from "@/components/ui/SideNav";
import type { Content } from "@/content/types";
import Image from "next/image";
import { AskButton } from "./AskButton";
import { CaseStudyCard } from "./CaseStudyCard";
import { ContactForm } from "./ContactForm";
import { ProjectRows } from "./ProjectRows";

const lead =
	"mt-3.5 max-w-[30em] text-xl leading-[1.4] font-medium tracking-[-0.02em]";

function Intro({ intro }: { intro: Content["intro"] }) {
	return (
		<Section id="intro" title={intro.title}>
			<Reveal delay={70}>
				<p className={lead}>{intro.lead}</p>
				<p className="mt-3 max-w-[44em] text-lg text-muted">{intro.sub}</p>
			</Reveal>
			<Reveal
				delay={140}
				className="mt-8 grid grid-cols-2 border-y border-hair md:grid-cols-4"
			>
				{intro.stats.map((stat) => (
					<div
						key={stat.label}
						className="border-hair py-5 pr-4 max-md:[&:nth-child(even)]:border-l max-md:[&:nth-child(even)]:pl-[18px] max-md:[&:nth-child(n+3)]:border-t md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pl-[22px]"
					>
						<b className="block text-4xl leading-[1.1] font-semibold tracking-[-0.04em]">
							{stat.value}
						</b>
						<span className="mt-1 block">{stat.label}</span>
						<small className="block text-sm text-muted">{stat.detail}</small>
					</div>
				))}
			</Reveal>
		</Section>
	);
}

function Story({ story }: { story: Content["story"] }) {
	return (
		<Section id="archi" title={story.title} tinted>
			<Reveal delay={70}>
				<p className={lead}>{story.lead}</p>
				<p className="mt-3 max-w-[44em] text-lg text-muted">{story.sub}</p>
			</Reveal>
			{/* Le duo avant / aujourd'hui n'apparaît que lorsque la photo d'architecture est fournie. */}
			{story.before.image && (
				<Reveal
					delay={140}
					className="mt-[34px] grid items-center gap-[18px] md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]"
				>
					<figure>
						<Image
							src={story.before.image.src}
							alt={story.before.image.alt}
							width={700}
							height={525}
							sizes="(min-width: 768px) 360px, 100vw"
							className="block aspect-[4/3] w-full rounded-[14px] border border-hair bg-surface object-cover"
						/>
						<figcaption className="mt-2.5 text-base">
							<b className="font-semibold">{story.before.label}</b>{" "}
							{story.before.caption}
						</figcaption>
					</figure>
					<ArrowRight className="text-2xl text-accent max-md:rotate-90 max-md:justify-self-center" />
					<figure>
						<Image
							src={story.after.image.src}
							alt={story.after.image.alt}
							width={700}
							height={525}
							sizes="(min-width: 768px) 360px, 100vw"
							className="block aspect-[4/3] w-full rounded-[14px] border border-hair bg-surface object-cover object-top-left"
						/>
						<figcaption className="mt-2.5 text-base">
							<b className="font-semibold">{story.after.label}</b>{" "}
							{story.after.caption}
						</figcaption>
					</figure>
				</Reveal>
			)}
		</Section>
	);
}

function Journey({ journey }: { journey: Content["journey"] }) {
	return (
		<Section id="experience" title={journey.title}>
			<Reveal delay={70} className="mt-7 border-t border-hair">
				{journey.jobs.map((job) => (
					<div
						key={`${job.name}-${job.when}`}
						id={job.id}
						className="scroll-mt-20 border-b border-hair py-5"
					>
						<div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
							<h3 className="text-xl font-semibold tracking-[-0.02em]">
								{job.name}{" "}
								<span className="ml-1 text-base font-normal tracking-normal text-muted">
									{job.role}
								</span>
							</h3>
							<span className="font-mono text-xs text-muted">{job.when}</span>
						</div>
						<p className="mt-1 max-w-[74ch] text-muted">{job.text}</p>
					</div>
				))}
			</Reveal>
		</Section>
	);
}

function initials(name: string): string {
	return name
		.split(/\s+/)
		.map((part) => part[0])
		.join("")
		.slice(0, 2)
		.toUpperCase();
}

function Quotes({
	quotes,
	linkedin,
}: { quotes: Content["quotes"]; linkedin: string }) {
	return (
		<Section id="recommandations" title={quotes.title}>
			{/* La première recommandation, celle du manager direct, prend toute la largeur. */}
			<Reveal delay={70} className="mt-7 grid gap-3.5 md:grid-cols-2">
				{quotes.items.map((quote, index) => (
					<figure
						key={quote.author}
						className={`flex flex-col rounded-[18px] border border-hair bg-surface p-[clamp(20px,3vw,30px)] ${
							index === 0 ? "md:col-span-2" : ""
						}`}
					>
						<span
							aria-hidden="true"
							className="block h-6 font-serif text-5xl leading-[1] text-accent"
						>
							“
						</span>
						<blockquote
							className={`mt-3 tracking-[-0.01em] ${
								index === 0
									? "max-w-[26em] text-xl leading-[1.3] font-medium md:text-2xl"
									: "text-lg leading-[1.45]"
							}`}
						>
							{quote.text || (
								<span className="rounded-md border border-dashed border-muted px-2 py-0.5 font-mono text-xs tracking-normal text-muted">
									{quotes.placeholder}
								</span>
							)}
						</blockquote>
						<figcaption className="mt-auto flex items-center gap-3 pt-6">
							<span className="grid size-10 flex-none place-items-center rounded-full bg-accent-soft text-sm font-semibold text-accent">
								{initials(quote.author)}
							</span>
							<span className="leading-[1.35]">
								<b className="block font-semibold">{quote.author}</b>
								<span className="text-sm text-muted">{quote.context}</span>
							</span>
						</figcaption>
					</figure>
				))}
			</Reveal>
			<a
				href={linkedin}
				className="mt-4 inline-flex min-h-11 items-center gap-1.5 font-medium text-accent underline underline-offset-4"
			>
				{quotes.link}
				<ArrowOut />
			</a>
		</Section>
	);
}

function Skills({ skills }: { skills: Content["skills"] }) {
	return (
		<Section id="competences" title={skills.title}>
			<Reveal delay={70}>
				<p className={lead}>{skills.lead}</p>
			</Reveal>
			<Reveal delay={140} className="mt-7 border-t border-hair">
				{skills.rows.map((row) => (
					<div
						key={row.label}
						className="grid gap-x-4 gap-y-0.5 border-b border-hair py-3.5 md:grid-cols-[11em_minmax(0,1fr)]"
					>
						<span className="pt-[3px] font-mono text-xs text-muted">
							{row.label}
						</span>
						<span>
							{row.strong && <b className="font-semibold">{row.strong}</b>}
							{row.rest}
						</span>
					</div>
				))}
			</Reveal>
		</Section>
	);
}

function Contact({ contact }: { contact: Content["contact"] }) {
	const row =
		"inline-flex min-h-11 cursor-pointer items-center gap-1.5 font-medium text-accent underline underline-offset-4";
	return (
		<Section id="contact" title={contact.title}>
			<Reveal delay={70}>
				<p className={lead}>{contact.lead}</p>
			</Reveal>
			{/* Mêmes lignes que « Avec quoi je travaille » : la page se termine comme elle se lit. */}
			<Reveal delay={140} className="mt-7 border-t border-hair">
				{contact.rows.map((item) => (
					<div
						key={item.label}
						className="grid items-center gap-x-4 border-b border-hair py-1.5 md:grid-cols-[17em_minmax(0,1fr)]"
					>
						<span className="text-muted max-md:pt-2">{item.label}</span>
						<span>
							{item.href ? (
								<a href={item.href} className={row}>
									{item.value}
									<ArrowOut />
								</a>
							) : (
								<AskButton className={row}>
									{item.value}
									<ArrowRight />
								</AskButton>
							)}
						</span>
					</div>
				))}
			</Reveal>
			<Reveal delay={210}>
				<ContactForm form={contact.form} />
			</Reveal>
		</Section>
	);
}

/** Toute la partie sous le chat : sommaire à gauche, sections à droite. */
export function Portfolio({ content }: { content: Content }) {
	const linkedin = content.links.linkedin;
	return (
		<div id="portfolio" className="scroll-mt-[58px] border-t border-hair">
			<div className="mx-auto grid max-w-[1140px] items-start gap-[52px] px-5 pb-28 lg:grid-cols-[210px_minmax(0,1fr)]">
				<SideNav nav={content.nav} />
				<div>
					<Intro intro={content.intro} />
					<Section id="pro" title={content.work.title} sub={content.work.sub}>
						<CaseStudyCard study={content.work.study} />
						<ProjectRows rows={content.work.rows} />
					</Section>
					<Section
						id="projets"
						title={content.personal.title}
						sub={content.personal.sub}
					>
						<CaseStudyCard study={content.personal.study} />
						<ProjectRows rows={content.personal.rows} />
					</Section>
					<Story story={content.story} />
					<Journey journey={content.journey} />
					<Quotes quotes={content.quotes} linkedin={linkedin} />
					<Skills skills={content.skills} />
					<Contact contact={content.contact} />
				</div>
			</div>
		</div>
	);
}
