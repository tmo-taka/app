import { ApolloClient, InMemoryCache } from '@apollo/client';

const hygraphRegion = process.env.REACT_APP_HYGRAPH_REGION;
const hygraphId = process.env.REACT_APP_HYGRAPH_ID;

export const client = new ApolloClient({
    uri: `https://${hygraphRegion}.cdn.hygraph.com/content/${hygraphId}/master`,
    cache: new InMemoryCache(),
});