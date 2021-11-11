import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import ProductCategorySelector from './ProductCategorySelector';
import Input from '../UI/form/Input';
import PrimaryButton from '../UI/buttons/PrimaryButton';

export const newProductSchema = yup
  .object({
    name: yup.string().required(),
    description: yup.string().required(),
    productCategoryId: yup.number().positive().required(),
    price: yup.number().positive().required(),
  })
  .required();

interface INewProductForm extends Asserts<typeof newProductSchema> {}

const AddProductForm = (): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<INewProductForm>({
    resolver: yupResolver(newProductSchema),
  });

  const onSubmit: SubmitHandler<INewProductForm> = () => {
    // console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          name="productCategoryId"
          control={control}
          defaultValue={undefined}
          render={({ field }) => (
            <ProductCategorySelector
              field={field}
              label="Product Category"
              error={errors?.productCategoryId?.message}
            />
          )}
        />
      </div>
      <div className="flex justify-end">
        <PrimaryButton type="submit">Save</PrimaryButton>
      </div>
    </form>
  );
};

export default AddProductForm;
