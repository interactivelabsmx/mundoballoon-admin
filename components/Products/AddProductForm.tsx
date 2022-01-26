import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import { useRouter } from 'next/router';
import ProductCategorySelector from './ProductCategorySelector';
import Input from '../UI/form/Input';
import PrimaryButton from '../UI/buttons/PrimaryButton';
import LoadingText from '../UI/loading/LoadingText';
import SimpleTextAlert from '../UI/alerts/SimpleTextAlert';
import { SimpleTextAlertType } from '../UI/alerts/AlertConfigTypes';
import { useCreateProductMutation } from './graphql/AddProductForm.gql';

export const newProductSchema = yup
  .object({
    name: yup.string().required(),
    description: yup.string().required(),
    productCategoryId: yup.number().positive().required(),
    price: yup.number().positive().required(),
  })
  .required();

export interface INewProductForm extends Asserts<typeof newProductSchema> {}

const AddProductForm = (): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<INewProductForm>({
    resolver: yupResolver(newProductSchema),
  });

  const { push } = useRouter();
  const [createProduct, { loading, error }] = useCreateProductMutation();
  const onSubmit: SubmitHandler<INewProductForm> = async (data) => {
    const result = await createProduct({
      variables: {
        createProductPayload: { ...data },
      },
    });
    if (!result.errors) push('/admin/products');
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
      {error && (
        <SimpleTextAlert
          text={error.message}
          type={SimpleTextAlertType.ERROR}
        />
      )}
      {loading && <LoadingText text="Creating product..." />}
      <div className="flex justify-end">
        <PrimaryButton type="submit" disabled={loading}>
          Save
        </PrimaryButton>
      </div>
    </form>
  );
};

export default AddProductForm;
