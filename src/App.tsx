import React from 'react';
import '@/App';
import { ApolloProvider } from "@apollo/client";
import { client } from '@/utils/graphql/client'
import {Navigation} from '@/components/Navigation';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        これ
        <Navigation />
      </div>
    </ApolloProvider>
  );
}

export default App;
