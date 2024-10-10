import { useQuery } from '@apollo/client';
import { GET_SINGLE_PAGE } from '../../graphql/queries/getsPage'

export const fetchPage = (slug: string) => {
  return useQuery(
    GET_SINGLE_PAGE,
    {
      variables: { slug },
    }
  );
}