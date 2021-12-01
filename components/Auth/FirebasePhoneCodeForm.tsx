import { Dispatch } from 'react';
import { AuthError, User, ConfirmationResult } from '@firebase/auth';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import { useAuth } from '../../containers/AuthProvider';
import SecundaryButton from '../UI/buttons/SecundaryButton';
import PrimaryButton from '../UI/buttons/PrimaryButton';
import Input from '../UI/form/Input';

export const userCodeSchema = yup
  .object({ code: yup.string().required() })
  .required();

interface IUserCodeForm extends Asserts<typeof userCodeSchema> {}

interface IFirebasePhoneCodeForm {
  onAuthComplete: (user: User) => void;
  setRequestError: Dispatch<string>;
  confirmationResult: ConfirmationResult;
  onCancel: () => void;
}

const FirebasePhoneCodeForm = ({
  onAuthComplete,
  setRequestError,
  confirmationResult,
  onCancel,
}: IFirebasePhoneCodeForm) => {
  const { onAuth } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserCodeForm>({
    resolver: yupResolver(userCodeSchema),
  });

  const onError = (error: AuthError) => setRequestError(error.message);

  const handleAuh = (user: User) => {
    onAuthComplete(user);
    onAuth(user);
  };

  const onSubmit: SubmitHandler<IUserCodeForm> = ({ code }) => {
    setRequestError('');
    confirmationResult
      .confirm(code)
      .then(({ user }) => handleAuh(user))
      .catch((error) => onError(error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Controller
          name="code"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Code"
              type="string"
              placeholder=""
              error={errors?.code?.message}
            />
          )}
        />
      </div>
      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <PrimaryButton type="submit" className="my-4">
          Confirm
        </PrimaryButton>
        <SecundaryButton onClick={onCancel} className="my-4">
          Cancel
        </SecundaryButton>
      </div>
    </form>
  );
};

export default FirebasePhoneCodeForm;
