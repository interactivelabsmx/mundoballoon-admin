import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { ProductOwnFieldsFragmentDoc } from '../../fragments/ProductOwnFieldsFragment';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type CreateProductMutationVariables = Types.Exact<{
  createProductPayload: Types.CreateProductRequestInput;
}>;

export type CreateProductMutation = {
  __typename?: 'Mutation';
  createProduct: {
    __typename?: 'CreateProductPayload';
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

export const CreateProductDocument = gql`
  mutation CreateProduct($createProductPayload: CreateProductRequestInput!) {
    createProduct(input: $createProductPayload) {
      product {
        ...ProductOwnFields
      }
    }
  }
  ${ProductOwnFieldsFragmentDoc}
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
 *      createProductPayload: // value for 'createProductPayload'
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
