import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { ProductVariantDetailsFragmentDoc } from '../../fragments/ProductVariantDetailsFragment';
import * as Types from '../../graphql';

const defaultOptions = {} as const;
export type ProductVariantAddMediaMutationVariables = Types.Exact<{
  file: Types.Scalars['Upload'];
  productVariantMediaInput: Types.ProductVariantMediumInput;
}>;

export type ProductVariantAddMediaMutation = {
  __typename?: 'Mutation';
  productVariantAddMedia?: {
    __typename?: 'ProductVariant';
    productVariantId?: number | null;
    productId: number;
    sku: string;
    name: string;
    description: string;
    price: any;
    variantValues?: Array<{
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
    }> | null;
    media?: Array<{
      __typename?: 'ProductVariantMedium';
      productVariantMediaId?: number | null;
      mediaType: string;
      quality: string;
      url?: string | null;
      name: string;
      description: string;
    }> | null;
  } | null;
};

export const ProductVariantAddMediaDocument = gql`
  mutation ProductVariantAddMedia(
    $file: Upload!
    $productVariantMediaInput: ProductVariantMediumInput!
  ) {
    productVariantAddMedia(file: $file, input: $productVariantMediaInput) {
      ...ProductVariantDetails
    }
  }
  ${ProductVariantDetailsFragmentDoc}
`;
export type ProductVariantAddMediaMutationFn = Apollo.MutationFunction<
  ProductVariantAddMediaMutation,
  ProductVariantAddMediaMutationVariables
>;

/**
 * __useProductVariantAddMediaMutation__
 *
 * To run a mutation, you first call `useProductVariantAddMediaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useProductVariantAddMediaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [productVariantAddMediaMutation, { data, loading, error }] = useProductVariantAddMediaMutation({
 *   variables: {
 *      file: // value for 'file'
 *      productVariantMediaInput: // value for 'productVariantMediaInput'
 *   },
 * });
 */
export function useProductVariantAddMediaMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ProductVariantAddMediaMutation,
    ProductVariantAddMediaMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    ProductVariantAddMediaMutation,
    ProductVariantAddMediaMutationVariables
  >(ProductVariantAddMediaDocument, options);
}
export type ProductVariantAddMediaMutationHookResult = ReturnType<
  typeof useProductVariantAddMediaMutation
>;
export type ProductVariantAddMediaMutationResult =
  Apollo.MutationResult<ProductVariantAddMediaMutation>;
export type ProductVariantAddMediaMutationOptions = Apollo.BaseMutationOptions<
  ProductVariantAddMediaMutation,
  ProductVariantAddMediaMutationVariables
>;
