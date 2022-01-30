import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import SelectNative from '@components/UI/form/SelectNative';
import LoadingText from '@components/UI/loading/LoadingText';
import useAutoSelectFirst from '@hooks/useAutoSelectFirst';
import {
  GetVariantsQuery,
  useGetVariantsQuery,
} from '@graphql/queries/collections/variants';
import { INewProductVariantForm } from './AddProductVariant';

interface IVariantSelector {
  field: ControllerRenderProps<INewProductVariantForm, 'variantId'>;
  label: string;
  error?: string;
}

const VariantSelector = ({
  field,
  label,
  error,
}: IVariantSelector): JSX.Element => {
  const { loading, error: loadError, data } = useGetVariantsQuery();
  useAutoSelectFirst<GetVariantsQuery, INewProductVariantForm, 'variantId'>({
    field,
    data,
    list: 'variants',
    prop: 'variantId',
  });

  const variants = data?.variants;
  if (loading || !variants) return <LoadingText />;
  if (loadError) return <div className="mt-1 text-red-500">Error loading</div>;

  return (
    <SelectNative
      label={label}
      {...field}
      error={error}
      options={variants}
      optionValue="variantId"
      optionLabel="name"
    />
  );
};

export default VariantSelector;
