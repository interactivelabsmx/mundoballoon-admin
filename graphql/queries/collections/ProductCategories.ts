import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { CategoryFragmentDoc } from '../../fragments/CategoryFragment';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type GetProductCategoriesQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetProductCategoriesQuery = {
  __typename?: 'Query';
  productCategories: Array<{
    __typename?: 'ProductCategory';
    productCategoryId?: number | null;
    name: string;
    description: string;
  }>;
};

export const GetProductCategoriesDocument = gql`
  query GetProductCategories {
    productCategories {
      ...Category
    }
  }
  ${CategoryFragmentDoc}
`;

/**
 * __useGetProductCategoriesQuery__
 *
 * To run a query within a React component, call `useGetProductCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductCategoriesQuery,
    GetProductCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetProductCategoriesQuery,
    GetProductCategoriesQueryVariables
  >(GetProductCategoriesDocument, options);
}
export function useGetProductCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductCategoriesQuery,
    GetProductCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetProductCategoriesQuery,
    GetProductCategoriesQueryVariables
  >(GetProductCategoriesDocument, options);
}
export type GetProductCategoriesQueryHookResult = ReturnType<
  typeof useGetProductCategoriesQuery
>;
export type GetProductCategoriesLazyQueryHookResult = ReturnType<
  typeof useGetProductCategoriesLazyQuery
>;
export type GetProductCategoriesQueryResult = Apollo.QueryResult<
  GetProductCategoriesQuery,
  GetProductCategoriesQueryVariables
>;
