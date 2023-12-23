import Link from "next/link";

import Button from "./button/Button";

import { Hero } from "@/types";

export default function HeroSection({ heroInfo }: { heroInfo: Hero }) {
    const { title, description, mobileTitle, mobileDescription, actionButtons } = heroInfo;

    return (
        <section className="bg-brand-blue-50">
            <div className="w-full text-center max-w-240 py-12 px-8 md:py-24 mx-auto">
                <h1 className="font-semibold text-4xl mb-6 leading-11 md:text-6xl md:leading-18">
                    <span className="hidden md:inline">{title}</span>
                    <span className="inline md:hidden">{mobileTitle}</span>
                </h1>
                <p className="text-xl text-brand-blue-500 mb-8 max-w-192 mx-auto leading-7.5 md:mb-12">
                    <span className="hidden md:inline">{description}</span>
                    <span className="inline md:hidden">{mobileDescription}</span>
                </p>
                <ul className="w-full flex flex-col list-none justify-center gap-8 md:flex-row md:w-auto md:items-center">
                    {actionButtons.map((buttonLink) => (
                        <li key={buttonLink.id}>
                            <Link href={buttonLink.url || "#"}>
                                <Button size={buttonLink.size} className="w-full md:w-auto">
                                    {buttonLink.text}
                                </Button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
