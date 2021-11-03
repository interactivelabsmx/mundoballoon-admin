import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { ControllerRenderProps } from 'react-hook-form';
import LoadingText from '../UI/LoadingText';
import SelectNative from '../UI/form/SelectNative';

export const GET_PRODUCT_CATEGORIES = gql`
  query {
    productCategories {
      productCategoryId
      name
    }
  }
`;

interface IProductCategorySelector {
  field: ControllerRenderProps;
  label: string;
  error: string;
}

const ProductCategorySelector = ({
  field,
  label,
  error,
}: IProductCategorySelector): JSX.Element => {
  const { loading, error: loadError, data } = useQuery(GET_PRODUCT_CATEGORIES);

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
