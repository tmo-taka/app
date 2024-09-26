import {fetchNavigation} from '@/utils/fetchNavigation'

export const Navigation = (props: Props):JSX.Element => {
    const {loading, data, error} = fetchNavigation
    return (
        <div>
            Navigation
        </div>
    )
}