import classNames from '@lib/utils/classnames';
import DeleteIconButton from '@components/UI/buttons/DeleteIconButton';
import { VariantValuesFragment } from '@graphql/fragments/ProductVariantValues';

const TypeToColor = {
  string: 'bg-green-400',
  number: 'bg-purple-400',
  boolean: 'bg-cyan-400',
};

interface IProductVariantValueCard {
  variantValue: VariantValuesFragment;
  onClickDelete: (variantId: number, variantValueId: number) => void;
}

const ProductVariantValueCard = ({
  variantValue,
  onClickDelete,
}: IProductVariantValueCard) => (
  <li
    key={variantValue.variantValueId}
    className="col-span-1 flex shadow-sm rounded-md"
  >
    <div
      className={classNames(
        // @ts-expect-error this is an enum on mysql I need to translate to enum
        TypeToColor[variantValue.variant?.type || 'string'],
        'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md capitalize'
      )}
    >
      {variantValue.variant?.type.variantType}
    </div>
    <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
      <div className="flex-1 px-4 py-2 truncate">
        <span className="text-gray-900 font-medium hover:text-gray-600">
          {variantValue.variantValue?.value}
        </span>
        <p className="text-gray-500 text-sm">{variantValue.variant?.name}</p>
      </div>
      <div className="flex-shrink-0 pr-2">
        <DeleteIconButton
          aria-label="Delete Variation Value"
          onClick={() =>
            onClickDelete(variantValue.variantId, variantValue.variantValueId)
          }
        />
      </div>
    </div>
  </li>
);

export default ProductVariantValueCard;
