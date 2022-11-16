import { gql } from '@apollo/client';
import * as Types from '../graphql';

export type VariantValuesFragment = {
  __typename?: 'ProductVariantValue';
  variantId: number;
  variantValueId: number;
  variant?: {
    __typename?: 'Variant';
    name: string;
    variantType?: {
      __typename?: 'VariantsType';
      variantType?: string | null;
    } | null;
  } | null;
  variantValue?: { __typename?: 'VariantValue'; value: string } | null;
};

export const VariantValuesFragmentDoc = gql`
  fragment VariantValues on ProductVariantValue {
    variantId
    variantValueId
    variant {
      name
      variantType {
        variantType
      }
    }
    variantValue {
      value
    }
  }
`;
