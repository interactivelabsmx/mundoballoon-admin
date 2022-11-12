import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { VariantsTypeFragmentDoc } from '../../fragments/VariantsTypeFragment';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type CreateVariantsTypeMutationVariables = Types.Exact<{
  variantsType: Types.Scalars['String'];
}>;

export type CreateVariantsTypeMutation = {
  __typename?: 'Mutation';
  createVariantsType: {
    __typename?: 'VariantsType';
    variantTypeId: number;
    variantType?: string | null;
  };
};

export const CreateVariantsTypeDocument = gql`
  mutation CreateVariantsType($variantsType: String!) {
    createVariantsType(variantsType: $variantsType) {
      ...VariantsType
    }
  }
  ${VariantsTypeFragmentDoc}
`;
export type CreateVariantsTypeMutationFn = Apollo.MutationFunction<
  CreateVariantsTypeMutation,
  CreateVariantsTypeMutationVariables
>;

/**
 * __useCreateVariantsTypeMutation__
 *
 * To run a mutation, you first call `useCreateVariantsTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVariantsTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVariantsTypeMutation, { data, loading, error }] = useCreateVariantsTypeMutation({
 *   variables: {
 *      variantsType: // value for 'variantsType'
 *   },
 * });
 */
export function useCreateVariantsTypeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateVariantsTypeMutation,
    CreateVariantsTypeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateVariantsTypeMutation,
    CreateVariantsTypeMutationVariables
  >(CreateVariantsTypeDocument, options);
}
export type CreateVariantsTypeMutationHookResult = ReturnType<
  typeof useCreateVariantsTypeMutation
>;
export type CreateVariantsTypeMutationResult =
  Apollo.MutationResult<CreateVariantsTypeMutation>;
export type CreateVariantsTypeMutationOptions = Apollo.BaseMutationOptions<
  CreateVariantsTypeMutation,
  CreateVariantsTypeMutationVariables
>;
