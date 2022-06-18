import { gql } from '@apollo/client';
import * as Types from '../graphql';

export type FirebaseUserFragment = {
  __typename?: 'FirebaseUser';
  id: number;
  userId: string;
  email?: string | null;
  displayName?: string | null;
  phoneNumber?: string | null;
  claims?: Array<string | null> | null;
};

export const FirebaseUserFragmentDoc = gql`
  fragment FirebaseUser on FirebaseUser {
    id
    userId
    email
    displayName
    phoneNumber
    claims
  }
`;
