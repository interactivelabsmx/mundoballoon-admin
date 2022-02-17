import { useRouter } from 'next/router';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import ProductForm, {
  IProductFormSchema,
} from '@components/Products/ProductForm';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';
import LoadingText from '@components/UI/loading/LoadingText';
import { useCreateProductMutation } from '@graphql/mutations/products/createProduct';
import { AllProductsDocument } from '@graphql/queries/products/allProducts';

const AddProductContainer = () => {
  const { push } = useRouter();
  const [createProduct, { loading, error }] = useCreateProductMutation({
    refetchQueries: [{ query: AllProductsDocument }],
  });
  const onSubmit: SubmitHandler<IProductFormSchema> = async (data) => {
    const result = await createProduct({
      variables: {
        createProductPayload: { ...data },
      },
    });
    if (!result.errors) push('/admin/products');
  };

  return (
    <>
      <ProductForm onSubmit={onSubmit} loading={loading} />
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

export default AddProductContainer;
