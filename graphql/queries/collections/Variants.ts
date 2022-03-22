import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type GetVariantsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetVariantsQuery = {
  __typename?: 'Query';
  variants: Array<{
    __typename?: 'Variant';
    variantId?: number | null;
    name: string;
  }>;
};

export const GetVariantsDocument = gql`
  query GetVariants {
    variants {
      variantId
      name
    }
  }
`;

/**
 * __useGetVariantsQuery__
 *
 * To run a query within a React component, call `useGetVariantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVariantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVariantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetVariantsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetVariantsQuery,
    GetVariantsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetVariantsQuery, GetVariantsQueryVariables>(
    GetVariantsDocument,
    options
  );
}
export function useGetVariantsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetVariantsQuery,
    GetVariantsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetVariantsQuery, GetVariantsQueryVariables>(
    GetVariantsDocument,
    options
  );
}
export type GetVariantsQueryHookResult = ReturnType<typeof useGetVariantsQuery>;
export type GetVariantsLazyQueryHookResult = ReturnType<
  typeof useGetVariantsLazyQuery
>;
export type GetVariantsQueryResult = Apollo.QueryResult<
  GetVariantsQuery,
  GetVariantsQueryVariables
>;
