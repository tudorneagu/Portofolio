import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Image autonome pour Docker : `node server.js`, sans node_modules complets.
	output: "standalone",
	// Ancre le projet à ce dossier : un autre lockfile plus haut sur la machine
	// ferait sinon passer son dossier pour la racine.
	outputFileTracingRoot: path.join(__dirname),
	turbopack: { root: path.join(__dirname) },
	// Chaque capture est servie à la taille de l'écran qui la demande, en AVIF ou WebP.
	images: { formats: ["image/avif", "image/webp"] },
	poweredByHeader: false,
};

export default nextConfig;
