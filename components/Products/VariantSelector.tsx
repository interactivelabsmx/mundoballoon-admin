import React from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import LoadingText from 'components/UI/loading/LoadingText';
import SelectNative from 'components/UI/form/SelectNative';
import useAutoSelectFirst from 'hooks/useAutoSelectFirst';
import { INewProductVariantForm } from './AddProductVariant';
import {
  GetVariantsQuery,
  useGetVariantsQuery,
} from './graphql/VariantSelector.gql';

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
  useAutoSelectFirst<GetVariantsQuery, INewProductVariantForm, 'variantId'>({
    field,
    data,
    list: 'variants',
    prop: 'variantId',
  });

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
