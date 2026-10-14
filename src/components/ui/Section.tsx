import type { SectionId } from "@/content/types";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Une section du portfolio : son ancre, son titre, et son contenu qui arrive en fondu. */
export function Section({
	id,
	title,
	sub,
	tinted = false,
	children,
}: {
	id: SectionId;
	title: string;
	sub?: string;
	/** Fond teinté et arrondi, pour détacher une section du reste. */
	tinted?: boolean;
	children?: ReactNode;
}) {
	return (
		<section
			id={id}
			className={
				tinted
					? "mt-[72px] scroll-mt-20 rounded-3xl border border-hair bg-linear-to-b from-accent-soft to-surface p-[clamp(24px,3.5vw,44px)] max-md:mt-14"
					: "scroll-mt-16 pt-[72px] max-md:pt-14"
			}
		>
			<Reveal>
				<h2 className="text-3xl leading-[1.12] font-bold tracking-[-0.04em] text-balance md:text-4xl">
					{title}
				</h2>
				{sub && <p className="mt-3 max-w-[44em] text-lg text-muted">{sub}</p>}
			</Reveal>
			{children}
		</section>
	);
}
