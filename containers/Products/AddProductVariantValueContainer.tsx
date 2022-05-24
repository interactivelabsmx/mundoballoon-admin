import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import ProductVariantAddValueForm, {
  IProductVariantAddValueFormSchema,
} from '@components/Products/ProductVariantAddValueForm';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';
import LoadingText from '@components/UI/loading/LoadingText';
import { useProductVariantAddValueMutation } from '@graphql/mutations/products/ProductVariantAddValue';
import { GetProductVariantByIdDocument } from '@graphql/queries/products/GetProductVariantById';

interface IAddProductVariantValueContainer {
  onCancel: () => void;
  productVariantId: number;
}

const AddProductVariantValueContainer = ({
  onCancel,
  productVariantId,
}: IAddProductVariantValueContainer) => {
  const [productVariantAddValue, { loading, error }] =
    useProductVariantAddValueMutation({
      refetchQueries: [{ query: GetProductVariantByIdDocument }],
    });
  const onSubmit: SubmitHandler<IProductVariantAddValueFormSchema> = async (
    data
  ) => {
    // const result =
    await productVariantAddValue({
      variables: {
        productVariantValueInput: { ...data },
      },
    });
    // TODO: HANDLE ERRORS
    // if (result.errors) console.log(result.errors);
  };

  return (
    <>
      <ProductVariantAddValueForm
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

export default AddProductVariantValueContainer;
