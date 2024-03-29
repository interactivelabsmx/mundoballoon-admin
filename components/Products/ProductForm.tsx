import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import AddProductCategoryModal from '@containers/Collections/AddProductCategoryModal';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import Input from '@components/UI/form/Input';
import { ProductEntityFragment } from '@graphql/fragments/ProductEntityFragment';
import ProductCategorySelector from './ProductCategorySelector';

export const productFormSchema = yup
  .object({
    productId: yup.number().optional(),
    name: yup.string().required(),
    description: yup.string().required(),
    productCategoryId: yup.number().positive().required(),
    price: yup.number().positive().required(),
  })
  .required();

export interface IProductFormSchema extends Asserts<typeof productFormSchema> {}

export interface IProductForm {
  loading: boolean;
  product?: ProductEntityFragment;
  onSubmit: SubmitHandler<IProductFormSchema>;
}

const ProductForm = ({ onSubmit, loading, product }: IProductForm) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProductFormSchema>({
    resolver: yupResolver(productFormSchema),
    defaultValues: {
      ...productFormSchema.cast(product, { stripUnknown: true }),
    },
  });
  return (
    <form key="productForm" onSubmit={handleSubmit(onSubmit)}>
      {product?.productId && <input type="hidden" {...register('productId')} />}
      <div className="mb-8">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Product Name"
              placeholder="Nice product"
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
              placeholder="Some nice product that is super cool"
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
      <div className="mb-8">
        <Controller
          name="productCategoryId"
          control={control}
          render={({ field }) => (
            <ProductCategorySelector
              field={field}
              label="Product Category"
              error={errors?.productCategoryId?.message}
              addProductCategoryComponent={<AddProductCategoryModal />}
            />
          )}
        />
      </div>
      <div className="flex justify-end">
        <PrimaryButton type="submit" disabled={loading}>
          Save Product
        </PrimaryButton>
      </div>
    </form>
  );
};

export default ProductForm;
