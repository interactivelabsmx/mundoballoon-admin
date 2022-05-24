import React from 'react';
import ProductVariantMediaDisplayList from '@components/Products/ProductVariantMediaDisplayList';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';
import LoadingText from '@components/UI/loading/LoadingText';
import { MediaFragment } from '@graphql/fragments/MediaFragment';
import { useDeleteProductVariantMediaMutation } from '@graphql/mutations/products/DeleteProductVariantMedia';

interface IProductVariantMediaDisplayListContainer {
  media: MediaFragment[];
}

const ProductVariantMediaDisplayListContainer = ({
  media,
}: IProductVariantMediaDisplayListContainer) => {
  const [deleteProductVariantMedia, { loading, error }] =
    useDeleteProductVariantMediaMutation();
  const onClickDelete = (productVariantMediaId: number) =>
    deleteProductVariantMedia({ variables: { productVariantMediaId } });

  return (
    <>
      <ProductVariantMediaDisplayList
        media={media}
        onClickDelete={onClickDelete}
      />
      {error && (
        <SimpleTextAlert
          text={error.message}
          type={SimpleTextAlertType.ERROR}
        />
      )}
      {loading && <LoadingText text="Adding Variant..." />}
    </>
  );
};

export default ProductVariantMediaDisplayListContainer;
