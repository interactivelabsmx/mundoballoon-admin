import { gql } from '@apollo/client';
import * as Types from '../graphql';
import { MediaFragmentDoc } from './MediaFragment';

export type ProductVariantDetailsFragment = {
  __typename?: 'ProductVariant';
  productVariantId: number;
  productId: number;
  sku: string;
  name: string;
  description: string;
  price: number;
  variant?: {
    __typename?: 'VariantValue';
    variantId: number;
    value: string;
  } | null;
  media?: Array<{
    __typename?: 'ProductVariantMedium';
    productVariantMediaId: number;
    mediaType: string;
    quality: string;
    url: string;
  }> | null;
};

export const ProductVariantDetailsFragmentDoc = gql`
  fragment ProductVariantDetails on ProductVariant {
    productVariantId
    productId
    sku
    name
    description
    price
    variant {
      variantId
      value
    }
    media {
      ...Media
    }
  }
  ${MediaFragmentDoc}
`;
