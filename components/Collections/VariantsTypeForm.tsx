import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import Input from '@components/UI/form/Input';
import { VariantsTypeFragment } from '@graphql/fragments/VariantsTypeFragment';

export const variantsTypeFormSchema = yup
  .object({
    variantTypeId: yup.number().positive(),
    variantType: yup.string().required(),
  })
  .required();

export interface IVariantsTypeFormSchema
  extends Asserts<typeof variantsTypeFormSchema> {}

export interface IVariantTypeForm {
  loading: boolean;
  variantsType?: VariantsTypeFragment;
  onSubmit: SubmitHandler<IVariantsTypeFormSchema>;
}

const VariantTypeForm = ({
  onSubmit,
  loading,
  variantsType,
}: IVariantTypeForm) => {
  const {
    control: controlVariantsType,
    register: registerCategory,
    handleSubmit: handleSubmitCategory,
    formState: { errors: errorsVariantsType },
  } = useForm<IVariantsTypeFormSchema>({
    resolver: yupResolver(variantsTypeFormSchema),
    defaultValues: {
      ...variantsTypeFormSchema.cast(variantsType, {
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
      {variantsType?.variantTypeId && (
        <input type="hidden" {...registerCategory('variantTypeId')} />
      )}
      <div className="mb-8">
        <Controller
          name="variantType"
          control={controlVariantsType}
          render={({ field }) => (
            <Input
              {...field}
              label="Variant Type"
              placeholder="[Number, Text]"
              error={errorsVariantsType?.variantType?.message}
            />
          )}
        />
      </div>
      <div className="flex justify-end">
        <PrimaryButton type="submit" disabled={loading}>
          Save Variant Type
        </PrimaryButton>
      </div>
    </form>
  );
};

export default VariantTypeForm;
