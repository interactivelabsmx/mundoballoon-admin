import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import SelectNative from '@components/UI/form/SelectNative';
import LoadingText from '@components/UI/loading/LoadingText';
import useAutoSelectFirst from '@hooks/useAutoSelectFirst';
import { ProductCategory } from '@graphql/graphql';
import {
  GetProductCategoriesQuery,
  useGetProductCategoriesQuery,
} from '@graphql/queries/collections/productCategories';
import { INewProductForm } from './AddProductForm';

interface IProductCategorySelector {
  field: ControllerRenderProps<INewProductForm, 'productCategoryId'>;
  label: string;
  error?: string;
}

const ProductCategorySelector = ({
  field,
  label,
  error,
}: IProductCategorySelector): JSX.Element => {
  const { loading, error: loadError, data } = useGetProductCategoriesQuery();
  useAutoSelectFirst<
    GetProductCategoriesQuery,
    INewProductForm,
    'productCategoryId'
  >({
    field,
    data,
    list: 'productCategories',
    prop: 'productCategoryId',
  });
  const productCategories = data?.productCategories;
  if (loading || !productCategories) return <LoadingText />;
  if (loadError) return <div className="mt-1 text-red-500">Error loading</div>;
  return (
    <SelectNative<ProductCategory>
      label={label}
      {...field}
      error={error}
      options={productCategories as ProductCategory[]}
      optionValue="productCategoryId"
      optionLabel="name"
    />
  );
};

export default ProductCategorySelector;
