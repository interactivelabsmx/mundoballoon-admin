import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { ProductFieldsFragmentDoc } from '../../fragments/ProductOwnFieldsFragment';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type CreateProductMutationVariables = Types.Exact<{
  createProductInput: Types.ProductInput;
}>;

export type CreateProductMutation = {
  __typename?: 'Mutation';
  createProduct: {
    __typename?: 'Product';
    productId?: number | null;
    productCategoryId: number;
    name: string;
    price: any;
    description: string;
  };
};

export const CreateProductDocument = gql`
  mutation CreateProduct($createProductInput: ProductInput!) {
    createProduct(input: $createProductInput) {
      ...ProductFields
    }
  }
  ${ProductFieldsFragmentDoc}
`;
export type CreateProductMutationFn = Apollo.MutationFunction<
  CreateProductMutation,
  CreateProductMutationVariables
>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      createProductInput: // value for 'createProductInput'
 *   },
 * });
 */
export function useCreateProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProductMutation,
    CreateProductMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateProductMutation,
    CreateProductMutationVariables
  >(CreateProductDocument, options);
}
export type CreateProductMutationHookResult = ReturnType<
  typeof useCreateProductMutation
>;
export type CreateProductMutationResult =
  Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<
  CreateProductMutation,
  CreateProductMutationVariables
>;
