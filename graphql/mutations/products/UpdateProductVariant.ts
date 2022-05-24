import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { ProductVariantDetailsFragmentDoc } from '../../fragments/ProductVariantDetailsFragment';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type UpdateProductVariantMutationVariables = Types.Exact<{
  updateProductVariantInput: Types.ProductVariantEntityInput;
}>;

export type UpdateProductVariantMutation = {
  __typename?: 'Mutation';
  updateProductVariant: {
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
  };
};

export const UpdateProductVariantDocument = gql`
  mutation UpdateProductVariant(
    $updateProductVariantInput: ProductVariantEntityInput!
  ) {
    updateProductVariant(input: $updateProductVariantInput) {
      ...ProductVariantDetails
    }
  }
  ${ProductVariantDetailsFragmentDoc}
`;
export type UpdateProductVariantMutationFn = Apollo.MutationFunction<
  UpdateProductVariantMutation,
  UpdateProductVariantMutationVariables
>;

/**
 * __useUpdateProductVariantMutation__
 *
 * To run a mutation, you first call `useUpdateProductVariantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductVariantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductVariantMutation, { data, loading, error }] = useUpdateProductVariantMutation({
 *   variables: {
 *      updateProductVariantInput: // value for 'updateProductVariantInput'
 *   },
 * });
 */
export function useUpdateProductVariantMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProductVariantMutation,
    UpdateProductVariantMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateProductVariantMutation,
    UpdateProductVariantMutationVariables
  >(UpdateProductVariantDocument, options);
}
export type UpdateProductVariantMutationHookResult = ReturnType<
  typeof useUpdateProductVariantMutation
>;
export type UpdateProductVariantMutationResult =
  Apollo.MutationResult<UpdateProductVariantMutation>;
export type UpdateProductVariantMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductVariantMutation,
  UpdateProductVariantMutationVariables
>;
