import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { ControllerRenderProps } from 'react-hook-form';
import LoadingText from '../UI/LoadingText';

export const GET_PRODUCT_CATEGORIES = gql`
  query {
    productCategories {
      productCategoryId
      name
    }
  }
`;

interface ProductCategorySelectorProps {
  field: ControllerRenderProps;
  placeholder: string;
  error: string;
}

const ProductCategorySelector = ({
  field,
  placeholder,
  error,
}: ProductCategorySelectorProps): JSX.Element => {
  const { loading, error: loadError, data } = useQuery(GET_PRODUCT_CATEGORIES);

  if (loadError) return <div className="mt-1 text-red-500">Error loading</div>;

  let productCategories = [];
  if (!loading) productCategories = data.productCategories;

  return (
    <>
      <label htmlFor={field.name}>{placeholder}</label>
      {loading ? (
        <LoadingText />
      ) : (
        <select {...field} className="w-full">
          <option value={-1}>Select {placeholder}</option>
          {productCategories.map((pc) => (
            <option key={pc.productCategoryId} value={pc.productCategoryId}>
              {pc.name}
            </option>
          ))}
        </select>
      )}
      {error && (
        <span className="block mt-1 text-xs text-red-500">{error}</span>
      )}
    </>
  );
};

export default ProductCategorySelector;
