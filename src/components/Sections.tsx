import { Fragment } from "react";

import FeatureSection from "./FeatureSection";
import CalloutSection from "./Callout";

import { Section } from "@/types";

function Sections({ sections }: { sections: Section[] }) {
    return (
        <>
            {sections.map((section) => (
                <Section key={section.id} section={section} />
            ))}
        </>
    );
}

function Section({ section }: { section: Section }) {
    return (
        <section className="bg-brand-blue-50">
            <article className="flex flex-col gap-16 w-full max-w-240 py-12 mx-auto md:gap-20 md:py-24">
                {section.blocks.map((block, index) => (
                    <Fragment key={block.id}>
                        {block.__typename === "Feature" && (
                            <FeatureSection index={index} feature={block} />
                        )}
                        {block.__typename === "Callout" && <CalloutSection callout={block} />}
                    </Fragment>
                ))}
            </article>
        </section>
    );
}

export default Sections;
