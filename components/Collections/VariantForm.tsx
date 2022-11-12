import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import AddVariantsTypeModal from '@containers/Collections/AddVariantsTypeModal';
import VariantsTypeSelector from '@components/Products/VariantsTypeSelector';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import Input from '@components/UI/form/Input';
import { VariantFragment } from '@graphql/fragments/VariantFragment';

export const variantFormSchema = yup
  .object({
    variantId: yup.number().positive(),
    name: yup.string().required(),
    variantTypeId: yup.number().positive().required(),
  })
  .required();

export interface IVariantFormSchema extends Asserts<typeof variantFormSchema> {}

export interface IVariantForm {
  loading: boolean;
  variant?: VariantFragment;
  onSubmit: SubmitHandler<IVariantFormSchema>;
}

const VariantForm = ({ onSubmit, loading, variant }: IVariantForm) => {
  const {
    control: controlVariant,
    register: registerCategory,
    handleSubmit: handleSubmitCategory,
    formState: { errors: errorsVariant },
  } = useForm<IVariantFormSchema>({
    resolver: yupResolver(variantFormSchema),
    defaultValues: {
      ...variantFormSchema.cast(variant, {
        stripUnknown: true,
      }),
    },
  });
  return (
    <form
      onSubmit={(event) => {
        event.stopPropagation();
        event.preventDefault();
        handleSubmitCategory(onSubmit)(event);
      }}
    >
      {variant?.variantId && (
        <input type="hidden" {...registerCategory('variantId')} />
      )}
      <div className="mb-8">
        <Controller
          name="name"
          control={controlVariant}
          render={({ field }) => (
            <Input
              {...field}
              label="Variant Name"
              placeholder="[Size, Color]"
              error={errorsVariant?.name?.message}
            />
          )}
        />
      </div>
      <div className="mb-8">
        <Controller
          name="variantTypeId"
          control={controlVariant}
          render={({ field }) => (
            <VariantsTypeSelector
              field={field}
              label="Variants Type"
              error={errorsVariant?.variantTypeId?.message}
              addVariantComponent={<AddVariantsTypeModal />}
            />
          )}
        />
      </div>
      <div className="flex justify-end">
        <PrimaryButton type="submit" disabled={loading}>
          Save Variant
        </PrimaryButton>
      </div>
    </form>
  );
};

export default VariantForm;
