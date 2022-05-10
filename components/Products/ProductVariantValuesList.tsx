import { VariantValuesFragment } from '@graphql/fragments/ProductVariantValues';
import ProductVariantValueCard from './ProductVariantValueCard';

interface IProductVariantValuesList {
  variantValues: VariantValuesFragment[];
}

const ProductVariantValuesList = ({
  variantValues,
}: IProductVariantValuesList) => (
  <ul
    role="list"
    className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
  >
    {variantValues.map((vv) => (
      <ProductVariantValueCard variantValue={vv} key={vv.variantValueId} />
    ))}
  </ul>
);

export default ProductVariantValuesList;
