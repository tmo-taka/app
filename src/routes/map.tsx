// ルートマッピング コメント
import { Page } from '../components/Page';
import { Ecostore } from '../components/Ecostore';
import { Effect } from '../components/Effect';
import { Query } from '../components/Query';
import { type RouteProps } from "react-router-dom";

const Component = ():JSX.Element => {
    return (<div>エラーで</div>)
}

type LinkLabel = {
    label: string
}

export const routes = [
    {
        path: '/page',
        label: 'ページへ',
        Component: Page
    },
    {
        path: '/eco',
        label: 'reduxへ',
        Component: Ecostore
    },
    {
        path: '/effect',
        label: 'useEffect',
        Component: Effect
    },
    {
        path: '/query',
        label: 'クエリ付き',
        Component: Query
    },
    {
        path: '*',
        label: 'エラーページへ',
        Component
    }
] as const satisfies (RouteProps & LinkLabel)[]