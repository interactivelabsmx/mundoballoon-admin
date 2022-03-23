import React, { Dispatch } from 'react';
import { SubmitHandler } from 'react-hook-form';
import VariantValueForm, {
  IVariantValueFormSchema,
} from '@components/Collections/VariantValueForm';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';
import LoadingText from '@components/UI/loading/LoadingText';
import { useCreateVariantValueMutation } from '@graphql/mutations/collections/CreateVariantValue';
import { GetVariantValuesDocument } from '@graphql/queries/collections/VariantValues';

interface IAddVariantValueContainer {
  setOpen: Dispatch<boolean>;
  variantId: number;
}

const AddVariantValueContainer = ({
  setOpen,
  variantId,
}: IAddVariantValueContainer) => {
  const [createVariantValue, { loading, error }] =
    useCreateVariantValueMutation({
      refetchQueries: [
        { query: GetVariantValuesDocument, variables: { variantId } },
      ],
    });
  const onSubmit: SubmitHandler<IVariantValueFormSchema> = async (data) => {
    const result = await createVariantValue({
      variables: {
        createVariantValueInput: { ...data },
      },
    });
    if (!result.errors) setOpen(false);
  };

  return (
    <>
      <VariantValueForm
        onSubmit={onSubmit}
        loading={loading}
        variantId={variantId}
      />
      {error && (
        <SimpleTextAlert
          text={error.message}
          type={SimpleTextAlertType.ERROR}
        />
      )}
      {loading && <LoadingText text="Creating Variant Value..." />}
    </>
  );
};

export default AddVariantValueContainer;
