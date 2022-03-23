import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { VariantValueFragmentDoc } from '../../fragments/VariantValueFragment';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type CreateVariantValueMutationVariables = Types.Exact<{
  createVariantValueInput: Types.VariantValueInput;
}>;

export type CreateVariantValueMutation = {
  __typename?: 'Mutation';
  createVariantValue: {
    __typename?: 'VariantValue';
    variantValueId?: number | null;
    variantId: number;
    value: string;
  };
};

export const CreateVariantValueDocument = gql`
  mutation CreateVariantValue($createVariantValueInput: VariantValueInput!) {
    createVariantValue(input: $createVariantValueInput) {
      ...VariantValue
    }
  }
  ${VariantValueFragmentDoc}
`;
export type CreateVariantValueMutationFn = Apollo.MutationFunction<
  CreateVariantValueMutation,
  CreateVariantValueMutationVariables
>;

/**
 * __useCreateVariantValueMutation__
 *
 * To run a mutation, you first call `useCreateVariantValueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVariantValueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVariantValueMutation, { data, loading, error }] = useCreateVariantValueMutation({
 *   variables: {
 *      createVariantValueInput: // value for 'createVariantValueInput'
 *   },
 * });
 */
export function useCreateVariantValueMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateVariantValueMutation,
    CreateVariantValueMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateVariantValueMutation,
    CreateVariantValueMutationVariables
  >(CreateVariantValueDocument, options);
}
export type CreateVariantValueMutationHookResult = ReturnType<
  typeof useCreateVariantValueMutation
>;
export type CreateVariantValueMutationResult =
  Apollo.MutationResult<CreateVariantValueMutation>;
export type CreateVariantValueMutationOptions = Apollo.BaseMutationOptions<
  CreateVariantValueMutation,
  CreateVariantValueMutationVariables
>;
