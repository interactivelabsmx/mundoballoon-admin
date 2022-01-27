import { gql, useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Product } from 'types/graphql';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import Input from '@components/UI/form/Input';
import LoadingText from '@components/UI/loading/LoadingText';
import VariantSelector from './VariantSelector';
import VariantValueSelector from './VariantValueSelector';

const CREATE_PRODUCT = gql`
  mutation CreateProductVariant(
    $createProductVariantPayload: CreateProductVariantRequestInput!
  ) {
    createProductVariant(input: $createProductVariantPayload) {
      productVariant {
        productVariantId
      }
    }
  }
`;

export const newProductVariantSchema = yup
  .object({
    sku: yup.string().required(),
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().positive().required(),
    productId: yup.number().positive().required(),
    variantId: yup.number().positive().required(),
    variantValueId: yup.number().positive().required(),
  })
  .required();

export interface INewProductVariantForm
  extends Asserts<typeof newProductVariantSchema> {}

export interface IAddProductVariant {
  product: Product;
}

const AddProductVariant = ({ product }: IAddProductVariant): JSX.Element => {
  const {
    watch,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewProductVariantForm>({
    resolver: yupResolver(newProductVariantSchema),
    defaultValues: {
      productId: product.productId,
      name: product.name,
      description: product.description,
      price: product.price,
    },
  });

  const { push } = useRouter();
  const [createProduct, { loading, error }] = useMutation(CREATE_PRODUCT);
  const onSubmit: SubmitHandler<INewProductVariantForm> = async (data) => {
    const result = await createProduct({
      variables: {
        createProductPayload: { ...data },
      },
    });
    if (!result.errors) push('/admin/products');
  };

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
      {error && (
        <SimpleTextAlert
          text={error.message}
          type={SimpleTextAlertType.ERROR}
        />
      )}
      {loading && <LoadingText text="Creating product variant..." />}
      <div className="flex justify-end">
        <PrimaryButton type="submit" disabled={loading}>
          Save
        </PrimaryButton>
      </div>
    </form>
  );
};

export default AddProductVariant;
