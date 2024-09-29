import { Loading } from '@/components/Loading';
import { fetchPage } from '@/utils/graphql/fetchPage';

export const Page = ():JSX.Element => {
    const {data, loading, error} = fetchPage('introduction');
    console.log(data);
    if(loading) {
        return <Loading />
    }
    return (
        <div>
            ページ
        </div>
    )
}