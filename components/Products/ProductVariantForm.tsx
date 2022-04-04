import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import Input from '@components/UI/form/Input';
import { ProductEntityFragment } from '@graphql/fragments/ProductEntityFragment';
import { ProductVariantDetailsFragment } from '@graphql/fragments/ProductVariantDetailsFragment';
import ProductVariantValues from './ProductVariantValues';

export const productVariantFormSchema = yup
  .object({
    productVariantId: yup.number().optional(),
    sku: yup.string().required(),
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().positive().required(),
    productId: yup.number().positive().required(),
  })
  .required();

export interface IProductVariantFormSchema
  extends Asserts<typeof productVariantFormSchema> {}

export interface IProductVariantForm {
  product: ProductVariantDetailsFragment | ProductEntityFragment;
  loading: boolean;
  onSubmit: SubmitHandler<IProductVariantFormSchema>;
}

const ProductVariantForm = ({
  product,
  onSubmit,
  loading,
}: IProductVariantForm) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProductVariantFormSchema>({
    resolver: yupResolver(productVariantFormSchema),
    defaultValues: {
      ...productVariantFormSchema.cast(product, { stripUnknown: true }),
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {'productVariantId' in product && (
          <input type="hidden" {...register('productVariantId')} />
        )}
        <input type="hidden" {...register('productId')} />
        <div className="mb-8">
          <Controller
            name="sku"
            control={control}
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
        <div className="flex justify-end">
          <PrimaryButton type="submit" disabled={loading}>
            Save Product Variation
          </PrimaryButton>
        </div>
      </form>
      {'variantValues' in product && product.variantValues && (
        <ProductVariantValues
          productVariantId={product.productVariantId || 0}
          variantValues={product.variantValues}
        />
      )}
    </>
  );
};

export default ProductVariantForm;
