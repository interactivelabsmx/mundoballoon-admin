import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import Input from '@components/UI/form/Input';
import { VariantFragment } from '@graphql/fragments/VariantFragment';

export const variantFormSchema = yup
  .object({
    variantId: yup.number().positive(),
    name: yup.string().required(),
    type: yup.string().required(),
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
    control: controlCategory,
    register: registerCategory,
    handleSubmit: handleSubmitCategory,
    formState: { errors: errors1 },
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
      // This is a hack for react-hook-form when rendering a form inside another
      // even if using portal the event bubbles to the parent component tree not DOM tree.
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
          control={controlCategory}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              label="Variant Name"
              placeholder="[Size, Color]"
              error={errors1?.name?.message}
            />
          )}
        />
      </div>
      <div className="mb-8">
        <Controller
          name="type"
          control={controlCategory}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              label="Type"
              placeholder="[number, text]"
              error={errors1?.type?.message}
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
