import { GraphQLClient } from "graphql-request";

const hygraphClient = new GraphQLClient(process.env.HYGRAPH_ENDPOINT as string, {
    headers: {
        Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
});

export default hygraphClient;
