import { useRouter } from 'next/router';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import ProductVariantForm, {
  IProductVariantFormSchema,
} from '@components/Products/ProductVariantForm';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';
import LoadingText from '@components/UI/loading/LoadingText';
import { ProductEntityFragment } from '@graphql/fragments/ProductEntityFragment';
import { useCreateProductVariantMutation } from '@graphql/mutations/products/CreateProductVariant';
import { GetProductsEntityDocument } from '@graphql/queries/products/GetProductsEntity';

export interface IAddProductVariantContainer {
  product: ProductEntityFragment;
}

const AddProductVariantContainer = ({
  product,
}: IAddProductVariantContainer) => {
  const { push } = useRouter();
  const [createProduct, { loading, error }] = useCreateProductVariantMutation({
    refetchQueries: [{ query: GetProductsEntityDocument }],
  });
  const onSubmit: SubmitHandler<IProductVariantFormSchema> = async (
    formData
  ) => {
    const result = await createProduct({
      variables: { createProductVariantInput: formData },
    });
    if (!result.errors) push('/admin/products');
  };

  return (
    <>
      <ProductVariantForm
        onSubmit={onSubmit}
        product={product}
        loading={loading}
      />
      {error && (
        <SimpleTextAlert
          text={error.message}
          type={SimpleTextAlertType.ERROR}
        />
      )}
      {loading && <LoadingText text="Creating product variant..." />}
    </>
  );
};

export default AddProductVariantContainer;
