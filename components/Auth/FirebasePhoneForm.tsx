import { Dispatch } from 'react';
import { AuthError, ConfirmationResult } from '@firebase/auth';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import { useAuth } from '../../containers/AuthProvider';
import SecundaryButton from '../UI/buttons/SecundaryButton';
import PrimaryButton from '../UI/buttons/PrimaryButton';
import Input from '../UI/form/Input';
import { phoneCodeRequest } from '../../lib/firebaseAuth/phoneAuth';

export const userPhoneSchema = yup
  .object({ phoneNumber: yup.string().required() })
  .required();

interface IUserPhoneForm extends Asserts<typeof userPhoneSchema> {}

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
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserPhoneForm>({
    resolver: yupResolver(userPhoneSchema),
  });

  const onError = (error: AuthError) => setRequestError(error.message);

  const onSubmit: SubmitHandler<IUserPhoneForm> = ({ phoneNumber }) => {
    setRequestError('');
    phoneCodeRequest({
      auth,
      phoneNumber,
      onAuth,
      onError,
      onCodeSent: setConfirmationResult,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Phone Number"
              placeholder="(555) 555-5555"
              type="phone"
              autoComplete="phone"
              error={errors?.phoneNumber?.message}
            />
          )}
        />
      </div>
      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <PrimaryButton type="submit">Get Code</PrimaryButton>
        <SecundaryButton onClick={onCancel}>Cancel</SecundaryButton>
      </div>
    </form>
  );
};

export default FirebasePhoneForm;
