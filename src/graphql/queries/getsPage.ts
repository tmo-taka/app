import { graphql } from '../../gql/gql';

type Slug = 'about' | 'introduction'

export const GET_SINGLE_PAGE = graphql(`
    query getSinglePage($slug: String!) {
        page(where: {slug: $slug}) {
            slug,
            title,
            subtitle
        }
    }
`);