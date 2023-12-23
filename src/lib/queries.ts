import { gql } from "graphql-request";

export const pageQuery = gql`
    query PageQuery {
        pages {
            heroSection {
                actionButtons {
                    size
                    url
                    text
                    id
                }
                title
                description
                mobileTitle
                mobileDescription
                id
            }
            sections {
                id
                blocks {
                    __typename
                    ... on Callout {
                        calloutButton: actionButton {
                            text
                            url
                            size
                            id
                        }
                        description
                        title
                        id
                    }
                    ... on Feature {
                        id
                        featureButton: actionButton {
                            text
                            url
                            size
                            id
                        }
                        label
                        description
                        media {
                            __typename
                            ... on FeatureImage {
                                id
                                image {
                                    id
                                    url
                                    width
                                    height
                                }
                            }
                            ... on YoutubeEmbed {
                                id
                                videoId
                                start
                            }
                        }
                        title
                    }
                }
            }
            description
            footerNavigationLinks {
                id
                text
                url
            }
            headerNavigationLinks {
                url
                text
                id
            }
            title
            updatedAt
            id
        }
    }
`;

export const metadataQuery = gql`
    query MetadataQuery {
        pages {
            metadata {
                description
                title
            }
        }
    }
`;
