import { gql } from '@apollo/client';
import * as Types from '../graphql';

export type OccasionFragment = {
  __typename?: 'UserOccasion';
  userOccasionId?: number | null;
  name: string;
  date?: any | null;
  details: string;
};

export const OccasionFragmentDoc = gql`
  fragment Occasion on UserOccasion {
    userOccasionId
    name
    date
    details
  }
`;
