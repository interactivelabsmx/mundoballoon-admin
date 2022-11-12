import React, { ReactNode } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { IVariantFormSchema } from '@components/Collections/VariantForm';
import SelectNative from '@components/UI/form/SelectNative';
import LoadingText from '@components/UI/loading/LoadingText';
import useAutoSelectFirst from '@hooks/useAutoSelectFirst';
import { VariantsType } from '@graphql/graphql';
import {
  GetVariantsTypeQuery,
  useGetVariantsTypeQuery,
} from '@graphql/queries/collections/variantsType';

interface IVariantsTypeSelector {
  field: ControllerRenderProps<IVariantFormSchema, 'variantTypeId'>;
  label: string;
  error?: string;
  addVariantComponent?: ReactNode;
}

const VariantsTypeSelector = ({
  field,
  label,
  error,
  addVariantComponent,
}: IVariantsTypeSelector) => {
  const { loading, error: loadError, data } = useGetVariantsTypeQuery();
  useAutoSelectFirst<GetVariantsTypeQuery, IVariantFormSchema, 'variantTypeId'>(
    {
      field,
      data,
      list: 'variantsType',
      prop: 'variantTypeId',
    }
  );

  const variants = data?.variantsType;
  if (loading || !variants) return <LoadingText />;
  if (loadError) return <div className="mt-1 text-red-500">Error loading</div>;

  return (
    <SelectNative<VariantsType>
      label={label}
      {...field}
      error={error}
      options={variants as VariantsType[]}
      optionValue="variantTypeId"
      optionLabel="variantType"
      addToOptionsComponent={addVariantComponent}
    />
  );
};

export default VariantsTypeSelector;
