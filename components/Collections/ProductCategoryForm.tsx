import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import Input from '@components/UI/form/Input';
import { CategoryFragment } from '@graphql/fragments/CategoryFragment';

export const productCategoryFormSchema = yup
  .object({
    productCategoryId: yup.number().positive(),
    name: yup.string().required(),
    description: yup.string().required(),
  })
  .required();

export interface IProductCategoryFormSchema
  extends Asserts<typeof productCategoryFormSchema> {}

export interface IProductCategoryForm {
  loading: boolean;
  productCategory?: CategoryFragment;
  onSubmit: SubmitHandler<IProductCategoryFormSchema>;
}

const ProductCategoryForm = ({
  onSubmit,
  loading,
  productCategory,
}: IProductCategoryForm) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProductCategoryFormSchema>({
    resolver: yupResolver(productCategoryFormSchema),
    defaultValues: {
      ...productCategoryFormSchema.cast(productCategory, {
        stripUnknown: true,
      }),
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {productCategory?.productCategoryId && (
        <input type="hidden" {...register('productCategoryId')} />
      )}
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
      <div className="flex justify-end">
        <PrimaryButton type="submit" disabled={loading}>
          Save
        </PrimaryButton>
      </div>
    </form>
  );
};

export default ProductCategoryForm;
