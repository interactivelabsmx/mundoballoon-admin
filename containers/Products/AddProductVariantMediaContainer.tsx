import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import ProductVariantAddMediaForm, {
  IProductVariantAddMediaFormSchema,
} from '@components/Products/ProductVariantAddMediaForm';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';
import LoadingText from '@components/UI/loading/LoadingText';
import { useProductVariantAddMediaMutation } from '@graphql/mutations/products/ProductVariantAddMedia';
import { GetProductVariantByIdDocument } from '@graphql/queries/products/GetProductVariantById';

interface IAddProductVariantMediaContainer {
  onCancel: () => void;
  productVariantId: number;
}

const AddProductVariantMediaContainer = ({
  onCancel,
  productVariantId,
}: IAddProductVariantMediaContainer) => {
  const [productVariantAddMedia, { loading, error }] =
    useProductVariantAddMediaMutation({
      refetchQueries: [
        {
          query: GetProductVariantByIdDocument,
          variables: { productVariantId },
        },
      ],
    });
  const onSubmit: SubmitHandler<IProductVariantAddMediaFormSchema> = async (
    data
  ) => {
    // const result =
    await productVariantAddMedia({
      variables: {
        file: data.file[0],
        productVariantMediaInput: {
          productVariantId: data.productVariantId,
          mediaType: data.mediaType,
          quality: data.quality,
        },
      },
    });
    // TODO: HANDLE ERRORS
    // if (result.errors) console.log(result.errors);
  };

  return (
    <>
      <ProductVariantAddMediaForm
        productVariantId={productVariantId}
        onSubmit={onSubmit}
        onCancel={onCancel}
        loading={loading}
      />
      {error && (
        <SimpleTextAlert
          text={error.message}
          type={SimpleTextAlertType.ERROR}
        />
      )}
      {loading && <LoadingText text="Adding Variant..." />}
    </>
  );
};

export default AddProductVariantMediaContainer;
