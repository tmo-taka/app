import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import { rootReducer } from './reducers'
import { createStore, applyMiddleware } from 'redux';
import { routes } from './routes/map'
import App from './App';

// const mockUseLocationValue = {
//   pathname: '',
// };

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: jest.fn(),
// }));

describe('APP', () => {
  beforeEach(() => {
    jest.doMock("@apollo/client", () => {
      return {
        ApolloProvider: (props: {children: any}) => <div>{props.children}</div>,
      };
    });
    jest.doMock("./utils/graphql/client",() => {
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

  test.each(routes)("$pathでは$labelが活性状態化を判別", ({path,label}) => {
    const store = createStore(rootReducer)
    window.history.pushState({}, 'About page', path);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    const link = screen.getByRole("link", {name: label});
    screen.debug()
    expect(link).toHaveAttribute("aria-current", "page")
  })

  // test('redux', async() => {
  //   const store = createStore(rootReducer)
  //   const user = userEvent;
  //   const {container} = render(
  //     <Provider store={store}>
  //       <App />
  //     </Provider>
  //   );
  //   const counter = container.querySelector('#test');
  //   expect(counter).toHaveTextContent("0");
  //   await user.click(screen.getByText(/redux add/i));
  //   expect(counter).toHaveTextContent("1");
  //   await user.click(screen.getByText(/redux minus/i));
  //   expect(counter).toHaveTextContent("0");
  //   await user.click(screen.getByText(/redux minus/i));
  //   expect(counter?.textContent).toContain("-")
  // })
})
