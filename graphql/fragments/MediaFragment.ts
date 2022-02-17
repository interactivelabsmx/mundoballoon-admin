import { gql } from '@apollo/client';
import * as Types from '../graphql';

export type MediaFragment = {
  __typename?: 'ProductVariantMedium';
  productVariantMediaId: number;
  mediaType: string;
  quality: string;
  url: string;
};

export const MediaFragmentDoc = gql`
  fragment Media on ProductVariantMedium {
    productVariantMediaId
    mediaType
    quality
    url
  }
`;
