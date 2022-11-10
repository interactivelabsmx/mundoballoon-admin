import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { ProductVariantDetailsFragmentDoc } from '../../fragments/ProductVariantDetailsFragment';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type ProductVariantAddValueMutationVariables = Types.Exact<{
  productVariantValueInput: Types.ProductVariantValueInput;
}>;

export type ProductVariantAddValueMutation = {
  __typename?: 'Mutation';
  productVariantAddValue: {
    __typename?: 'ProductVariant';
    productVariantId?: number | null;
    productId: number;
    sku: string;
    name: string;
    description: string;
    price: any;
    variantValues?: Array<{
      __typename?: 'ProductVariantValue';
      variantId: number;
      variantValueId: number;
      variant?: {
        __typename?: 'Variant';
        name: string;
        type: { __typename?: 'VariantsType'; variantType?: string | null };
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
      description: string;
    }> | null;
  };
};

export const ProductVariantAddValueDocument = gql`
  mutation ProductVariantAddValue(
    $productVariantValueInput: ProductVariantValueInput!
  ) {
    productVariantAddValue(input: $productVariantValueInput) {
      ...ProductVariantDetails
    }
  }
  ${ProductVariantDetailsFragmentDoc}
`;
export type ProductVariantAddValueMutationFn = Apollo.MutationFunction<
  ProductVariantAddValueMutation,
  ProductVariantAddValueMutationVariables
>;

/**
 * __useProductVariantAddValueMutation__
 *
 * To run a mutation, you first call `useProductVariantAddValueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProductVariantAddValueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [productVariantAddValueMutation, { data, loading, error }] = useProductVariantAddValueMutation({
 *   variables: {
 *      productVariantValueInput: // value for 'productVariantValueInput'
 *   },
 * });
 */
export function useProductVariantAddValueMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ProductVariantAddValueMutation,
    ProductVariantAddValueMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ProductVariantAddValueMutation,
    ProductVariantAddValueMutationVariables
  >(ProductVariantAddValueDocument, options);
}
export type ProductVariantAddValueMutationHookResult = ReturnType<
  typeof useProductVariantAddValueMutation
>;
export type ProductVariantAddValueMutationResult =
  Apollo.MutationResult<ProductVariantAddValueMutation>;
export type ProductVariantAddValueMutationOptions = Apollo.BaseMutationOptions<
  ProductVariantAddValueMutation,
  ProductVariantAddValueMutationVariables
>;
