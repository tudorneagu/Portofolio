import { ArrowOut } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import type { CaseStudy } from "@/content/types";
import Image from "next/image";

export const label =
	"mb-2 block font-mono text-xs tracking-[0.08em] text-muted uppercase";

/** Une étude de cas pleine largeur : la capture, le problème, ce que j'y fais, la stack. */
export function CaseStudyCard({ study }: { study: CaseStudy }) {
	return (
		<Reveal delay={70}>
			<article
				id={study.id}
				className="mt-7 scroll-mt-20 overflow-hidden rounded-[20px] border border-hair bg-surface"
			>
				<figure className="border-b border-hair bg-soft px-[clamp(14px,3vw,32px)] pt-[clamp(14px,3vw,32px)]">
					{/* Le bouton sous le titre mène au même endroit : l'image ne prend pas un second arrêt de clavier. */}
					<a href={study.url} tabIndex={-1} aria-hidden="true">
						<Image
							src={study.image.src}
							alt={study.image.alt}
							width={1400}
							height={667}
							sizes="(min-width: 1024px) 780px, 100vw"
							className="block aspect-[2.1/1] w-full rounded-t-xl border border-b-0 border-hair object-cover object-top"
						/>
					</a>
				</figure>

				<div className="grid gap-10 p-[clamp(20px,3vw,34px)] max-md:gap-6 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
					<div>
						<h3 className="text-4xl leading-[1.1] font-bold tracking-[-0.04em]">
							{study.name}
						</h3>
						<p className="mt-1.5 font-medium">{study.role}</p>
						<p className="mt-1 inline-flex items-center gap-[7px] font-mono text-xs text-muted before:size-[7px] before:rounded-full before:bg-live before:content-['']">
							{study.state}
						</p>
						<p className="mt-4 text-lg leading-[1.55]">{study.pitch}</p>
						<div className="mt-6">
							<small className={label}>{study.stackLabel}</small>
							<Tags items={study.stack} />
						</div>
						<a
							href={study.url}
							className={`btn mt-5 ${study.primaryLink ? "btn-solid" : "btn-line"}`}
						>
							{study.linkLabel}
							<ArrowOut />
						</a>
					</div>

					<div className="space-y-[22px]">
						{study.blocks.map((block) => (
							<div key={block.label}>
								<small className={label}>{block.label}</small>
								{block.text && <p>{block.text}</p>}
								{block.items && (
									<ul className="grid gap-2.5">
										{block.items.map((item) => (
											<li
												key={item.title}
												className="relative pl-[18px] before:absolute before:top-[0.72em] before:left-0 before:h-0.5 before:w-[7px] before:bg-accent before:content-['']"
											>
												<b className="font-semibold">{item.title}</b>{" "}
												{item.text}
											</li>
										))}
									</ul>
								)}
							</div>
						))}
					</div>
				</div>

				{study.numbers && (
					<div className="grid grid-cols-2 border-t border-hair md:grid-cols-4">
						{study.numbers.map((number) => (
							<div
								key={number.label}
								className="border-hair px-[clamp(16px,3vw,34px)] py-[18px] max-md:[&:nth-child(even)]:border-l max-md:[&:nth-child(n+3)]:border-t md:[&:not(:first-child)]:border-l"
							>
								<b className="block text-2xl leading-[1.15] font-semibold tracking-[-0.03em] tabular-nums">
									{number.value}
								</b>
								<span className="text-sm text-muted">{number.label}</span>
							</div>
						))}
					</div>
				)}
			</article>
		</Reveal>
	);
}

export function Tags({
	items,
	className = "",
}: { items: string[]; className?: string }) {
	return (
		<div className={`flex flex-wrap gap-1.5 ${className}`}>
			{items.map((item) => (
				<span
					key={item}
					className="rounded-md border border-hair px-[9px] py-0.5 font-mono text-xs text-muted"
				>
					{item}
				</span>
			))}
		</div>
	);
}
