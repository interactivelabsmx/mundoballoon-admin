import React, { useEffect } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import LoadingText from '../UI/loading/LoadingText';
import SelectNative from '../UI/form/SelectNative';
import { INewProductVariantForm } from './AddProductVariant';
import { useGetVariantValuesQuery } from './VariantValueSelector.graphql';

interface IVariantValueSelector {
  field: ControllerRenderProps<INewProductVariantForm, 'variantValueId'>;
  label: string;
  error: string;
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
  useEffect(() => {
    if (!field.value && data?.variantValues && data?.variantValues.length > 0)
      field.onChange({
        target: { value: data?.variantValues[0].variantValueId },
      });
  }, [data, field]);

  if (loading) return <LoadingText />;
  if (loadError) return <div className="mt-1 text-red-500">Error loading</div>;

  const { variantValues } = data;

  return (
    <SelectNative
      label={label}
      {...field}
      error={error}
      options={variantValues}
      optionValue="variantValueId"
      optionLabel="value"
    />
  );
};

export default VariantValueSelector;
