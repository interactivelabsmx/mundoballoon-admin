import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';

interface IAppContexts {
  children: ReactNode;
  pageProps: any;
}

const AppContexts = ({ children, pageProps }: IAppContexts) => {
  const AuthUser = { getIdToken: () => '123' };
  const apolloClient = useApollo(pageProps, AuthUser.getIdToken);
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default AppContexts;
