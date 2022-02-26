import { gql } from '@apollo/client';
import * as Types from '../graphql';
import { CategoryFragmentDoc } from './CategoryFragment';
import { ProductFieldsFragmentDoc } from './ProductOwnFieldsFragment';
import { ProductVariantDetailsFragmentDoc } from './ProductVariantDetailsFragment';

export type ProductDetailsFragment = {
  __typename?: 'Product';
  productId: number;
  productCategoryId: number;
  name: string;
  price: number;
  description: string;
  category?: {
    __typename?: 'ProductCategory';
    productCategoryId: number;
    name: string;
    description: string;
  } | null;
  variants?: Array<{
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
  }> | null;
};

export const ProductDetailsFragmentDoc = gql`
  fragment ProductDetails on Product {
    ...ProductFields
    category {
      ...Category
    }
    variants {
      ...ProductVariantDetails
    }
  }
  ${ProductFieldsFragmentDoc}
  ${CategoryFragmentDoc}
  ${ProductVariantDetailsFragmentDoc}
`;
