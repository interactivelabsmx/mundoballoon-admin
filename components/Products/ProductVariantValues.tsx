import { PlusCircleIcon } from '@heroicons/react/outline';
import { useCallback, useState } from 'react';
import AddProductVariantValueContainer from '@containers/Products/AddProductVariantValueContainer';
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
      {variantValues.map((vv) => (
        <div key={vv.variantValueId}>
          <div>{vv.variant?.name}</div>
          <div>{vv.variantValue?.value}</div>
        </div>
      ))}
      {addVariant ? (
        <AddProductVariantValueContainer
          onCancel={onCancelClick}
          productVariantId={productVariantId}
        />
      ) : (
        <PrimaryButton type="button" onClick={onAddVariantClick}>
          <PlusCircleIcon className="h-6 w-6 mr-2" aria-hidden="true" />
          Add Variants
        </PrimaryButton>
      )}
    </>
  );
};

export default ProductVariantValues;
