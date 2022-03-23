import React, { Dispatch } from 'react';
import { SubmitHandler } from 'react-hook-form';
import VariantForm, {
  IVariantFormSchema,
} from '@components/Collections/VariantForm';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';
import LoadingText from '@components/UI/loading/LoadingText';
import { useCreateVariantMutation } from '@graphql/mutations/collections/CreateVariant';
import { GetVariantsDocument } from '@graphql/queries/collections/Variants';

interface IAddVariantContainer {
  setOpen: Dispatch<boolean>;
}

const AddVariantContainer = ({ setOpen }: IAddVariantContainer) => {
  const [createVariant, { loading, error }] = useCreateVariantMutation({
    refetchQueries: [{ query: GetVariantsDocument }],
  });
  const onSubmit: SubmitHandler<IVariantFormSchema> = async (data) => {
    const result = await createVariant({
      variables: {
        createVariantRequestInput: { ...data },
      },
    });
    if (!result.errors) setOpen(false);
  };

  return (
    <>
      <VariantForm onSubmit={onSubmit} loading={loading} />
      {error && (
        <SimpleTextAlert
          text={error.message}
          type={SimpleTextAlertType.ERROR}
        />
      )}
      {loading && <LoadingText text="Creating variant..." />}
    </>
  );
};

export default AddVariantContainer;
