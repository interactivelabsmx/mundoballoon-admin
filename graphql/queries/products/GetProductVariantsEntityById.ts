import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { ProductVariantEntityFragmentDoc } from '../../fragments/ProductVariantEntityFragment';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type GetProductVariantsEntityByIdQueryVariables = Types.Exact<{
  productId: Types.Scalars['Int'];
}>;

export type GetProductVariantsEntityByIdQuery = {
  __typename?: 'Query';
  productVariantsEntityById: Array<{
    __typename?: 'ProductVariantEntity';
    productVariantId: number;
    sku: string;
    productId: number;
    name: string;
    description: string;
    price: number;
  }>;
};

export const GetProductVariantsEntityByIdDocument = gql`
  query GetProductVariantsEntityById($productId: Int!) {
    productVariantsEntityById(productId: $productId) {
      ...ProductVariantEntity
    }
  }
  ${ProductVariantEntityFragmentDoc}
`;

/**
 * __useGetProductVariantsEntityByIdQuery__
 *
 * To run a query within a React component, call `useGetProductVariantsEntityByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductVariantsEntityByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductVariantsEntityByIdQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetProductVariantsEntityByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProductVariantsEntityByIdQuery,
    GetProductVariantsEntityByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetProductVariantsEntityByIdQuery,
    GetProductVariantsEntityByIdQueryVariables
  >(GetProductVariantsEntityByIdDocument, options);
}
export function useGetProductVariantsEntityByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProductVariantsEntityByIdQuery,
    GetProductVariantsEntityByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetProductVariantsEntityByIdQuery,
    GetProductVariantsEntityByIdQueryVariables
  >(GetProductVariantsEntityByIdDocument, options);
}
export type GetProductVariantsEntityByIdQueryHookResult = ReturnType<
  typeof useGetProductVariantsEntityByIdQuery
>;
export type GetProductVariantsEntityByIdLazyQueryHookResult = ReturnType<
  typeof useGetProductVariantsEntityByIdLazyQuery
>;
export type GetProductVariantsEntityByIdQueryResult = Apollo.QueryResult<
  GetProductVariantsEntityByIdQuery,
  GetProductVariantsEntityByIdQueryVariables
>;
