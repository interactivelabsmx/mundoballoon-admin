import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import SelectNative from '@components/UI/form/SelectNative';
import LoadingText from '@components/UI/loading/LoadingText';
import useAutoSelectFirst from '@hooks/useAutoSelectFirst';
import { ProductCategory } from '@graphql/graphql';
import {
  GetProductCategoriesQuery,
  useGetProductCategoriesQuery,
} from '@graphql/queries/collections/ProductCategories';
import { IProductFormSchema } from './ProductForm';

interface IProductCategorySelector {
  field: ControllerRenderProps<IProductFormSchema, 'productCategoryId'>;
  label: string;
  error?: string;
}

const ProductCategorySelector = ({
  field,
  label,
  error,
}: IProductCategorySelector) => {
  const { loading, error: loadError, data } = useGetProductCategoriesQuery();
  useAutoSelectFirst<
    GetProductCategoriesQuery,
    IProductFormSchema,
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
