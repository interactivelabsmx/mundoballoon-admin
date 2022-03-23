import React, { ReactNode } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import SelectNative from '@components/UI/form/SelectNative';
import LoadingText from '@components/UI/loading/LoadingText';
import useAutoSelectFirst from '@hooks/useAutoSelectFirst';
import { VariantValue } from '@graphql/graphql';
import {
  GetVariantValuesQuery,
  useGetVariantValuesQuery,
} from '@graphql/queries/collections/VariantValues';
import { IProductVariantFormSchema } from './ProductVariantForm';

interface IVariantValueSelector {
  field: ControllerRenderProps<IProductVariantFormSchema, 'variantValueId'>;
  label: string;
  error?: string;
  variantId: number;
  addVariantValueComponent?: ReactNode;
}

const VariantValueSelector = ({
  field,
  label,
  error,
  variantId,
  addVariantValueComponent,
}: IVariantValueSelector) => {
  const {
    loading,
    error: loadError,
    data,
  } = useGetVariantValuesQuery({ variables: { variantId } });
  useAutoSelectFirst<
    GetVariantValuesQuery,
    IProductVariantFormSchema,
    'variantValueId'
  >({
    field,
    data,
    list: 'variantValues',
    prop: 'variantValueId',
  });

  const variantValues = data?.variantValues;
  if (loading || !variantValues) return <LoadingText />;
  if (loadError) return <div className="mt-1 text-red-500">Error loading</div>;

  return (
    <SelectNative<VariantValue>
      label={label}
      {...field}
      error={error}
      options={variantValues as VariantValue[]}
      optionValue="variantValueId"
      optionLabel="value"
      addToOptionsComponent={addVariantValueComponent}
    />
  );
};

export default VariantValueSelector;
