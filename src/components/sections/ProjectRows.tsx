import { ArrowOut } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import type { ProjectRow } from "@/content/types";
import Image from "next/image";
import { Tags, label } from "./CaseStudyCard";

/** Les projets secondaires, en lignes compactes sous l'étude de cas. */
export function ProjectRows({ rows }: { rows: ProjectRow[] }) {
	return (
		<Reveal delay={140} className="mt-7 border-t border-hair">
			{rows.map((row) => (
				<article
					key={row.id}
					id={row.id}
					className="grid scroll-mt-20 grid-cols-[96px_minmax(0,1fr)] items-start gap-3.5 border-b border-hair py-[18px] md:grid-cols-[150px_minmax(0,1fr)_auto] md:items-center md:gap-[22px]"
				>
					<a href={row.url} tabIndex={-1} aria-hidden="true">
						<Image
							src={row.image.src}
							alt={row.image.alt}
							width={300}
							height={188}
							sizes="150px"
							className="block aspect-[16/10] w-full rounded-lg border border-hair object-cover object-top-left"
						/>
					</a>
					<div>
						<h3 className="text-xl font-semibold tracking-[-0.02em]">
							{row.name}{" "}
							<span className="ml-1 text-sm font-normal tracking-normal text-muted">
								{row.meta}
							</span>
						</h3>
						<p className="mt-0.5 max-w-[52ch] text-muted">{row.text}</p>
						{row.role && (
							<div className="mt-3.5">
								<small className={label}>{row.role.label}</small>
								<p className="max-w-[52ch]">{row.role.text}</p>
							</div>
						)}
					</div>
					<div className="flex flex-col items-start gap-1.5 max-md:col-span-2 md:items-end">
						<a
							href={row.url}
							className="inline-flex min-h-11 items-center gap-1 font-mono text-sm text-accent underline-offset-4 hover:underline md:min-h-0"
						>
							{row.urlLabel}
							<ArrowOut />
						</a>
						<Tags items={row.stack} className="md:justify-end" />
					</div>
				</article>
			))}
		</Reveal>
	);
}
