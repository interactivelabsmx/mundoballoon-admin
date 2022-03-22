import { gql } from '@apollo/client';
import * as Types from '../graphql';

export type ProductVariantFieldsFragment = {
  __typename?: 'ProductVariant';
  productVariantId?: number | null;
  variantValueId: number;
  productId: number;
  sku: string;
  name: string;
  description: string;
  price: number;
};

export const ProductVariantFieldsFragmentDoc = gql`
  fragment ProductVariantFields on ProductVariant {
    productVariantId
    variantValueId
    productId
    sku
    name
    description
    price
  }
`;
