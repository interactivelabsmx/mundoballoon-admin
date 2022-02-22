import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { ProductEntityFragmentDoc } from '../../fragments/ProductEntityFragment';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type GetProductsEntityQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']>;
  after?: Types.InputMaybe<Types.Scalars['String']>;
}>;

export type GetProductsEntityQuery = {
  __typename?: 'Query';
  productsEntity?: {
    __typename?: 'ProductsEntityConnection';
    nodes?: Array<{
      __typename?: 'ProductEntity';
      productId: number;
      productCategoryId: number;
      name: string;
      price: number;
      description: string;
    }> | null;
    pageInfo: {
      __typename?: 'PageInfo';
      hasNextPage: boolean;
      endCursor?: string | null;
      hasPreviousPage: boolean;
      startCursor?: string | null;
    };
  } | null;
};

export const GetProductsEntityDocument = gql`
  query GetProductsEntity($first: Int = 5, $after: String) {
    productsEntity(first: $first, after: $after, order: [{ price: ASC }]) {
      nodes {
        ...ProductEntity
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }
  ${ProductEntityFragmentDoc}
`;

/**
 * __useGetProductsEntityQuery__
 *
 * To run a query within a React component, call `useGetProductsEntityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsEntityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsEntityQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useGetProductsEntityQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProductsEntityQuery,
    GetProductsEntityQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetProductsEntityQuery,
    GetProductsEntityQueryVariables
  >(GetProductsEntityDocument, options);
}
export function useGetProductsEntityLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductsEntityQuery,
    GetProductsEntityQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetProductsEntityQuery,
    GetProductsEntityQueryVariables
  >(GetProductsEntityDocument, options);
}
export type GetProductsEntityQueryHookResult = ReturnType<
  typeof useGetProductsEntityQuery
>;
export type GetProductsEntityLazyQueryHookResult = ReturnType<
  typeof useGetProductsEntityLazyQuery
>;
export type GetProductsEntityQueryResult = Apollo.QueryResult<
  GetProductsEntityQuery,
  GetProductsEntityQueryVariables
>;
