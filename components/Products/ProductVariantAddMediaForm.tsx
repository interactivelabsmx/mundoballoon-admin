import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import SecundaryButton from '@components/UI/buttons/SecundaryButton';
import SelectNative, {
  ISimpleSelectOptions,
} from '@components/UI/form/SelectNative';

export const MediaTypes = ['string', 'number', 'boolean'];
export const MediaQuality = ['high', 'low'];

export const productVariantMediaFormSchema = yup
  .object({
    productVariantId: yup.number().positive().required(),
    mediaType: yup.string().oneOf(MediaTypes).required(),
    quality: yup.string().oneOf(MediaQuality).required(),
    file: yup.mixed().required(),
  })
  .required();

export interface IProductVariantAddMediaFormSchema
  extends Asserts<typeof productVariantMediaFormSchema> {}

export interface IProductVariantAddMediaForm {
  loading: boolean;
  productVariantId: number;
  onSubmit: SubmitHandler<IProductVariantAddMediaFormSchema>;
  onCancel?: () => void;
}

const ProductVariantAddMediaForm = ({
  loading,
  productVariantId,
  onSubmit,
  onCancel,
}: IProductVariantAddMediaForm) => {
  const {
    control: control3,
    register: register3,
    handleSubmit: handleSubmit3,
    formState: { errors },
  } = useForm<IProductVariantAddMediaFormSchema>({
    resolver: yupResolver(productVariantMediaFormSchema),
    defaultValues: { productVariantId },
  });

  const mediaTypeOptions = useMemo(
    () => MediaTypes.map((mt) => ({ label: mt, value: mt })),
    []
  );
  const mediaQualityOptions = useMemo(
    () => MediaQuality.map((mt) => ({ label: mt, value: mt })),
    []
  );

  return (
    <form
      className="mb-8 w-full md:w-1/2"
      onSubmit={(event) => {
        event.stopPropagation();
        event.preventDefault();
        handleSubmit3(onSubmit)(event);
      }}
    >
      <input type="hidden" {...register3('productVariantId')} />
      <div className="mb-8">
        <Controller
          name="mediaType"
          control={control3}
          render={({ field }) => (
            <SelectNative<ISimpleSelectOptions>
              {...field}
              label="Media Type"
              optionValue="label"
              optionLabel="value"
              options={mediaTypeOptions}
              error={errors?.mediaType?.message}
            />
          )}
        />
      </div>
      <div className="mb-8">
        <Controller
          name="mediaType"
          control={control3}
          render={({ field }) => (
            <SelectNative<ISimpleSelectOptions>
              {...field}
              label="Media Quality"
              optionValue="label"
              optionLabel="value"
              options={mediaQualityOptions}
              error={errors?.quality?.message}
            />
          )}
        />
      </div>
      <div className="flex justify-end">
        {onCancel && (
          <SecundaryButton
            type="button"
            className="mr-4"
            disabled={loading}
            onClick={onCancel}
          >
            Cancel
          </SecundaryButton>
        )}
        <PrimaryButton type="submit" disabled={loading}>
          Add Variation
        </PrimaryButton>
      </div>
    </form>
  );
};

export default ProductVariantAddMediaForm;
