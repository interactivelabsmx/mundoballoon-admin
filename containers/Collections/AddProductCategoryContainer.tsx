import React, { Dispatch } from 'react';
import { SubmitHandler } from 'react-hook-form';
import ProductCategoryForm, {
  IProductCategoryFormSchema,
} from '@components/Collections/ProductCategoryForm';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';
import LoadingText from '@components/UI/loading/LoadingText';
import Modal from '@components/UI/modal/Modal';
import { useCreateProductCategoryMutation } from '@graphql/mutations/collections/CreateProductCategory';

interface IAddProductCategoryContainer {
  open: boolean;
  setOpen: Dispatch<boolean>;
}

const AddProductCategoryContainer = ({
  open,
  setOpen,
}: IAddProductCategoryContainer) => {
  const [createProductCategory, { loading, error }] =
    useCreateProductCategoryMutation();
  const onSubmit: SubmitHandler<IProductCategoryFormSchema> = async (data) => {
    const result = await createProductCategory({
      variables: {
        createProductCategoryRequestInput: { ...data },
      },
    });
    if (!result.errors) setOpen(false);
  };

  return (
    <Modal open={open} setOpen={setOpen}>
      <ProductCategoryForm onSubmit={onSubmit} loading={loading} />
      {error && (
        <SimpleTextAlert
          text={error.message}
          type={SimpleTextAlertType.ERROR}
        />
      )}
      {loading && <LoadingText text="Creating product..." />}
    </Modal>
  );
};

export default AddProductCategoryContainer;
