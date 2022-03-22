import React, { Dispatch } from 'react';
import { SubmitHandler } from 'react-hook-form';
import ProductCategoryForm, {
  IProductCategoryFormSchema,
} from '@components/Collections/ProductCategoryForm';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';
import LoadingText from '@components/UI/loading/LoadingText';
import { useCreateProductCategoryMutation } from '@graphql/mutations/collections/CreateProductCategory';
import { GetProductCategoriesDocument } from '@graphql/queries/collections/ProductCategories';

interface IAddProductCategoryContainer {
  setOpen: Dispatch<boolean>;
}

const AddProductCategoryContainer = ({
  setOpen,
}: IAddProductCategoryContainer) => {
  const [createProductCategory, { loading, error }] =
    useCreateProductCategoryMutation({
      refetchQueries: [{ query: GetProductCategoriesDocument }],
    });
  const onSubmit: SubmitHandler<IProductCategoryFormSchema> = async (data) => {
    const result = await createProductCategory({
      variables: {
        createProductCategoryRequestInput: { ...data },
      },
    });
    if (!result.errors) setOpen(false);
  };

  return (
    <>
      <ProductCategoryForm onSubmit={onSubmit} loading={loading} />
      {error && (
        <SimpleTextAlert
          text={error.message}
          type={SimpleTextAlertType.ERROR}
        />
      )}
      {loading && <LoadingText text="Creating product category..." />}
    </>
  );
};

export default AddProductCategoryContainer;
