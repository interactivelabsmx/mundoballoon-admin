import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { ProductVariantFieldsFragmentDoc } from '../../fragments/ProductVariantFieldsFragment';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type CreateProductVariantMutationVariables = Types.Exact<{
  createProductVariantInput: Types.ProductVariantInput;
}>;

export type CreateProductVariantMutation = {
  __typename?: 'Mutation';
  createProductVariant: {
    __typename?: 'ProductVariant';
    productVariantId?: number | null;
    variantValueId: number;
    productId: number;
    sku: string;
    name: string;
    description: string;
    price: number;
  };
};

export const CreateProductVariantDocument = gql`
  mutation CreateProductVariant(
    $createProductVariantInput: ProductVariantInput!
  ) {
    createProductVariant(input: $createProductVariantInput) {
      ...ProductVariantFields
    }
  }
  ${ProductVariantFieldsFragmentDoc}
`;
export type CreateProductVariantMutationFn = Apollo.MutationFunction<
  CreateProductVariantMutation,
  CreateProductVariantMutationVariables
>;

/**
 * __useCreateProductVariantMutation__
 *
 * To run a mutation, you first call `useCreateProductVariantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductVariantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductVariantMutation, { data, loading, error }] = useCreateProductVariantMutation({
 *   variables: {
 *      createProductVariantInput: // value for 'createProductVariantInput'
 *   },
 * });
 */
export function useCreateProductVariantMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductVariantMutation,
    CreateProductVariantMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateProductVariantMutation,
    CreateProductVariantMutationVariables
  >(CreateProductVariantDocument, options);
}
export type CreateProductVariantMutationHookResult = ReturnType<
  typeof useCreateProductVariantMutation
>;
export type CreateProductVariantMutationResult =
  Apollo.MutationResult<CreateProductVariantMutation>;
export type CreateProductVariantMutationOptions = Apollo.BaseMutationOptions<
  CreateProductVariantMutation,
  CreateProductVariantMutationVariables
>;
