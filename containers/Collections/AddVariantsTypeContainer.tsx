import React, { Dispatch } from 'react';
import { SubmitHandler } from 'react-hook-form';
import VariantTypeForm, {
  IVariantsTypeFormSchema,
} from '@components/Collections/VariantsTypeForm';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';
import LoadingText from '@components/UI/loading/LoadingText';
import { useCreateVariantsTypeMutation } from '@graphql/mutations/collections/CreateVariantsType';
import { GetVariantsTypeDocument } from '@graphql/queries/collections/variantsType';

interface IAddVariantsTypeContainer {
  setOpen: Dispatch<boolean>;
}

const AddVariantsTypeContainer = ({ setOpen }: IAddVariantsTypeContainer) => {
  const [createVariant, { loading, error }] = useCreateVariantsTypeMutation({
    refetchQueries: [{ query: GetVariantsTypeDocument }],
  });
  const onSubmit: SubmitHandler<IVariantsTypeFormSchema> = async (data) => {
    const result = await createVariant({
      variables: {
        variantsType: data.variantType,
      },
    });
    if (!result.errors) setOpen(false);
  };

  return (
    <>
      <VariantTypeForm onSubmit={onSubmit} loading={loading} />
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

export default AddVariantsTypeContainer;
