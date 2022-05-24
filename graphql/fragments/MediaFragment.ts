import { gql } from '@apollo/client';
import * as Types from '../graphql';

export type MediaFragment = {
  __typename?: 'ProductVariantMedium';
  productVariantMediaId?: number | null;
  mediaType: string;
  quality: string;
  url?: string | null;
  name: string;
  description?: string | null;
};

export const MediaFragmentDoc = gql`
  fragment Media on ProductVariantMedium {
    productVariantMediaId
    mediaType
    quality
    url
    name
    description
  }
`;
