import { ApolloProvider } from '@apollo/client';
import { useAuthUser, withAuthUser } from 'next-firebase-auth';
import { useApollo } from '../lib/apolloClient';

const AppContexts = ({ children, pageProps }) => {
  const AuthUser = useAuthUser();
  const apolloClient = useApollo(pageProps, AuthUser.getIdToken);
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default withAuthUser()(AppContexts);
