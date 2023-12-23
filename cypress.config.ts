import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        // baseUrl: "https://deolaj-acme.vercel.app",
        baseUrl: "http://localhost:3000",
    },
});
