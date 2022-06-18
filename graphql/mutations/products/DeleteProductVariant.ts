import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type DeleteProductVariantMutationVariables = Types.Exact<{
  productVariantId: Types.Scalars['Int'];
}>;

export type DeleteProductVariantMutation = {
  __typename?: 'Mutation';
  deleteProductVariant: boolean;
};

export const DeleteProductVariantDocument = gql`
  mutation DeleteProductVariant($productVariantId: Int!) {
    deleteProductVariant(productVariantId: $productVariantId)
  }
`;
export type DeleteProductVariantMutationFn = Apollo.MutationFunction<
  DeleteProductVariantMutation,
  DeleteProductVariantMutationVariables
>;

/**
 * __useDeleteProductVariantMutation__
 *
 * To run a mutation, you first call `useDeleteProductVariantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductVariantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductVariantMutation, { data, loading, error }] = useDeleteProductVariantMutation({
 *   variables: {
 *      productVariantId: // value for 'productVariantId'
 *   },
 * });
 */
export function useDeleteProductVariantMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteProductVariantMutation,
    DeleteProductVariantMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteProductVariantMutation,
    DeleteProductVariantMutationVariables
  >(DeleteProductVariantDocument, options);
}
export type DeleteProductVariantMutationHookResult = ReturnType<
  typeof useDeleteProductVariantMutation
>;
export type DeleteProductVariantMutationResult =
  Apollo.MutationResult<DeleteProductVariantMutation>;
export type DeleteProductVariantMutationOptions = Apollo.BaseMutationOptions<
  DeleteProductVariantMutation,
  DeleteProductVariantMutationVariables
>;
