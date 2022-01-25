import React, { useEffect } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import LoadingText from '../UI/loading/LoadingText';
import SelectNative from '../UI/form/SelectNative';
import { INewProductVariantForm } from './AddProductVariant';
import { useGetVariantsQuery } from './graphql/VariantSelector.gql';

interface IVariantSelector {
  field: ControllerRenderProps<INewProductVariantForm, 'variantId'>;
  label: string;
  error: string;
}

const VariantSelector = ({
  field,
  label,
  error,
}: IVariantSelector): JSX.Element => {
  const { loading, error: loadError, data } = useGetVariantsQuery();
  useEffect(() => {
    if (!field.value && data?.variants && data?.variants.length > 0)
      field.onChange({
        target: { value: data?.variants[0].variantId },
      });
  }, [data, field]);

  if (loading) return <LoadingText />;
  if (loadError) return <div className="mt-1 text-red-500">Error loading</div>;

  const { variants } = data;

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
