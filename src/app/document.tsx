import { getContent } from "@/content";
import type { Lang } from "@/content/types";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const SITE_URL = "https://tudorneagu.com";

/** Le squelette HTML commun aux deux langues. Chaque langue a son propre layout racine. */
export function Document({
	lang,
	children,
}: { lang: Lang; children: ReactNode }) {
	return (
		<html lang={lang} className={`${sans.variable} ${mono.variable}`}>
			<body>{children}</body>
		</html>
	);
}

export function buildMetadata(lang: Lang): Metadata {
	const { meta } = getContent(lang);
	const path = lang === "fr" ? "/" : "/en";
	return {
		metadataBase: new URL(SITE_URL),
		title: meta.title,
		description: meta.description,
		alternates: { canonical: path, languages: { fr: "/", en: "/en" } },
		openGraph: {
			title: meta.title,
			description: meta.description,
			url: path,
			siteName: "Tudor Neagu",
			locale: lang === "fr" ? "fr_FR" : "en_US",
			type: "website",
		},
		twitter: { card: "summary_large_image" },
		icons: { icon: "/favicon.svg" },
	};
}
