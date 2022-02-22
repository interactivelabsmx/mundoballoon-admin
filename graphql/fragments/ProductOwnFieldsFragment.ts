import { gql } from '@apollo/client';
import * as Types from '../graphql';

export type ProductOwnFieldsFragment = {
  __typename?: 'Product';
  productId: number;
  productCategoryId: number;
  name: string;
  price: number;
  description: string;
};

export const ProductOwnFieldsFragmentDoc = gql`
  fragment ProductOwnFields on Product {
    productId
    productCategoryId
    name
    price
    description
  }
`;
