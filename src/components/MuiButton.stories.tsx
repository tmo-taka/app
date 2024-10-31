import type { Meta, StoryObj, ReactRenderer } from '@storybook/react';
import { PartialStoryFn, Args } from '@storybook/csf';
import { fn } from '@storybook/test';
import { MuiButton } from './MuiButton';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { rootReducer } from '../reducers'
import counter from '../reducers/counter'

const store = createStore(rootReducer)

const meta = {
    title: 'Example/MuiButton',
    component: MuiButton,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    args: {
        onClick: fn(),
    },
} satisfies Meta<typeof MuiButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    decorators: [
        (Story: PartialStoryFn<ReactRender, Args>) => (
            <Provider store={store}>
                <div style={{background: "#F00", padding: "80px"}}>
                    <Story />
                </div>
            </Provider>
        )
    ],
    args: {
        text: 'Button'
    },
};
