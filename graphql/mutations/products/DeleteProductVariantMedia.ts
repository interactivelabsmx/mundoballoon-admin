import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type DeleteProductVariantMediaMutationVariables = Types.Exact<{
  productVariantMediaId: Types.Scalars['Int'];
}>;

export type DeleteProductVariantMediaMutation = {
  __typename?: 'Mutation';
  deleteProductVariantMedia: boolean;
};

export const DeleteProductVariantMediaDocument = gql`
  mutation DeleteProductVariantMedia($productVariantMediaId: Int!) {
    deleteProductVariantMedia(productVariantMediaId: $productVariantMediaId)
  }
`;
export type DeleteProductVariantMediaMutationFn = Apollo.MutationFunction<
  DeleteProductVariantMediaMutation,
  DeleteProductVariantMediaMutationVariables
>;

/**
 * __useDeleteProductVariantMediaMutation__
 *
 * To run a mutation, you first call `useDeleteProductVariantMediaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductVariantMediaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductVariantMediaMutation, { data, loading, error }] = useDeleteProductVariantMediaMutation({
 *   variables: {
 *      productVariantMediaId: // value for 'productVariantMediaId'
 *   },
 * });
 */
export function useDeleteProductVariantMediaMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteProductVariantMediaMutation,
    DeleteProductVariantMediaMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteProductVariantMediaMutation,
    DeleteProductVariantMediaMutationVariables
  >(DeleteProductVariantMediaDocument, options);
}
export type DeleteProductVariantMediaMutationHookResult = ReturnType<
  typeof useDeleteProductVariantMediaMutation
>;
export type DeleteProductVariantMediaMutationResult =
  Apollo.MutationResult<DeleteProductVariantMediaMutation>;
export type DeleteProductVariantMediaMutationOptions =
  Apollo.BaseMutationOptions<
    DeleteProductVariantMediaMutation,
    DeleteProductVariantMediaMutationVariables
  >;
