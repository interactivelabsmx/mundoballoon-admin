import * as Apollo from '@apollo/client';
import * as Types from '../../graphql';
import * as Operations from './allProducts.graphql';

const defaultOptions = {} as const;
export type AllProductsQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']>;
  after?: Types.InputMaybe<Types.Scalars['String']>;
}>;

export type AllProductsQuery = {
  __typename?: 'Query';
  allProducts?:
    | {
        __typename?: 'AllProductsConnection';
        nodes?:
          | Array<{
              __typename?: 'Product';
              productId: number;
              name: string;
              description: string;
              price: number;
              category?:
                | {
                    __typename?: 'ProductCategory';
                    productCategoryId: number;
                    name: string;
                    description: string;
                  }
                | null
                | undefined;
              variants?:
                | Array<{
                    __typename?: 'ProductVariant';
                    productVariantId: number;
                    sku: string;
                    variantValueId: number;
                    productId: number;
                    name: string;
                    description: string;
                    price: number;
                    weight: number;
                    storeOnly: boolean;
                    isBundle: boolean;
                    variant?:
                      | { __typename?: 'VariantValue'; value: string }
                      | null
                      | undefined;
                    media?:
                      | Array<{
                          __typename?: 'ProductVariantMedium';
                          productVariantMediaId: number;
                          mediaType: string;
                          url: string;
                          quality: string;
                        }>
                      | null
                      | undefined;
                  }>
                | null
                | undefined;
            }>
          | null
          | undefined;
        pageInfo: {
          __typename?: 'PageInfo';
          hasNextPage: boolean;
          endCursor?: string | null | undefined;
          hasPreviousPage: boolean;
          startCursor?: string | null | undefined;
        };
      }
    | null
    | undefined;
};

/**
 * __useAllProductsQuery__
 *
 * To run a query within a React component, call `useAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useAllProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllProductsQuery,
    AllProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllProductsQuery, AllProductsQueryVariables>(
    Operations.AllProducts,
    options
  );
}
export function useAllProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllProductsQuery,
    AllProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllProductsQuery, AllProductsQueryVariables>(
    Operations.AllProducts,
    options
  );
}
export type AllProductsQueryHookResult = ReturnType<typeof useAllProductsQuery>;
export type AllProductsLazyQueryHookResult = ReturnType<
  typeof useAllProductsLazyQuery
>;
export type AllProductsQueryResult = Apollo.QueryResult<
  AllProductsQuery,
  AllProductsQueryVariables
>;
