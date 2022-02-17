import { gql } from '@apollo/client';
import * as Types from '../graphql';
import { CategoryFragmentDoc } from './CategoryFragment';
import { VariantDetailsFragmentDoc } from './VariantDetailsFragment';

export type ProductDetailsFragment = {
  __typename?: 'Product';
  productId: number;
  name: string;
  description: string;
  price: number;
  category?: {
    __typename?: 'ProductCategory';
    productCategoryId: number;
    name: string;
    description: string;
  } | null;
  variants?: Array<{
    __typename?: 'ProductVariant';
    productVariantId: number;
    sku: string;
    name: string;
    description: string;
    price: number;
    variant?: { __typename?: 'VariantValue'; value: string } | null;
    media?: Array<{
      __typename?: 'ProductVariantMedium';
      productVariantMediaId: number;
      mediaType: string;
      quality: string;
      url: string;
    }> | null;
  }> | null;
};

export const ProductDetailsFragmentDoc = gql`
  fragment ProductDetails on Product {
    productId
    name
    description
    price
    category {
      ...Category
    }
    variants {
      ...VariantDetails
    }
  }
  ${CategoryFragmentDoc}
  ${VariantDetailsFragmentDoc}
`;
