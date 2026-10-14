import { ChatDock } from "@/components/chat/ChatDock";
import { ChatProvider } from "@/components/chat/ChatProvider";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { TopBar } from "@/components/ui/TopBar";
import { getContent } from "@/content";
import { getAssistant } from "@/content/assistant";
import type { Lang } from "@/content/types";

/** La page entière, dans une langue donnée : le chat en haut, le portfolio dessous. */
export function Site({ lang }: { lang: Lang }) {
	const content = getContent(lang);
	return (
		<ChatProvider lang={lang} assistant={getAssistant(lang)}>
			<TopBar nav={content.nav} linkedin={content.links.linkedin} />
			<main id="contenu">
				<Hero hero={content.hero} />
				<Portfolio content={content} />
			</main>
			<footer className="border-t border-hair px-5 pt-[18px] pb-9 text-center text-sm text-muted">
				{content.footer}
			</footer>
			<ChatDock />
		</ChatProvider>
	);
}
