import React from 'react';
import ProductVariantValuesList from '@components/Products/ProductVariantValuesList';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';
import LoadingText from '@components/UI/loading/LoadingText';
import { VariantValuesFragment } from '@graphql/fragments/ProductVariantValues';
import { useDeleteProductVariantValueMutation } from '@graphql/mutations/products/DeleteProductVariantValue';

interface IProductVariantValuesListContainer {
  productVariantId: number;
  variantValues: VariantValuesFragment[];
}

const ProductVariantValuesListContainer = ({
  productVariantId,
  variantValues,
}: IProductVariantValuesListContainer) => {
  const [deleteProductVariantValue, { loading, error }] =
    useDeleteProductVariantValueMutation();
  const onClickDelete = (variantId: number, variantValueId: number) =>
    deleteProductVariantValue({
      variables: { productVariantId, variantId, variantValueId },
    });

  return (
    <>
      <ProductVariantValuesList
        variantValues={variantValues}
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

export default ProductVariantValuesListContainer;
