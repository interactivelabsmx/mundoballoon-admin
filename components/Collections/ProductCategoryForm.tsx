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
  onSubmitCategoryForm: SubmitHandler<IProductCategoryFormSchema>;
}

const ProductCategoryForm = ({
  onSubmitCategoryForm,
  loading,
  productCategory,
}: IProductCategoryForm) => {
  const {
    control: control1,
    register: register1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },
  } = useForm<IProductCategoryFormSchema>({
    resolver: yupResolver(productCategoryFormSchema),
    defaultValues: {
      ...productCategoryFormSchema.cast(productCategory, {
        stripUnknown: true,
      }),
    },
  });
  return (
    <form key="1" onSubmit={handleSubmit1(onSubmitCategoryForm)}>
      {productCategory?.productCategoryId && (
        <input type="hidden" {...register1('productCategoryId')} />
      )}
      <div className="mb-8">
        <Controller
          name="name"
          control={control1}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              label="Category Name"
              placeholder="Some nice category"
              error={errors1?.name?.message}
            />
          )}
        />
      </div>
      <div className="mb-8">
        <Controller
          name="description"
          control={control1}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              label="Category Description"
              placeholder="This category is super cool"
              error={errors1?.description?.message}
            />
          )}
        />
      </div>
      <div className="flex justify-end">
        <PrimaryButton type="button" disabled={loading}>
          Save Category
        </PrimaryButton>
      </div>
    </form>
  );
};

export default ProductCategoryForm;
