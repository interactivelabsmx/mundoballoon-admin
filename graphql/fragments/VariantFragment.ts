import { gql } from '@apollo/client';
import * as Types from '../graphql';

export type VariantFragment = {
  __typename?: 'Variant';
  variantId?: number | null;
  name: string;
  type: string;
};

export const VariantFragmentDoc = gql`
  fragment Variant on Variant {
    variantId
    name
    type
  }
`;
