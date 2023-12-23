import Image from "next/image";
import Link from "next/link";

import YoutubeEmbed from "./YoutubeEmbed";
import Button from "./button/Button";

import { Feature } from "@/types";

function FeatureSection({ feature, index }: { feature: Feature; index: number }) {
    const { media, label, title, description, featureButton } = feature;

    return (
        <div className="feature grid grid-cols-1 w-full px-8 gap-12 md:grid-cols-2 md:gap-24 md:items-center md:flex-row">
            <div
                className={`${
                    index % 2 === 0 ? "md:col-start-1 md:col-end-2" : "md:col-start-2 md:col-end-3"
                }`}
            >
                {label && (
                    <p className="font-space text-brand-purple-500 uppercase text-lg font-bold tracking-moderate leading-9.5">
                        {label}
                    </p>
                )}
                <h4 className="mb-4 text-3xl font-semibold text-brand-black-500 leading-9.5">
                    {title}
                </h4>
                <p className="text-lg leading-7 text-brand-blue-900">{description}</p>
                {featureButton && (
                    <div className="mt-8">
                        <Link href={featureButton.url || "#"}>
                            <Button size={featureButton.size} className="w-full md:w-auto">
                                {featureButton.text}
                            </Button>
                        </Link>
                    </div>
                )}
            </div>

            <div
                className={`md:bg-brand-blue-100 md:p-10 md:rounded-3xl md:max-w-140 ${
                    index % 2 === 0 ? "md:col-start-2 md:col-end-3" : "md:col-start-1 md:col-end-2"
                } md:row-start-1 md:row-end-2`}
            >
                <div className="max-w-120 rounded-md w-full overflow-hidden">
                    {media?.__typename === "FeatureImage" && media?.image.url && (
                        <Image
                            src={media.image.url}
                            alt="Feature image"
                            width={media?.image.width}
                            height={media?.image.height}
                            className="object-cover object-top"
                        />
                    )}
                    {media?.__typename === "YoutubeEmbed" && <YoutubeEmbed youtubeInfo={media} />}
                </div>
            </div>
        </div>
    );
}

export default FeatureSection;
