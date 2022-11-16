import { gql } from '@apollo/client';
import * as Types from '../graphql';

export type VariantsTypeFragment = {
  __typename?: 'VariantsType';
  variantTypeId: number;
  variantType?: string | null;
};

export const VariantsTypeFragmentDoc = gql`
  fragment VariantsType on VariantsType {
    variantTypeId
    variantType
  }
`;
