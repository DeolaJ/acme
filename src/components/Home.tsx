import NavBar from "./NavBar";
import HeroSection from "./Hero";
import Footer from "./Footer";
import Sections from "./Sections";

import { Page } from "@/types";

export default function Home({ page }: { page: Page }) {
    return (
        <>
            <NavBar navigationLinks={page.headerNavigationLinks} />
            <HeroSection heroInfo={page.heroSection} />
            <Sections sections={page.sections} />
            <Footer navigationLinks={page.footerNavigationLinks} />
        </>
    );
}
