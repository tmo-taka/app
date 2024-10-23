import { Page } from '../components/Page';
import { Ecostore } from '../components/Ecostore';
import { Effect } from '../components/Effect';
import { type RouteProps } from "react-router-dom";

const Component = ():JSX.Element => {
    return (<div>エラーです</div>)
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
        path: '*',
        label: 'エラーページへ',
        Component
    }
] as const satisfies (RouteProps & LinkLabel)[]