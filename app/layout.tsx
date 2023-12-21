import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    display: "swap",
    variable: "--font-inter",
    fallback: ["system-ui", "arial"],
});

const space_grotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["700"],
    display: "swap",
    variable: "--font-space-grotesk",
    fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
    title: "Acme | Build high-performance composable applications",
    description: `Equip your team with the industry's leading native GraphQL Content APIs, Content Federation capabilities and rich set of developer tools, to build truly composable applications.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${space_grotesk.variable}`}>{children}</body>
        </html>
    );
}
