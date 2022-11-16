import { gql } from '@apollo/client';
import * as Types from '../graphql';

export type ProductVariantFieldsFragment = {
  __typename?: 'ProductVariant';
  productVariantId?: number | null;
  productId: number;
  sku: string;
  name: string;
  description: string;
  price: any;
};

export const ProductVariantFieldsFragmentDoc = gql`
  fragment ProductVariantFields on ProductVariant {
    productVariantId
    productId
    sku
    name
    description
    price
  }
`;
