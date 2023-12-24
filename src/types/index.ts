import { Metadata } from "next";

export type NavLink = {
    id: string;
    text: string;
    url?: string;
};

export type ButtonLink = {
    id: string;
    text: string;
    size?: "sm" | "md" | "lg";
    url?: string;
};

export type YoutubeEmbed = {
    __typename: "YoutubeEmbed";
    id: string;
    videoId: string;
    start?: number;
};

type FeatureImage = {
    __typename: "FeatureImage";
    id: string;
    image: {
        id: string;
        url: string;
        width: number;
        height: number;
    };
};

export type Feature = {
    __typename: "Feature";
    id: string;
    title: string;
    description: string;
    media: YoutubeEmbed | FeatureImage;
    label?: string;
    featureButton?: ButtonLink;
};

export type Callout = {
    __typename: "Callout";
    id: string;
    title: string;
    description: string;
    calloutButton: ButtonLink;
};

export type Hero = {
    id: string;
    title: string;
    description: string;
    mobileTitle: string;
    mobileDescription: string;
    actionButtons: ButtonLink[];
};

export type Block = Feature | Callout;

export type Section = {
    id: string;
    blocks: Block[];
};

export type Page = {
    id: string;
    heroSection: Hero;
    headerNavigationLinks: NavLink[];
    sections: Section[];
    footerNavigationLinks: NavLink[];
    metadata: Metadata;
};
