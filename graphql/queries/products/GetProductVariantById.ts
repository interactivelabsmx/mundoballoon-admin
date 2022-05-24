import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { ProductVariantDetailsFragmentDoc } from '../../fragments/ProductVariantDetailsFragment';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type GetProductVariantByIdQueryVariables = Types.Exact<{
  productVariantId: Types.Scalars['Int'];
}>;

export type GetProductVariantByIdQuery = {
  __typename?: 'Query';
  productVariantById?: {
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
      variant?: { __typename?: 'Variant'; name: string; type: string } | null;
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
  } | null;
};

export const GetProductVariantByIdDocument = gql`
  query GetProductVariantById($productVariantId: Int!) {
    productVariantById(productVariantId: $productVariantId) {
      ...ProductVariantDetails
    }
  }
  ${ProductVariantDetailsFragmentDoc}
`;

/**
 * __useGetProductVariantByIdQuery__
 *
 * To run a query within a React component, call `useGetProductVariantByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductVariantByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductVariantByIdQuery({
 *   variables: {
 *      productVariantId: // value for 'productVariantId'
 *   },
 * });
 */
export function useGetProductVariantByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProductVariantByIdQuery,
    GetProductVariantByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetProductVariantByIdQuery,
    GetProductVariantByIdQueryVariables
  >(GetProductVariantByIdDocument, options);
}
export function useGetProductVariantByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductVariantByIdQuery,
    GetProductVariantByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetProductVariantByIdQuery,
    GetProductVariantByIdQueryVariables
  >(GetProductVariantByIdDocument, options);
}
export type GetProductVariantByIdQueryHookResult = ReturnType<
  typeof useGetProductVariantByIdQuery
>;
export type GetProductVariantByIdLazyQueryHookResult = ReturnType<
  typeof useGetProductVariantByIdLazyQuery
>;
export type GetProductVariantByIdQueryResult = Apollo.QueryResult<
  GetProductVariantByIdQuery,
  GetProductVariantByIdQueryVariables
>;
