import { gql } from '@apollo/client';
import * as Types from '../graphql';

export type ProductVariantEntityFragment = {
  __typename?: 'ProductVariantEntity';
  productVariantId: number;
  sku: string;
  variantValueId: number;
  productId: number;
  name: string;
  description: string;
  price: number;
};

export const ProductVariantEntityFragmentDoc = gql`
  fragment ProductVariantEntity on ProductVariantEntity {
    productVariantId
    sku
    variantValueId
    productId
    name
    description
    price
  }
`;
