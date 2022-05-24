import { gql } from '@apollo/client';
import * as Types from '../graphql';
import { MediaFragmentDoc } from './MediaFragment';
import { VariantValuesFragmentDoc } from './ProductVariantValues';

export type ProductVariantDetailsFragment = {
  __typename?: 'ProductVariant';
  productVariantId?: number | null;
  productId: number;
  sku: string;
  name: string;
  description: string;
  price: number;
  variantValues?: Array<{
    __typename?: 'ProductVariantValue';
    variantId: number;
    variantValueId: number;
    variant?: { __typename?: 'Variant'; name: string; type: string } | null;
    variantValue?: { __typename?: 'VariantValue'; value: string } | null;
  }> | null;
  media?: Array<{
    __typename?: 'ProductVariantMedium';
    productVariantMediaId?: number | null;
    mediaType: string;
    quality: string;
    url?: string | null;
    name: string;
    description?: string | null;
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
    variantValues {
      ...VariantValues
    }
    media {
      ...Media
    }
  }
  ${VariantValuesFragmentDoc}
  ${MediaFragmentDoc}
`;
