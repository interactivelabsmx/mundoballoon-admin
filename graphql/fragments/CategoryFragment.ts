import { gql } from '@apollo/client';
import * as Types from '../graphql';

export type CategoryFragment = {
  __typename?: 'ProductCategory';
  productCategoryId?: number | null;
  name: string;
  description: string;
};

export const CategoryFragmentDoc = gql`
  fragment Category on ProductCategory {
    productCategoryId
    name
    description
  }
`;
