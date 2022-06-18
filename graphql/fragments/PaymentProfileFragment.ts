import { gql } from '@apollo/client';
import * as Types from '../graphql';

export type PaymentProfileFragment = {
  __typename?: 'UserPaymentProfile';
  userProfileId: number;
  processorId: string;
};

export const PaymentProfileFragmentDoc = gql`
  fragment PaymentProfile on UserPaymentProfile {
    userProfileId
    processorId
  }
`;
