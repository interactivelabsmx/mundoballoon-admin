import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { VariantFragmentDoc } from '../../fragments/VariantFragment';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type CreateVariantMutationVariables = Types.Exact<{
  createVariantRequestInput: Types.VariantInput;
}>;

export type CreateVariantMutation = {
  __typename?: 'Mutation';
  createVariant: {
    __typename?: 'Variant';
    variantId?: number | null;
    name: string;
    variantType?: {
      __typename?: 'VariantsType';
      variantType?: string | null;
    } | null;
  };
};

export const CreateVariantDocument = gql`
  mutation CreateVariant($createVariantRequestInput: VariantInput!) {
    createVariant(input: $createVariantRequestInput) {
      ...Variant
    }
  }
  ${VariantFragmentDoc}
`;
export type CreateVariantMutationFn = Apollo.MutationFunction<
  CreateVariantMutation,
  CreateVariantMutationVariables
>;

/**
 * __useCreateVariantMutation__
 *
 * To run a mutation, you first call `useCreateVariantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVariantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVariantMutation, { data, loading, error }] = useCreateVariantMutation({
 *   variables: {
 *      createVariantRequestInput: // value for 'createVariantRequestInput'
 *   },
 * });
 */
export function useCreateVariantMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateVariantMutation,
    CreateVariantMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateVariantMutation,
    CreateVariantMutationVariables
  >(CreateVariantDocument, options);
}
export type CreateVariantMutationHookResult = ReturnType<
  typeof useCreateVariantMutation
>;
export type CreateVariantMutationResult =
  Apollo.MutationResult<CreateVariantMutation>;
export type CreateVariantMutationOptions = Apollo.BaseMutationOptions<
  CreateVariantMutation,
  CreateVariantMutationVariables
>;
