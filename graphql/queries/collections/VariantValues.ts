import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type GetVariantValuesQueryVariables = Types.Exact<{
  variantId: Types.Scalars['Int'];
}>;

export type GetVariantValuesQuery = {
  __typename?: 'Query';
  variantValues: Array<{
    __typename?: 'VariantValue';
    variantValueId?: number | null;
    value: string;
  }>;
};

export const GetVariantValuesDocument = gql`
  query GetVariantValues($variantId: Int!) {
    variantValues(variantId: $variantId) {
      variantValueId
      value
    }
  }
`;

/**
 * __useGetVariantValuesQuery__
 *
 * To run a query within a React component, call `useGetVariantValuesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVariantValuesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVariantValuesQuery({
 *   variables: {
 *      variantId: // value for 'variantId'
 *   },
 * });
 */
export function useGetVariantValuesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetVariantValuesQuery,
    GetVariantValuesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetVariantValuesQuery, GetVariantValuesQueryVariables>(
    GetVariantValuesDocument,
    options
  );
}
export function useGetVariantValuesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetVariantValuesQuery,
    GetVariantValuesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetVariantValuesQuery,
    GetVariantValuesQueryVariables
  >(GetVariantValuesDocument, options);
}
export type GetVariantValuesQueryHookResult = ReturnType<
  typeof useGetVariantValuesQuery
>;
export type GetVariantValuesLazyQueryHookResult = ReturnType<
  typeof useGetVariantValuesLazyQuery
>;
export type GetVariantValuesQueryResult = Apollo.QueryResult<
  GetVariantValuesQuery,
  GetVariantValuesQueryVariables
>;
