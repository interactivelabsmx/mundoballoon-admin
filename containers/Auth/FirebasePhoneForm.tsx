import { AuthError, ConfirmationResult } from '@firebase/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { Dispatch } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import { phoneCodeRequest } from '@lib/firebaseAuth/phoneAuth';
import { useAuth } from '@providers/AuthProvider';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import SecundaryButton from '@components/UI/buttons/SecundaryButton';
import ErrorText from '@components/UI/form/ErrorText';
import LoadingText from '@components/UI/loading/LoadingText';
import CountryCodeSelector from './CountryCodeSelector';

export const userPhoneSchema = yup
  .object({
    countryCode: yup.string().required(),
    phoneNumber: yup.string().required(),
  })
  .required();

export interface IUserPhoneForm extends Asserts<typeof userPhoneSchema> {}

interface IFirebasePhoneForm {
  setRequestError: Dispatch<string>;
  setConfirmationResult: Dispatch<ConfirmationResult>;
  onCancel: () => void;
}

const FirebasePhoneForm = ({
  setRequestError,
  setConfirmationResult,
  onCancel,
}: IFirebasePhoneForm) => {
  const { auth, onAuth } = useAuth();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserPhoneForm>({
    resolver: yupResolver(userPhoneSchema),
  });

  const onError = (error: AuthError) => setRequestError(error.message);

  if (!auth) return <LoadingText text="Loading Login..." />;
  const onSubmit: SubmitHandler<IUserPhoneForm> = ({
    countryCode,
    phoneNumber,
  }) => {
    setRequestError('');
    phoneCodeRequest({
      auth,
      phoneNumber: `+${countryCode}${phoneNumber}`,
      onAuth,
      onError,
      onCodeSent: setConfirmationResult,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label
        htmlFor="phone-number"
        className="block text-sm font-medium text-gray"
      >
        Phone Number
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <Controller
          name="countryCode"
          control={control}
          defaultValue="1"
          render={({ field }) => (
            <CountryCodeSelector field={field} label="Country Code" />
          )}
        />
        <input
          {...register('phoneNumber')}
          type="tel"
          placeholder="(555) 555-5555"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      {errors?.phoneNumber && (
        <ErrorText
          text={errors?.phoneNumber?.message || ''}
          fieldName="phoneNumber"
        />
      )}
      <div></div>
      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <PrimaryButton type="submit" className="mx-4">
          Get Code
        </PrimaryButton>
        <SecundaryButton onClick={onCancel} className="mx-4">
          Cancel
        </SecundaryButton>
      </div>
    </form>
  );
};

export default FirebasePhoneForm;
