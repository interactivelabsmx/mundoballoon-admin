import { gql } from '@apollo/client';
import * as Types from '../graphql';
import { CartFragmentDoc } from './CartFragment';
import { PaymentProfileFragmentDoc } from './PaymentProfileFragment';

export type UserFragment = {
  __typename?: 'FirebaseUser';
  userId: string;
  email?: string | null;
  displayName?: string | null;
  phoneNumber?: string | null;
  claims?: Array<string | null> | null;
  carts?: Array<{
    __typename?: 'UserCart';
    sku: string;
    quantity: any;
    price: any;
    productVariantId: number;
  }> | null;
  paymentProfiles?: Array<{
    __typename?: 'UserPaymentProfile';
    userProfileId: number;
    processorId: string;
  }> | null;
};

export const UserFragmentDoc = gql`
  fragment User on FirebaseUser {
    userId
    email
    displayName
    phoneNumber
    claims
    carts {
      ...Cart
    }
    paymentProfiles {
      ...PaymentProfile
    }
  }
  ${CartFragmentDoc}
  ${PaymentProfileFragmentDoc}
`;
