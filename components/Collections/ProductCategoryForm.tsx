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
    control: controlCategory,
    register: registerCategory,
    handleSubmit: handleSubmitCategory,
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
    <form
      // This is a hack for react-hook-form when rendering a form inside another
      // even if using portal the event bubbles to the parent component tree not DOM tree.
      onSubmit={(event) => {
        event.stopPropagation();
        event.preventDefault();
        handleSubmitCategory(onSubmit)(event);
      }}
    >
      {productCategory?.productCategoryId && (
        <input type="hidden" {...registerCategory('productCategoryId')} />
      )}
      <div className="mb-8">
        <Controller
          name="name"
          control={controlCategory}
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
          control={controlCategory}
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
        <PrimaryButton type="submit" disabled={loading}>
          Save Category
        </PrimaryButton>
      </div>
    </form>
  );
};

export default ProductCategoryForm;
