import {fetchNavigation} from '@/utils/fetchNavigation'

export const Navigation = (props: Props):JSX.Element => {
    const {loading, data, error} = await fetchNavigation();
    console.log(data);
    return (
        <div>
            Navigation
        </div>
    )
}