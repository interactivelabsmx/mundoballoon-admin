import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { UserFragmentDoc } from '../../fragments/UserFragment';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type GetUserByIdQueryVariables = Types.Exact<{
  userId: Types.Scalars['String'];
}>;

export type GetUserByIdQuery = {
  __typename?: 'Query';
  userById?: {
    __typename?: 'FirebaseUser';
    id: number;
    userId: string;
    email?: string | null;
    displayName?: string | null;
    phoneNumber?: string | null;
    claims?: Array<string | null> | null;
    carts?: Array<{
      __typename?: 'UserCart';
      sku: string;
      quantity: number;
      price: number;
      productVariantId: number;
    }> | null;
    occasions?: Array<{
      __typename?: 'UserOccasion';
      userOccasionId?: number | null;
      name: string;
      date?: any | null;
      details: string;
    }> | null;
    paymentProfiles?: Array<{
      __typename?: 'UserPaymentProfile';
      userProfileId: number;
      processorId: string;
    }> | null;
  } | null;
};

export const GetUserByIdDocument = gql`
  query GetUserById($userId: String!) {
    userById(userId: $userId) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options
  );
}
export function useGetUserByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options
  );
}
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<
  typeof useGetUserByIdLazyQuery
>;
export type GetUserByIdQueryResult = Apollo.QueryResult<
  GetUserByIdQuery,
  GetUserByIdQueryVariables
>;
