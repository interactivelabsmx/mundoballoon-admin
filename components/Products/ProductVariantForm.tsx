import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import Input from '@components/UI/form/Input';
import { Product } from '@graphql/graphql';
import VariantSelector from './VariantSelector';
import VariantValueSelector from './VariantValueSelector';

export const productVariantFormSchema = yup
  .object({
    productVariantId: yup.number().optional(),
    sku: yup.string().required(),
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().positive().required(),
    productId: yup.number().positive().required(),
    variantId: yup.number().positive().optional(),
    variantValueId: yup.number().positive().required(),
  })
  .required();

export interface IProductVariantFormSchema
  extends Asserts<typeof productVariantFormSchema> {}

export interface IProductVariantForm {
  product: Product;
  loading: boolean;
  onSubmit: SubmitHandler<IProductVariantFormSchema>;
}

const ProductVariantForm = ({
  product,
  onSubmit,
  loading,
}: IProductVariantForm) => {
  const {
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProductVariantFormSchema>({
    resolver: yupResolver(productVariantFormSchema),
    defaultValues: {
      productId: product.productId,
      name: product.name,
      description: product.description,
      price: product.price,
    },
  });

  const variantId = watch('variantId');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register('productId')} />
      <div className="mb-8">
        <Controller
          name="sku"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              label="Product SKU"
              placeholder="The unique identifier for inventory"
              error={errors?.sku?.message}
            />
          )}
        />
      </div>
      <div className="mb-8">
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              label="Product Name"
              placeholder="Some nice product"
              error={errors?.name?.message}
            />
          )}
        />
      </div>
      <div className="mb-8">
        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              label="Description"
              placeholder="Some nice product"
              error={errors?.description?.message}
            />
          )}
        />
      </div>
      <div className="mb-8">
        <Controller
          name="price"
          control={control}
          defaultValue={undefined}
          render={({ field }) => (
            <Input
              {...field}
              label="Price"
              type="number"
              placeholder="1.0"
              leading="$"
              error={errors?.price?.message}
            />
          )}
        />
      </div>
      <div className="mb-8">
        <Controller
          name="variantId"
          control={control}
          defaultValue={undefined}
          render={({ field }) => (
            <VariantSelector
              field={field}
              label="Variants"
              error={errors?.variantId?.message}
            />
          )}
        />
      </div>
      {variantId && (
        <div className="mb-8">
          <Controller
            name="variantValueId"
            control={control}
            defaultValue={undefined}
            render={({ field }) => (
              <VariantValueSelector
                field={field}
                variantId={variantId}
                label="Variant Values"
                error={errors?.variantValueId?.message}
              />
            )}
          />
        </div>
      )}
      <div className="flex justify-end">
        <PrimaryButton type="submit" disabled={loading}>
          Save
        </PrimaryButton>
      </div>
    </form>
  );
};

export default ProductVariantForm;
