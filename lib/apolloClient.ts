import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { relayStylePagination } from '@apollo/client/utilities';
import merge from 'deepmerge';
import isEqual from 'lodash.isequal';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient;

function createApolloClient() {
  const setAuthorizationLink = setContext(async (_, { headers }) => {
    // This means we set the auth inline for create user
    if (headers?.authorization) return { headers };
    const token = localStorage.getItem('ft');
    if (token)
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    return { headers };
  });
  const link = new HttpLink({
    uri: 'https://localhost:5001/graphql/', // Server URL (must be absolute)
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  });
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allProducts: relayStylePagination(),
        },
      },
    },
  });
  return new ApolloClient({
    cache,
    ssrMode: typeof window === 'undefined',
    link: setAuthorizationLink.concat(link),
  });
}

export function initializeApollo(initialState) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }
  return pageProps;
}

export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = initializeApollo(state);
  return store;
}
