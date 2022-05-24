import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createUploadLink } from 'apollo-upload-client';
import merge from 'deepmerge';
import isEqual from 'lodash.isequal';
import typePolicies from './typePolicies';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject>;

export interface ICreateApolloClient {
  // Server URL (must be absolute)
  graphQLUrl: string;
  getToken: () => Promise<string> | string;
}

function createApolloClient({ graphQLUrl, getToken }: ICreateApolloClient) {
  const setAuthorizationLink = setContext(async (_, { headers }) => {
    // This means we set the auth inline for create user
    if (headers?.authorization) return { headers };
    const token = await getToken();
    if (token)
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    return { headers };
  });
  const link = createUploadLink({
    uri: graphQLUrl,
    credentials: 'same-origin',
  }) as unknown as ApolloLink;
  const cache = new InMemoryCache({ typePolicies });
  return new ApolloClient({
    cache,
    ssrMode: typeof window === 'undefined',
    link: setAuthorizationLink.concat(link),
  });
}

export function initializeApollo(
  initialState: any,
  options: ICreateApolloClient
) {
  const _apolloClient = apolloClient ?? createApolloClient(options);

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

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: any
) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }
  return pageProps;
}

export function useApollo(pageProps: any, options: ICreateApolloClient) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = initializeApollo(state, options);
  return store;
}
