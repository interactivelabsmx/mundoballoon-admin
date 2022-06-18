import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type GrantAdminUserMutationVariables = Types.Exact<{
  userId: Types.Scalars['String'];
}>;

export type GrantAdminUserMutation = {
  __typename?: 'Mutation';
  grantAdminUser: boolean;
};

export const GrantAdminUserDocument = gql`
  mutation GrantAdminUser($userId: String!) {
    grantAdminUser(userId: $userId)
  }
`;
export type GrantAdminUserMutationFn = Apollo.MutationFunction<
  GrantAdminUserMutation,
  GrantAdminUserMutationVariables
>;

/**
 * __useGrantAdminUserMutation__
 *
 * To run a mutation, you first call `useGrantAdminUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGrantAdminUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [grantAdminUserMutation, { data, loading, error }] = useGrantAdminUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGrantAdminUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    GrantAdminUserMutation,
    GrantAdminUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    GrantAdminUserMutation,
    GrantAdminUserMutationVariables
  >(GrantAdminUserDocument, options);
}
export type GrantAdminUserMutationHookResult = ReturnType<
  typeof useGrantAdminUserMutation
>;
export type GrantAdminUserMutationResult =
  Apollo.MutationResult<GrantAdminUserMutation>;
export type GrantAdminUserMutationOptions = Apollo.BaseMutationOptions<
  GrantAdminUserMutation,
  GrantAdminUserMutationVariables
>;
