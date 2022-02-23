import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type GetCountryCodesQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetCountryCodesQuery = {
  __typename?: 'Query';
  countryCodes: Array<{
    __typename?: 'CountryCode';
    fifa: string;
    dial: string;
    officialNameEn: string;
  }>;
};

export const GetCountryCodesDocument = gql`
  query GetCountryCodes {
    countryCodes {
      fifa
      dial
      officialNameEn
    }
  }
`;

/**
 * __useGetCountryCodesQuery__
 *
 * To run a query within a React component, call `useGetCountryCodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountryCodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountryCodesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCountryCodesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCountryCodesQuery,
    GetCountryCodesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCountryCodesQuery, GetCountryCodesQueryVariables>(
    GetCountryCodesDocument,
    options
  );
}
export function useGetCountryCodesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCountryCodesQuery,
    GetCountryCodesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCountryCodesQuery,
    GetCountryCodesQueryVariables
  >(GetCountryCodesDocument, options);
}
export type GetCountryCodesQueryHookResult = ReturnType<
  typeof useGetCountryCodesQuery
>;
export type GetCountryCodesLazyQueryHookResult = ReturnType<
  typeof useGetCountryCodesLazyQuery
>;
export type GetCountryCodesQueryResult = Apollo.QueryResult<
  GetCountryCodesQuery,
  GetCountryCodesQueryVariables
>;
