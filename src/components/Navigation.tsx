import {fetchNavigation} from '../utils/graphql/fetchNavigation'
import { Loading } from './Loading';

export const Navigation = ():JSX.Element => {
    const {loading, data, error} = fetchNavigation();
    if(loading) {
        return <Loading />
    }
    return (
        <div>
            {
                data?.navigations.map((nav) => <div key={nav.navId}>{nav.navId}</div>)
            }
        </div>
    )
}