import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { JsonFileLoader } from '@graphql-tools/json-file-loader';
import { loadSchema } from '@graphql-tools/load';
import { addMocksToSchema } from '@graphql-tools/mock';
import { render as rtlRender } from '@testing-library/react';
import { ReactNode } from 'react';
import { AuthProvider } from '@providers/AuthProvider';

export default async function renderWithGraphql(
  component: ReactNode,
  mocks = {}
) {
  const schema = await loadSchema('graphql/graphql.schema.json', {
    loaders: [new JsonFileLoader()],
  });
  const mockSchema = addMocksToSchema({
    schema,
    resolvers: () => mocks,
  });

  const client = new ApolloClient({
    link: new SchemaLink({ schema: mockSchema }),
    cache: new InMemoryCache(),
  });

  return rtlRender(
    <AuthProvider>
      <ApolloProvider client={client}>{component}</ApolloProvider>
    </AuthProvider>
  );
}
