import { gql } from '@apollo/client';
import * as Types from '../graphql';

export type CartFragment = {
  __typename?: 'UserCart';
  sku: string;
  quantity: number;
  price: number;
  productVariantId: number;
};

export const CartFragmentDoc = gql`
  fragment Cart on UserCart {
    sku
    quantity
    price
    productVariantId
  }
`;
