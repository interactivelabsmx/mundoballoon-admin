import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { ProductOwnFieldsFragmentDoc } from '../../fragments/ProductOwnFieldsFragment';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type UpdateProductMutationVariables = Types.Exact<{
  updateProductInput: Types.ProductEntityInput;
}>;

export type UpdateProductMutation = {
  __typename?: 'Mutation';
  updateProduct: {
    __typename?: 'UpdateProductPayload';
    product: {
      __typename?: 'Product';
      productId: number;
      productCategoryId: number;
      name: string;
      price: number;
      description: string;
    };
  };
};

export const UpdateProductDocument = gql`
  mutation UpdateProduct($updateProductInput: ProductEntityInput!) {
    updateProduct(input: $updateProductInput) {
      product {
        ...ProductOwnFields
      }
    }
  }
  ${ProductOwnFieldsFragmentDoc}
`;
export type UpdateProductMutationFn = Apollo.MutationFunction<
  UpdateProductMutation,
  UpdateProductMutationVariables
>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      updateProductInput: // value for 'updateProductInput'
 *   },
 * });
 */
export function useUpdateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProductMutation,
    UpdateProductMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateProductMutation,
    UpdateProductMutationVariables
  >(UpdateProductDocument, options);
}
export type UpdateProductMutationHookResult = ReturnType<
  typeof useUpdateProductMutation
>;
export type UpdateProductMutationResult =
  Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<
  UpdateProductMutation,
  UpdateProductMutationVariables
>;
