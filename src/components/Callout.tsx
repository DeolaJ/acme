import Link from "next/link";

import Button from "./button/Button";

import { Callout } from "@/types";

function CalloutSection({ callout }: { callout: Callout }) {
    const { title, description, calloutButton } = callout;

    return (
        <div className="px-8 w-full">
            <div className="p-8 flex flex-col w-full justify-between bg-brand-black-300 rounded-2xl md:flex-row md:p-16">
                <div className="mb-8 md:mb-0">
                    <h4 className="mb-4 text-3xl font-semibold text-white leading-9.5">{title}</h4>
                    <p className="text-xl leading-7.5 text-white">{description}</p>
                </div>
                <div>
                    <Link href={calloutButton.url || "#"}>
                        <Button size={calloutButton.size} className="w-full md:w-auto">
                            {calloutButton.text}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CalloutSection;
