import { PlusCircleIcon } from '@heroicons/react/outline';
import { useCallback, useState } from 'react';
import AddProductVariantValueContainer from '@containers/Products/AddProductVariantValueContainer';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import { VariantValuesFragment } from '@graphql/fragments/ProductVariantValues';
import ProductVariantValuesList from './ProductVariantValuesList';

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
      <div className="pb-4">
        <p>Variant Values</p>
        <ProductVariantValuesList variantValues={variantValues} />
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
