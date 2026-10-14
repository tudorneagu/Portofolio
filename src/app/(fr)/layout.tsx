import type { ReactNode } from "react";
import { Document, buildMetadata } from "../document";

export const metadata = buildMetadata("fr");

export default function RootLayout({ children }: { children: ReactNode }) {
	return <Document lang="fr">{children}</Document>;
}
