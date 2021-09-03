import { ReactNode } from 'react';
import { ApolloProvider } from '@apollo/client';
import { useAuthUser, withAuthUser } from 'next-firebase-auth';
import { useApollo } from '../lib/apolloClient';

interface AppContextsProps {
  children: ReactNode;
  pageProps: any;
}

const AppContexts = ({ children, pageProps }: AppContextsProps) => {
  const AuthUser = useAuthUser();
  const apolloClient = useApollo(pageProps, AuthUser.getIdToken);
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default withAuthUser<AppContextsProps>()(AppContexts);
