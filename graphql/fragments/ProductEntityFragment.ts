import { gql } from '@apollo/client';
import * as Types from '../graphql';

export type ProductEntityFragment = {
  __typename?: 'ProductEntity';
  productId: number;
  productCategoryId: number;
  name: string;
  price: number;
  description: string;
};

export const ProductEntityFragmentDoc = gql`
  fragment ProductEntity on ProductEntity {
    productId
    productCategoryId
    name
    price
    description
  }
`;
