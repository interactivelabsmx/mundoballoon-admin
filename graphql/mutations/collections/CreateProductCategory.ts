import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { CategoryFragmentDoc } from '../../fragments/CategoryFragment';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type CreateProductCategoryMutationVariables = Types.Exact<{
  createProductCategoryRequestInput: Types.CreateProductCategoryRequestInput;
}>;

export type CreateProductCategoryMutation = {
  __typename?: 'Mutation';
  createProductCategory: {
    __typename?: 'ProductCategory';
    productCategoryId: number;
    name: string;
    description: string;
  };
};

export const CreateProductCategoryDocument = gql`
  mutation CreateProductCategory(
    $createProductCategoryRequestInput: CreateProductCategoryRequestInput!
  ) {
    createProductCategory(input: $createProductCategoryRequestInput) {
      ...Category
    }
  }
  ${CategoryFragmentDoc}
`;
export type CreateProductCategoryMutationFn = Apollo.MutationFunction<
  CreateProductCategoryMutation,
  CreateProductCategoryMutationVariables
>;

/**
 * __useCreateProductCategoryMutation__
 *
 * To run a mutation, you first call `useCreateProductCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductCategoryMutation, { data, loading, error }] = useCreateProductCategoryMutation({
 *   variables: {
 *      createProductCategoryRequestInput: // value for 'createProductCategoryRequestInput'
 *   },
 * });
 */
export function useCreateProductCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductCategoryMutation,
    CreateProductCategoryMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateProductCategoryMutation,
    CreateProductCategoryMutationVariables
  >(CreateProductCategoryDocument, options);
}
export type CreateProductCategoryMutationHookResult = ReturnType<
  typeof useCreateProductCategoryMutation
>;
export type CreateProductCategoryMutationResult =
  Apollo.MutationResult<CreateProductCategoryMutation>;
export type CreateProductCategoryMutationOptions = Apollo.BaseMutationOptions<
  CreateProductCategoryMutation,
  CreateProductCategoryMutationVariables
>;
