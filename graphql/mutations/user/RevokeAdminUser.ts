import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type RevokeAdminUserMutationVariables = Types.Exact<{
  userId: Types.Scalars['String'];
}>;

export type RevokeAdminUserMutation = {
  __typename?: 'Mutation';
  revokeAdminUser: boolean;
};

export const RevokeAdminUserDocument = gql`
  mutation RevokeAdminUser($userId: String!) {
    revokeAdminUser(userId: $userId)
  }
`;
export type RevokeAdminUserMutationFn = Apollo.MutationFunction<
  RevokeAdminUserMutation,
  RevokeAdminUserMutationVariables
>;

/**
 * __useRevokeAdminUserMutation__
 *
 * To run a mutation, you first call `useRevokeAdminUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRevokeAdminUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [revokeAdminUserMutation, { data, loading, error }] = useRevokeAdminUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRevokeAdminUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RevokeAdminUserMutation,
    RevokeAdminUserMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RevokeAdminUserMutation,
    RevokeAdminUserMutationVariables
  >(RevokeAdminUserDocument, options);
}
export type RevokeAdminUserMutationHookResult = ReturnType<
  typeof useRevokeAdminUserMutation
>;
export type RevokeAdminUserMutationResult =
  Apollo.MutationResult<RevokeAdminUserMutation>;
export type RevokeAdminUserMutationOptions = Apollo.BaseMutationOptions<
  RevokeAdminUserMutation,
  RevokeAdminUserMutationVariables
>;
