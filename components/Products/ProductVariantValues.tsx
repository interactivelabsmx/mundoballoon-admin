import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useCallback, useState } from 'react';
import AddProductVariantValueContainer from '@containers/Products/AddProductVariantValueContainer';
import ProductVariantValuesListContainer from '@containers/Products/ProductVariantValuesListContainer';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import { VariantValuesFragment } from '@graphql/fragments/ProductVariantValues';

export interface IProductVariantValues {
  productVariantId: number;
  variantValues: VariantValuesFragment[];
}

const ProductVariantValues = ({
  productVariantId,
  variantValues,
}: IProductVariantValues) => {
  const [addVariant, setAddVariant] = useState(false);
  const onAddVariantClick = useCallback(() => setAddVariant(true), []);
  const onCancelClick = useCallback(() => setAddVariant(false), []);
  return (
    <>
      <div className="pb-4 pt-4 text-lg">
        <h3>Variant Values</h3>
        <ProductVariantValuesListContainer
          variantValues={variantValues}
          productVariantId={productVariantId}
        />
      </div>
      {addVariant ? (
        <AddProductVariantValueContainer
          onCancel={onCancelClick}
          productVariantId={productVariantId}
        />
      ) : (
        <PrimaryButton type="button" onClick={onAddVariantClick}>
          <PlusCircleIcon className="h-6 w-6 mr-2" aria-hidden="true" />
          Add Variant Value
        </PrimaryButton>
      )}
    </>
  );
};

export default ProductVariantValues;
