import { useState } from 'react'
import { Loading } from './Loading';
import { fetchPage } from '../utils/graphql/fetchPage';
import { useMutation } from '@apollo/client';
// import { UpdatePage } from '@/gql/graphql';

export const Page = ():JSX.Element => {
    const {data, loading, error} = fetchPage('introduction');
    const [text, setText] = useState<string>('');

    // const [addPage, { data, loading, error }] = useMutation(UpdatePage);

    if(loading) {
        return <Loading />
    }
    return (
        <div>
            {data?.page?.subtitle}
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button>変更</button>
        </div>
    )
}