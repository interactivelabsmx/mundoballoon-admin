import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';

interface IAppContexts {
  children: ReactNode;
  pageProps: any;
}

const AppContexts = ({ children, pageProps }: IAppContexts) => {
  const apolloClient = useApollo(pageProps);
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default AppContexts;
