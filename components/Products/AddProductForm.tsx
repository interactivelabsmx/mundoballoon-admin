import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import Input from '@material-tailwind/react/Input';
import Button from '@material-tailwind/react/Button';
import ProductCategorySelector from './ProductCategorySelector';

const newProductSchema = yup
  .object({
    name: yup.string().required(),
    description: yup.string().required(),
    productCategoryId: yup.number().positive().required(),
    price: yup.number().positive().required(),
  })
  .required();

interface IFormInput extends Asserts<typeof newProductSchema> {}

const AddProductForm = (): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(newProductSchema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
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
              placeholder="Product Name"
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
              placeholder="Description"
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
              placeholder="Price"
              error={errors?.price?.message}
              type="number"
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
              placeholder="Product Category"
              error={errors?.productCategoryId?.message}
            />
          )}
        />
      </div>
      <div className="flex justify-end">
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};

export default AddProductForm;
