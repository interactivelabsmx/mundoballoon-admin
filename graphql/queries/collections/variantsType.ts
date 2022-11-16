import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type GetVariantsTypeQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetVariantsTypeQuery = {
  __typename?: 'Query';
  variantsType: Array<{
    __typename?: 'VariantsType';
    variantTypeId: number;
    variantType?: string | null;
  }>;
};

export const GetVariantsTypeDocument = gql`
  query GetVariantsType {
    variantsType {
      variantTypeId
      variantType
    }
  }
`;

/**
 * __useGetVariantsTypeQuery__
 *
 * To run a query within a React component, call `useGetVariantsTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVariantsTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVariantsTypeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetVariantsTypeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetVariantsTypeQuery,
    GetVariantsTypeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetVariantsTypeQuery, GetVariantsTypeQueryVariables>(
    GetVariantsTypeDocument,
    options
  );
}
export function useGetVariantsTypeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetVariantsTypeQuery,
    GetVariantsTypeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetVariantsTypeQuery,
    GetVariantsTypeQueryVariables
  >(GetVariantsTypeDocument, options);
}
export type GetVariantsTypeQueryHookResult = ReturnType<
  typeof useGetVariantsTypeQuery
>;
export type GetVariantsTypeLazyQueryHookResult = ReturnType<
  typeof useGetVariantsTypeLazyQuery
>;
export type GetVariantsTypeQueryResult = Apollo.QueryResult<
  GetVariantsTypeQuery,
  GetVariantsTypeQueryVariables
>;
