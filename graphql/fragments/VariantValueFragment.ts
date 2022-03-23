import { gql } from '@apollo/client';
import * as Types from '../graphql';

export type VariantValueFragment = {
  __typename?: 'VariantValue';
  variantValueId?: number | null;
  variantId: number;
  value: string;
};

export const VariantValueFragmentDoc = gql`
  fragment VariantValue on VariantValue {
    variantValueId
    variantId
    value
  }
`;
