import { Page } from '../components/Page';
import { Ecostore } from '../components/Ecostore';
import { Effect } from '../components/Effect';
import { type RouteProps } from "react-router-dom";
import { render } from '@testing-library/react';

const Component = ():JSX.Element => {
    return (<div>エラーです</div>)
}

export const routes = [
    {
        path: '/page',
        Component: Page
    },
    {
        path: '/eco',
        Component: Ecostore
    },
    {
        path: '/effect',
        Component: Effect
    },
    {
        path: '*',
        Component
    }
] as const satisfies RouteProps[]