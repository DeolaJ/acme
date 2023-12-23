import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import hygraphClient from "@/lib/client";
import { metadataQuery } from "@/lib/queries";

import { Page } from "@/types";

import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-inter",
    fallback: ["system-ui", "arial"],
});

const space_grotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["700"],
    variable: "--font-space-grotesk",
    fallback: ["system-ui", "arial"],
});

export async function generateMetadata(): Promise<Metadata> {
    const { pages } = await hygraphClient.request<{ pages: Page[] }>(metadataQuery);
    const metadata = pages[0].metadata;

    // This can be extended for more metadata values
    return {
        title: metadata.title,
        description: metadata.description,
    };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${space_grotesk.variable}`}>{children}</body>
        </html>
    );
}
