import type { ReactNode } from "react";
import { Document, buildMetadata } from "../document";

export const metadata = buildMetadata("en");

export default function RootLayout({ children }: { children: ReactNode }) {
	return <Document lang="en">{children}</Document>;
}
