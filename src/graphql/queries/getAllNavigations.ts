import { graphql } from '../../gql/gql';

export const GET_ALL_NAVIGATION_QUERY = graphql(`
    query getAllNavigations {
        navigations {
            navId,
        }
    }
`);