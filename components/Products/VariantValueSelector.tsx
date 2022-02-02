import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import SelectNative from '@components/UI/form/SelectNative';
import LoadingText from '@components/UI/loading/LoadingText';
import useAutoSelectFirst from '@hooks/useAutoSelectFirst';
import { VariantValue } from '@graphql/graphql';
import {
  GetVariantValuesQuery,
  useGetVariantValuesQuery,
} from '@graphql/queries/collections/variantValues';
import { INewProductVariantForm } from './AddProductVariant';

interface IVariantValueSelector {
  field: ControllerRenderProps<INewProductVariantForm, 'variantValueId'>;
  label: string;
  error?: string;
  variantId: number;
}

const VariantValueSelector = ({
  field,
  label,
  error,
  variantId,
}: IVariantValueSelector): JSX.Element => {
  const {
    loading,
    error: loadError,
    data,
  } = useGetVariantValuesQuery({ variables: { variantId } });
  useAutoSelectFirst<
    GetVariantValuesQuery,
    INewProductVariantForm,
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
    />
  );
};

export default VariantValueSelector;
