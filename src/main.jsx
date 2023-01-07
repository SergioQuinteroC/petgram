import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { App } from './App';

const client = new ApolloClient({
  uri: 'https://petgram-server-sergioquinteroc.vercel.app/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('app')).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
