import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import AddVariantModal from '@containers/Collections/AddVariantModal';
import AddVariantValueModal from '@containers/Collections/AddVariantValueModal';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import SecundaryButton from '@components/UI/buttons/SecundaryButton';
import VariantSelector from './VariantSelector';
import VariantValueSelector from './VariantValueSelector';

export const productVariantFormSchema = yup
  .object({
    productVariantId: yup.number().positive().required(),
    variantId: yup.number().positive().required(),
    variantValueId: yup.number().positive().required(),
  })
  .required();

export interface IProductVariantAddValueFormSchema
  extends Asserts<typeof productVariantFormSchema> {}

export interface IProductVariantAddValueForm {
  loading: boolean;
  productVariantId: number;
  onSubmit: SubmitHandler<IProductVariantAddValueFormSchema>;
  onCancel?: () => void;
}

const ProductVariantAddValueForm = ({
  loading,
  productVariantId,
  onSubmit,
  onCancel,
}: IProductVariantAddValueForm) => {
  const {
    watch: watch2,
    control: control2,
    register: register2,
    unregister: unregister2,
    handleSubmit: handleSubmit2,
    formState: { errors },
  } = useForm<IProductVariantAddValueFormSchema>({
    resolver: yupResolver(productVariantFormSchema),
    defaultValues: { productVariantId },
  });
  useEffect(
    () => () => {
      unregister2('variantId');
      unregister2('variantValueId');
    },
    [unregister2]
  );
  const variantId = watch2('variantId');
  return (
    <form
      className="mb-8 w-full md:w-1/2"
      onSubmit={(event) => {
        event.stopPropagation();
        event.preventDefault();
        handleSubmit2(onSubmit)(event);
      }}
    >
      <input type="hidden" {...register2('productVariantId')} />
      <div className="mb-8">
        <Controller
          name="variantId"
          control={control2}
          render={({ field }) => (
            <VariantSelector
              field={field}
              label="Variants"
              error={errors?.variantId?.message}
              addVariantComponent={<AddVariantModal />}
            />
          )}
        />
      </div>
      {variantId && (
        <div className="mb-8">
          <Controller
            name="variantValueId"
            control={control2}
            render={({ field }) => (
              <VariantValueSelector
                field={field}
                variantId={+variantId}
                label="Variant Values"
                error={errors?.variantValueId?.message}
                addVariantValueComponent={
                  <AddVariantValueModal variantId={+variantId} />
                }
              />
            )}
          />
        </div>
      )}
      <div className="flex justify-end">
        {onCancel && (
          <SecundaryButton
            type="button"
            className="mr-4"
            disabled={loading}
            onClick={onCancel}
          >
            Cancel
          </SecundaryButton>
        )}
        <PrimaryButton type="submit" disabled={loading}>
          Add Variation
        </PrimaryButton>
      </div>
    </form>
  );
};

export default ProductVariantAddValueForm;
