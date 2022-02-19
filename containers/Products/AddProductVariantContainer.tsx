import { useRouter } from 'next/router';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import ProductVariantForm, {
  IProductVariantFormSchema,
} from '@components/Products/ProductVariantForm';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';
import LoadingText from '@components/UI/loading/LoadingText';
import { Product } from '@graphql/graphql';
import { useCreateProductVariantMutation } from '@graphql/mutations/products/createProductVariant';
import { AllProductsDocument } from '@graphql/queries/products/allProducts';

export interface IAddProductVariantContainer {
  product: Product;
}

const AddProductVariantContainer = ({
  product,
}: IAddProductVariantContainer) => {
  const { push } = useRouter();
  const [createProduct, { loading, error }] = useCreateProductVariantMutation({
    refetchQueries: [{ query: AllProductsDocument }],
  });
  const onSubmit: SubmitHandler<IProductVariantFormSchema> = async (
    formData
  ) => {
    delete formData.variantId;
    const result = await createProduct({
      variables: { createProductVariantPayload: formData },
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