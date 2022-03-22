import { gql } from '@apollo/client';
import * as Types from '../graphql';

export type ProductFieldsFragment = {
  __typename?: 'Product';
  productId?: number | null;
  productCategoryId: number;
  name: string;
  price: number;
  description: string;
};

export const ProductFieldsFragmentDoc = gql`
  fragment ProductFields on Product {
    productId
    productCategoryId
    name
    price
    description
  }
`;
