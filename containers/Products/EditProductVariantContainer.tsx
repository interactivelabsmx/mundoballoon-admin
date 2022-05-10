import { useRouter } from 'next/router';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import ProductVariantForm, {
  IProductVariantFormSchema,
} from '@components/Products/ProductVariantForm';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';
import LoadingText from '@components/UI/loading/LoadingText';
import { ProductVariantDetailsFragment } from '@graphql/fragments/ProductVariantDetailsFragment';
import { useUpdateProductVariantMutation } from '@graphql/mutations/products/UpdateProductVariant';
import { GetProductVariantByIdDocument } from '@graphql/queries/products/GetProductVariantById';

export interface IEditProductVariantContainer {
  productVariant: ProductVariantDetailsFragment;
}

const EditProductVariantContainer = ({
  productVariant,
}: IEditProductVariantContainer) => {
  const { push } = useRouter();
  const [updateProductVariant, { loading, error }] =
    useUpdateProductVariantMutation({
      refetchQueries: [{ query: GetProductVariantByIdDocument }],
    });
  const onSubmit: SubmitHandler<IProductVariantFormSchema> = async (
    formData
  ) => {
    const result = await updateProductVariant({
      variables: {
        updateProductVariantInput: {
          ...formData,
          productVariantId: formData.productVariantId || 0,
        },
      },
    });
    if (!result.errors) push('/admin/products');
  };

  return (
    <>
      <ProductVariantForm
        onSubmit={onSubmit}
        product={productVariant}
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

export default EditProductVariantContainer;
