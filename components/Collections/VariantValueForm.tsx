import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import Input from '@components/UI/form/Input';
import { VariantValueFragment } from '@graphql/fragments/VariantValueFragment';

export const variantValueFormSchema = yup
  .object({
    variantValueId: yup.number().positive(),
    variantId: yup.number().positive().required(),
    value: yup.string().required(),
  })
  .required();

export interface IVariantValueFormSchema
  extends Asserts<typeof variantValueFormSchema> {}

export interface IVariantValueForm {
  loading: boolean;
  variantValue?: VariantValueFragment;
  onSubmit: SubmitHandler<IVariantValueFormSchema>;
  variantId: number;
}

const VariantValueForm = ({
  onSubmit,
  loading,
  variantValue,
  variantId,
}: IVariantValueForm) => {
  const {
    control: controlCategory,
    register: registerCategory,
    handleSubmit: handleSubmitCategory,
    formState: { errors: errors1 },
  } = useForm<IVariantValueFormSchema>({
    resolver: yupResolver(variantValueFormSchema),
    defaultValues: {
      ...variantValueFormSchema.cast(variantValue, {
        stripUnknown: true,
      }),
      variantId,
    },
  });
  return (
    <form
      // This is a hack for react-hook-form when rendering a form inside another
      // even if using portal the event bubbles to the parent component tree not DOM tree.
      onSubmit={(event) => {
        event.stopPropagation();
        event.preventDefault();
        handleSubmitCategory(onSubmit)(event);
      }}
    >
      {variantValue?.variantValueId && (
        <input type="hidden" {...registerCategory('variantValueId')} />
      )}
      <input type="hidden" {...registerCategory('variantId')} />
      <div className="mb-8">
        <Controller
          name="value"
          control={controlCategory}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              label="Type"
              placeholder="[rojo, grande]"
              error={errors1?.value?.message}
            />
          )}
        />
      </div>
      <div className="flex justify-end">
        <PrimaryButton type="submit" disabled={loading}>
          Save Variant Value
        </PrimaryButton>
      </div>
    </form>
  );
};

export default VariantValueForm;
