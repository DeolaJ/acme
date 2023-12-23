import Image from "next/image";
import Link from "next/link";

import Button from "./button/Button";
import BareButton from "./button/BareButton";

import { NavLink } from "@/types";

import logo from "../../public/logo.svg";

function NavBar({ navigationLinks }: { navigationLinks: NavLink[] }) {
    return (
        <nav className="border-solid border-brand-purple-100 border-b">
            <div className="flex items-center justify-between max-w-240 px-8 py-4.5 mx-auto">
                <div className="flex justify-between items-center gap-8">
                    <div className="max-w-32">
                        <Link href="/">
                            <Image
                                src={logo.src}
                                alt="Acme logo"
                                width={logo.width}
                                height={logo.height}
                            />
                        </Link>
                    </div>
                    <DesktopMenu navigationLinks={navigationLinks} />
                </div>
                <AuthButtons />
            </div>
        </nav>
    );
}

function DesktopMenu({ navigationLinks }: { navigationLinks: NavLink[] }) {
    return (
        <ul
            aria-label="Acme navigation menu"
            className="items-center gap-8 hidden list-none md:flex"
            id="desktop-menu"
        >
            {navigationLinks?.map((navLink) => (
                <li
                    key={navLink.id}
                    className="text-brand-blue-900 font-medium hover:text-brand-black-500"
                >
                    <Link href={navLink.url || "#"}>{navLink.text}</Link>
                </li>
            ))}
        </ul>
    );
}

function AuthButtons() {
    return (
        <ul
            aria-label="Acme authentication menu"
            className="flex gap-3 items-center list-none"
            id="auth-buttons"
        >
            <li className="hidden md:block">
                <Link href="#">
                    <BareButton className="hover:text-brand-black-500">Log in</BareButton>
                </Link>
            </li>
            <li>
                <Link href="#">
                    <Button>Sign up</Button>
                </Link>
            </li>
        </ul>
    );
}

export default NavBar;
