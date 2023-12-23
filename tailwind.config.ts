import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
                        50: "#F8FAFC", // Light Background
                        100: "#F1F5F9", // Image Background
                        200: "#E4E7EC", // Footer Border
                        300: "#98A2B3", // Footer
                        500: "#64748B", // Light text
                        900: "#334155", // Medium Dark text
                    },
                    purple: {
                        100: "#F2F4F7", // NavBar Border
                        500: "#7C3AED", // Primary Color
                    },
                    black: {
                        300: "#1E293B", // Callout Background
                        500: "#0F172A", // Dark Body text
                    },
                },
            },
            spacing: {
                "4.5": "1.125rem",
                15: "3.75rem",
                120: "30rem",
                140: "35rem",
                192: "48rem",
                240: "80rem",
            },
            lineHeight: {
                "7.5": "1.875rem",
                "9.5": "2.375rem",
                "11": "2.75rem",
                18: "4.5rem",
            },
            letterSpacing: {
                moderate: "0.045rem",
            },
        },
    },
    plugins: [],
};

export default config;
