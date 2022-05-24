import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { ProductDetailsFragmentDoc } from '../../fragments/ProductDetailsFragment';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type AllProductsQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']>;
  after?: Types.InputMaybe<Types.Scalars['String']>;
}>;

export type AllProductsQuery = {
  __typename?: 'Query';
  allProducts?: {
    __typename?: 'AllProductsConnection';
    nodes?: Array<{
      __typename?: 'Product';
      productId?: number | null;
      productCategoryId: number;
      name: string;
      price: number;
      description: string;
      category?: {
        __typename?: 'ProductCategory';
        productCategoryId?: number | null;
        name: string;
        description: string;
      } | null;
      variants?: Array<{
        __typename?: 'ProductVariant';
        productVariantId?: number | null;
        productId: number;
        sku: string;
        name: string;
        description: string;
        price: number;
        variantValues?: Array<{
          __typename?: 'ProductVariantValue';
          variantId: number;
          variantValueId: number;
          variant?: {
            __typename?: 'Variant';
            name: string;
            type: string;
          } | null;
          variantValue?: { __typename?: 'VariantValue'; value: string } | null;
        }> | null;
        media?: Array<{
          __typename?: 'ProductVariantMedium';
          productVariantMediaId?: number | null;
          mediaType: string;
          quality: string;
          url?: string | null;
          name: string;
          description?: string | null;
        }> | null;
      }> | null;
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

export const AllProductsDocument = gql`
  query AllProducts($first: Int = 5, $after: String) {
    allProducts(first: $first, after: $after, order: [{ price: ASC }]) {
      nodes {
        ...ProductDetails
      }
      pageInfo {
        hasNextPage
        endCursor
        hasPreviousPage
        startCursor
      }
    }
  }
  ${ProductDetailsFragmentDoc}
`;

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
    AllProductsDocument,
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
    AllProductsDocument,
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
