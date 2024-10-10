import { useQuery } from '@apollo/client';
import { GET_ALL_NAVIGATION_QUERY } from '../../graphql/queries/getAllNavigations'

export const fetchNavigation = () => {
  return useQuery(GET_ALL_NAVIGATION_QUERY);
}