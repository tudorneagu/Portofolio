import { getContent } from "@/content";
import { getAssistant, rules } from "@/content/assistant";
import type { CaseStudy, Lang, ProjectRow } from "@/content/types";

function study(s: CaseStudy): string {
	const blocks = s.blocks
		.map((b) => {
			const items = b.items?.map((i) => `${i.title} ${i.text}`).join(" ") ?? "";
			return `${b.label} : ${[b.text, items].filter(Boolean).join(" ")}`;
		})
		.join(" ");
	const numbers = s.numbers?.map((n) => `${n.value} ${n.label}`).join(", ");
	return [
		`${s.name} (${s.state}). ${s.role}. ${s.pitch}`,
		blocks,
		`${s.stackLabel} : ${s.stack.join(", ")}.`,
		numbers ? `Chiffres publiés : ${numbers}.` : "",
	]
		.filter(Boolean)
		.join(" ");
}

function row(r: ProjectRow): string {
	const role = r.role ? ` ${r.role.label} : ${r.role.text}` : "";
	return `${r.name} (${r.urlLabel}), ${r.meta}. ${r.text}${role} Stack : ${r.stack.join(", ")}.`;
}

/**
 * La fiche de faits de l'assistant, construite à partir du contenu de la page.
 * Corriger une date dans `content/` met donc à jour la page et l'assistant.
 */
export function buildFacts(lang: Lang): string {
	const c = getContent(lang);
	const a = getAssistant(lang);
	const skills = c.skills.rows
		.map((r) => `${r.label} : ${[r.strong, r.rest].filter(Boolean).join("")}`)
		.join(" ; ");
	const jobs = c.journey.jobs.map(
		(j) => `${j.when} : ${j.role}, ${j.name}. ${j.text}`,
	);

	return [
		...a.extraFacts,
		`${c.intro.lead} ${c.intro.sub}`,
		study(c.work.study),
		...c.work.rows.map(row),
		study(c.personal.study),
		...c.personal.rows.map(row),
		`${c.story.lead} ${c.story.sub}`,
		...jobs,
		`${c.skills.lead} ${skills}`,
	].join("\n");
}

/** Consignes, faits, puis la liste des balises de section que le modèle peut renvoyer. */
export function buildSystemPrompt(lang: Lang): string {
	const tags = Object.keys(getAssistant(lang).sectionLinks)
		.map((id) => `[[${id}]]`)
		.join(" ");
	const heading = lang === "fr" ? ["FAITS", "BALISES"] : ["FACTS", "TAGS"];
	return `${rules[lang]}\n\n${heading[0]}\n${buildFacts(lang)}\n\n${heading[1]}\n${tags} [[none]]`;
}
