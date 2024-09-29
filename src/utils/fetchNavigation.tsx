import { ApolloClient, InMemoryCache, useQuery } from '@apollo/client';
import { graphql } from '../gql/gql';

const hygraphRegion = process.env.REACT_APP_HYGRAPH_REGION;
const hygraphId = process.env.REACT_APP_HYGRAPH_ID;

export const client = new ApolloClient({
  uri: `https://${hygraphRegion}.cdn.hygraph.com/content/${hygraphId}/master`,
  cache: new InMemoryCache(),
});

const GET_NAVIGATION_QUERY = graphql(`
  query GetNavigation {
    pages(locales: en){
      slug
    }
  }
`);

export const fetchNavigation = () => {
  return useQuery(GET_NAVIGATION_QUERY);
}