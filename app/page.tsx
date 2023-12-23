import Home from "@/components/Home";

import hygraphClient from "@/lib/client";
import { pageQuery } from "@/lib/queries";

import { Page } from "@/types";

const getPages = async () => {
    const { pages } = await hygraphClient.request<{ pages: Page[] }>(pageQuery);
    return pages;
};

export default async function IndexPage() {
    const pages = await getPages();
    const landingPage = pages[0];

    return (
        <main>
            <Home page={landingPage} />
        </main>
    );
}
