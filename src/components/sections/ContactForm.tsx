"use client";

import { ArrowRight } from "@/components/ui/Icon";
import type { Content } from "@/content/types";
import { CONTACT_LIMITS, EMAILJS } from "@/lib/contact";
import { send } from "@emailjs/browser";
import { type FormEvent, useRef, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const field =
	"w-full rounded-xl border border-hair bg-surface px-4 py-3 text-fg outline-none transition-[border-color,box-shadow] placeholder:text-muted focus:border-accent";
const label = "mb-1.5 block text-sm text-muted";

/** Un message pour Tudor, envoyé par EmailJS. */
export function ContactForm({ form }: { form: Content["contact"]["form"] }) {
	const [status, setStatus] = useState<Status>("idle");
	const openedAt = useRef(Date.now());

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (status === "sending") return;
		const node = event.currentTarget;
		const data = new FormData(node);
		// Le champ piège est invisible pour un humain ; un robot le remplit, ou envoie trop vite.
		const tooFast = Date.now() - openedAt.current < CONTACT_LIMITS.minFillMs;
		if (data.get("website") || tooFast) {
			setStatus("sent");
			return;
		}
		setStatus("sending");
		try {
			await send(
				EMAILJS.serviceId,
				EMAILJS.templateId,
				{
					// Les noms de variables attendus par le modèle de l'ancien site.
					from_first_name: String(data.get("name") ?? "").trim(),
					from_last_name: "",
					from_email: String(data.get("email") ?? "").trim(),
					message: String(data.get("message") ?? "").trim(),
				},
				{
					publicKey: EMAILJS.publicKey,
					blockHeadless: true,
					limitRate: { id: "contact", throttle: CONTACT_LIMITS.throttleMs },
				},
			);
			node.reset();
			setStatus("sent");
		} catch {
			setStatus("error");
		}
	}

	return (
		<form onSubmit={onSubmit} className="mt-10 max-w-[40em]">
			<h3 className="text-xl font-semibold tracking-[-0.02em]">{form.title}</h3>
			<div className="mt-4 grid gap-4 md:grid-cols-2">
				<div>
					<label htmlFor="contact-name" className={label}>
						{form.name}
					</label>
					<input
						id="contact-name"
						name="name"
						autoComplete="name"
						required
						maxLength={120}
						className={field}
					/>
				</div>
				<div>
					<label htmlFor="contact-email" className={label}>
						{form.email}
					</label>
					<input
						id="contact-email"
						name="email"
						type="email"
						autoComplete="email"
						required
						maxLength={200}
						className={field}
					/>
				</div>
			</div>
			<div className="mt-4">
				<label htmlFor="contact-message" className={label}>
					{form.message}
				</label>
				<textarea
					id="contact-message"
					name="message"
					required
					rows={5}
					maxLength={CONTACT_LIMITS.messageChars}
					placeholder={form.messagePlaceholder}
					className={`${field} resize-y`}
				/>
			</div>
			{/* Le piège à robots : hors de l'écran, hors du parcours clavier, ignoré des lecteurs d'écran. */}
			<div
				aria-hidden="true"
				className="absolute -left-[9999px] h-px w-px overflow-hidden"
			>
				<label htmlFor="contact-website">Website</label>
				<input
					id="contact-website"
					name="website"
					tabIndex={-1}
					autoComplete="off"
				/>
			</div>
			<div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
				<button
					type="submit"
					disabled={status === "sending"}
					className="btn btn-solid disabled:cursor-default disabled:opacity-60"
				>
					{status === "sending" ? form.sending : form.send}
					<ArrowRight />
				</button>
				<p
					role="status"
					className={
						status === "error" ? "text-sm text-fg" : "text-sm text-live-ink"
					}
				>
					{status === "sent" && form.sent}
					{status === "error" && form.error}
				</p>
			</div>
		</form>
	);
}
