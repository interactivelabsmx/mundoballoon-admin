import { useRouter } from 'next/router';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import ProductForm, {
  IProductFormSchema,
} from '@components/Products/ProductForm';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';
import LoadingText from '@components/UI/loading/LoadingText';
import { ProductEntityFragment } from '@graphql/fragments/ProductEntityFragment';
import { useUpdateProductMutation } from '@graphql/mutations/products/updateProduct';

interface IEditProductContainer {
  product: ProductEntityFragment;
}

const EditProductContainer = ({ product }: IEditProductContainer) => {
  const { push } = useRouter();
  const [updateProduct, { loading, error }] = useUpdateProductMutation();
  const onSubmit: SubmitHandler<IProductFormSchema> = async (data) => {
    const result = await updateProduct({
      variables: {
        updateProductPayload: { ...data, productId: data.productId || 0 },
      },
    });
    if (!result.errors) push('/admin/products');
  };

  return (
    <>
      <ProductForm onSubmit={onSubmit} loading={false} product={product} />
      {error && (
        <SimpleTextAlert
          text={error.message}
          type={SimpleTextAlertType.ERROR}
        />
      )}
      {loading && <LoadingText text="Creating product..." />}
    </>
  );
};

export default EditProductContainer;
