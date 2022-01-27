import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'lib/apolloClient';
import { getCookieIdToken } from 'lib/firebaseAuth/utils';

interface IAppContexts {
  children: ReactNode;
  pageProps: any;
}

const AppContexts = ({ children, pageProps }: IAppContexts) => {
  const apolloClient = useApollo(pageProps, {
    graphQLUrl: 'https://localhost:5001/graphql/',
    getToken: getCookieIdToken,
  });
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default AppContexts;
