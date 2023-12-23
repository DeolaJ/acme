import Link from "next/link";

import { NavLink } from "@/types";

function Footer({ navigationLinks }: { navigationLinks: NavLink[] }) {
    return (
        <footer className="bg-brand-blue-50">
            <div className=" max-w-240 px-8 mx-auto">
                <div className="flex flex-col justify-between py-8 gap-8 w-full items-center border-t border-solid border-brand-blue-200 md:flex-row">
                    <p className="text-center order-1 text-base text-brand-blue-300 md:order-0 md:text-left">
                        © {new Date().getFullYear()} Acme Co. All rights reserved.
                    </p>
                    <ul className="h-10 flex list-none items-start gap-4 md:h-auto md:items-center md:order-1">
                        {navigationLinks.map((navLink) => (
                            <li
                                key={navLink.id}
                                className="text-base text-brand-blue-300 hover:text-brand-blue-900"
                            >
                                <Link
                                    href={navLink.url || ""}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {navLink.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
