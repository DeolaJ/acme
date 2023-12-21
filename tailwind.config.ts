import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                body: ["var(--font-inter)"],
                space: ["var(--font-space-grotesk)"],
            },
            colors: {
                brand: {
                    blue: {
                        100: "#F1F5F9", // Background
                        500: "#64748B", // Light text
                        900: "#334155", // Medium Dark text
                    },
                    purple: {
                        500: "#7C3AED", // Primary
                    },
                    black: {
                        300: "1E293B", // Callout Background
                        500: "#0F172A", // Dark Body text
                    },
                },
            },
        },
    },
    plugins: [],
};

export default config;
