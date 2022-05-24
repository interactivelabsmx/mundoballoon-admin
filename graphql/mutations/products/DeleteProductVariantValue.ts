import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type DeleteProductVariantValueMutationVariables = Types.Exact<{
  productVariantId: Types.Scalars['Int'];
  variantId: Types.Scalars['Int'];
  variantValueId: Types.Scalars['Int'];
}>;

export type DeleteProductVariantValueMutation = {
  __typename?: 'Mutation';
  deleteProductVariantValue?: boolean | null;
};

export const DeleteProductVariantValueDocument = gql`
  mutation DeleteProductVariantValue(
    $productVariantId: Int!
    $variantId: Int!
    $variantValueId: Int!
  ) {
    deleteProductVariantValue(
      productVariantId: $productVariantId
      variantId: $variantId
      variantValueId: $variantValueId
    )
  }
`;
export type DeleteProductVariantValueMutationFn = Apollo.MutationFunction<
  DeleteProductVariantValueMutation,
  DeleteProductVariantValueMutationVariables
>;

/**
 * __useDeleteProductVariantValueMutation__
 *
 * To run a mutation, you first call `useDeleteProductVariantValueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductVariantValueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductVariantValueMutation, { data, loading, error }] = useDeleteProductVariantValueMutation({
 *   variables: {
 *      productVariantId: // value for 'productVariantId'
 *      variantId: // value for 'variantId'
 *      variantValueId: // value for 'variantValueId'
 *   },
 * });
 */
export function useDeleteProductVariantValueMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteProductVariantValueMutation,
    DeleteProductVariantValueMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteProductVariantValueMutation,
    DeleteProductVariantValueMutationVariables
  >(DeleteProductVariantValueDocument, options);
}
export type DeleteProductVariantValueMutationHookResult = ReturnType<
  typeof useDeleteProductVariantValueMutation
>;
export type DeleteProductVariantValueMutationResult =
  Apollo.MutationResult<DeleteProductVariantValueMutation>;
export type DeleteProductVariantValueMutationOptions =
  Apollo.BaseMutationOptions<
    DeleteProductVariantValueMutation,
    DeleteProductVariantValueMutationVariables
  >;
