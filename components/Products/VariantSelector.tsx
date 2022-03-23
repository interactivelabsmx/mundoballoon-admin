import React, { ReactNode } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import SelectNative from '@components/UI/form/SelectNative';
import LoadingText from '@components/UI/loading/LoadingText';
import useAutoSelectFirst from '@hooks/useAutoSelectFirst';
import { Variant } from '@graphql/graphql';
import {
  GetVariantsQuery,
  useGetVariantsQuery,
} from '@graphql/queries/collections/Variants';
import { IProductVariantFormSchema } from './ProductVariantForm';

interface IVariantSelector {
  field: ControllerRenderProps<IProductVariantFormSchema, 'variantId'>;
  label: string;
  error?: string;
  addVariantComponent?: ReactNode;
}

const VariantSelector = ({
  field,
  label,
  error,
  addVariantComponent,
}: IVariantSelector) => {
  const { loading, error: loadError, data } = useGetVariantsQuery();
  useAutoSelectFirst<GetVariantsQuery, IProductVariantFormSchema, 'variantId'>({
    field,
    data,
    list: 'variants',
    prop: 'variantId',
  });

  const variants = data?.variants;
  if (loading || !variants) return <LoadingText />;
  if (loadError) return <div className="mt-1 text-red-500">Error loading</div>;

  return (
    <SelectNative<Variant>
      label={label}
      {...field}
      error={error}
      options={variants as Variant[]}
      optionValue="variantId"
      optionLabel="name"
      addToOptionsComponent={addVariantComponent}
    />
  );
};

export default VariantSelector;
