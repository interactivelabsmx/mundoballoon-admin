import { gql } from '@apollo/client';
import * as Types from '../graphql';
import { CartFragmentDoc } from './CartFragment';
import { OccasionFragmentDoc } from './OccasionFragment';
import { PaymentProfileFragmentDoc } from './PaymentProfileFragment';

export type UserFragment = {
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
};

export const UserFragmentDoc = gql`
  fragment User on FirebaseUser {
    id
    userId
    email
    displayName
    phoneNumber
    claims
    carts {
      ...Cart
    }
    occasions {
      ...Occasion
    }
    paymentProfiles {
      ...PaymentProfile
    }
  }
  ${CartFragmentDoc}
  ${OccasionFragmentDoc}
  ${PaymentProfileFragmentDoc}
`;
