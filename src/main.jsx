import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { App } from './App';
import { AppProvider } from './context/AppContext';

const httpLink = createHttpLink({
  uri: 'https://petgram-server-sergioquinteroc.vercel.app/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  console.log(`console.log -> ERROR!`);
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token');
    window.location.href = '/';
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: errorLink.concat(authLink.concat(httpLink)),
});

ReactDOM.createRoot(document.getElementById('app')).render(
  <AppProvider>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </AppProvider>
);
