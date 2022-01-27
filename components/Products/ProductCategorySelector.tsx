import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import LoadingText from 'components/UI/loading/LoadingText';
import SelectNative from 'components/UI/form/SelectNative';
import { INewProductForm } from './AddProductForm';
import { useGetProductCategoriesQuery } from './graphql/ProductCategorySelector.gql';

interface IProductCategorySelector {
  field: ControllerRenderProps<INewProductForm, 'productCategoryId'>;
  label: string;
  error: string;
}

const ProductCategorySelector = ({
  field,
  label,
  error,
}: IProductCategorySelector): JSX.Element => {
  const { loading, error: loadError, data } = useGetProductCategoriesQuery();

  if (loading) return <LoadingText />;
  if (loadError) return <div className="mt-1 text-red-500">Error loading</div>;

  const { productCategories } = data;

  return (
    <SelectNative
      label={label}
      {...field}
      error={error}
      options={productCategories}
      optionValue="productCategoryId"
      optionLabel="name"
    />
  );
};

export default ProductCategorySelector;
