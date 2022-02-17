export type VariantDetailsFragment = {
  __typename?: 'ProductVariant';
  productVariantId: number;
  sku: string;
  name: string;
  description: string;
  price: number;
  variant?: { __typename?: 'VariantValue'; value: string } | null;
  media?: Array<{
    __typename?: 'ProductVariantMedium';
    productVariantMediaId: number;
    mediaType: string;
    quality: string;
    url: string;
  }> | null;
};