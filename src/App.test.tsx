import React from 'react';
import { render, screen, shallow } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import { rootReducer } from './reducers'
import { createStore, applyMiddleware } from 'redux';

import App from './App';

describe('APP', () => {
  beforeAll(() => {
    jest.doMock("@apollo/client", () => {
      return {
        ApolloProvider: (props: {children: any}) => <div>{props.children}</div>,
      };
    });
    jest.doMock("./utils/graphql/client", () => {
      return {
        client: 'テスト',
      };
    });
  })

  test('renders learn react link', async() => {
    const store = createStore(rootReducer)
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByText(/Component 2/i);
    expect(linkElement).toBeInTheDocument();

    const user = userEvent;
    await user.click(screen.getByText(/reduxへ/i))
    expect(window.location.pathname).toEqual('/eco')
  });

  test('redux', async() => {
    const store = createStore(rootReducer)
    const user = userEvent;
    const {container} = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const counter = container.querySelector('#test');
    expect(counter).toHaveTextContent("0");
    await user.click(screen.getByText(/redux add/i));
    expect(counter).toHaveTextContent("1");
    await user.click(screen.getByText(/redux minus/i));
    expect(counter).toHaveTextContent("0");
  })
})
