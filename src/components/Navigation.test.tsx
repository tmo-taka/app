import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { Navigation } from './Navigation';
import { GET_ALL_NAVIGATION_QUERY } from '../graphql/queries/getAllNavigations'


test('test mock fetch', async() => {
  const mocks = [
    {
      request: {
        query: GET_ALL_NAVIGATION_QUERY,
      },
      result: {
        data: {
          navigations: [
            {
              navId: 'test',
            }
          ]
        },
      },
    },
  ];

  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Navigation />
    </MockedProvider>
  );
  const text = await screen.findByText("test")
  expect(text).toBeInTheDocument();
});
