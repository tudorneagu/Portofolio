import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getContent } from "@/content";
import type { Lang } from "@/content/types";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

/** L'image qui s'affiche quand le lien du site est partagé (LinkedIn, messageries). */
export async function renderOg(lang: Lang) {
	const { hero } = getContent(lang);
	const photo = await readFile(join(process.cwd(), "public/images/tudor.jpg"));
	const portrait = `data:image/jpeg;base64,${photo.toString("base64")}`;

	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "72px 84px",
				backgroundColor: "#fcfcfb",
				backgroundImage: "linear-gradient(180deg, #d8eef2 0%, #fcfcfb 58%)",
				color: "#111111",
				fontFamily: "sans-serif",
			}}
		>
			<div style={{ display: "flex", flexDirection: "column", maxWidth: 700 }}>
				<div style={{ display: "flex", fontSize: 30, color: "#6b6b67" }}>
					ask<span style={{ color: "#0b7285" }}>Tudor_</span>
				</div>
				<div
					style={{
						display: "flex",
						marginTop: 26,
						fontSize: 96,
						fontWeight: 700,
						letterSpacing: "-0.04em",
						lineHeight: 1,
					}}
				>
					{hero.name}
				</div>
				<div
					style={{
						display: "flex",
						marginTop: 26,
						fontSize: 36,
						lineHeight: 1.3,
					}}
				>
					{hero.role}
				</div>
				<div
					style={{
						display: "flex",
						marginTop: 34,
						fontSize: 28,
						color: "#6b6b67",
					}}
				>
					ArchiZen · Flowni · NEXQT
				</div>
			</div>
			{/* biome-ignore lint/a11y/useAltText: image générée, décrite par l'export `alt` de la route */}
			<img
				src={portrait}
				width={300}
				height={300}
				style={{
					borderRadius: 150,
					border: "8px solid #ffffff",
					objectFit: "cover",
				}}
			/>
		</div>,
		OG_SIZE,
	);
}
