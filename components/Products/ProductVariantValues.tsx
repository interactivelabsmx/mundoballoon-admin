import { PlusCircleIcon } from '@heroicons/react/outline';
import { useCallback, useState } from 'react';
import classNames from '@lib/utils/classnames';
import AddProductVariantValueContainer from '@containers/Products/AddProductVariantValueContainer';
import DeleteIconButton from '@components/UI/buttons/DeleteIconButton';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import { VariantValuesFragment } from '@graphql/fragments/ProductVariantValues';

export interface IProductVariantValues {
  productVariantId: number;
  variantValues: VariantValuesFragment[];
}

const TypeToColor = {
  string: 'bg-yellow-500',
  number: 'bg-yellow-600',
  boolean: 'bg-yellow-800',
};

const ProductVariantValues = ({
  productVariantId,
  variantValues,
}: IProductVariantValues) => {
  const [addVariant, setAddVariant] = useState(false);
  const onAddVariantClick = useCallback(() => setAddVariant(true), []);
  const onCancelClick = useCallback(() => setAddVariant(false), []);
  return (
    <>
      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {variantValues.map((vv) => (
          <li
            key={vv.variantValueId}
            className="col-span-1 flex shadow-sm rounded-md"
          >
            <div
              className={classNames(
                // @ts-expect-error this is an enum on mysql I need to translate to enum
                TypeToColor[vv.variant?.type || 'string'],
                'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md capitalize'
              )}
            >
              {vv.variant?.type}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 truncate">
                <span className="text-gray-900 font-medium hover:text-gray-600">
                  {vv.variantValue?.value}
                </span>
                <p className="text-gray-500 text-sm">{vv.variant?.name}</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <DeleteIconButton aria-label="Delete Variation Value" />
              </div>
            </div>
          </li>
        ))}
      </ul>
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
