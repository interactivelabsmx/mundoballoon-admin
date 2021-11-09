import { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import Input from '../UI/form/Input';
import PrimaryButton from '../UI/buttons/PrimaryButton';
import { AuthErrorCodes, getAuth } from '@firebase/auth';
import unifiedEmailPasswordAuth from '../../lib/firebaseAuth/unifiedEmailPasswordAuth';
import { SimpleTextAlertType } from '../UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '../UI/alerts/SimpleTextAlert';

export const userPwdSchema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

interface IUserPwdForm extends Asserts<typeof userPwdSchema> {}

const FirebaseEmailAuth = () => {
  const [requestError, setRequestError] = useState('');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserPwdForm>({
    resolver: yupResolver(userPwdSchema),
  });

  const onSubmit: SubmitHandler<IUserPwdForm> = async ({ email, password }) => {
    setRequestError('');
    const auth = getAuth();
    const [userCredential, error] = await unifiedEmailPasswordAuth({
      auth,
      email,
      password,
    });

    if (error?.code === AuthErrorCodes.INVALID_PASSWORD) {
      setRequestError('Wrong username and password combination');
    }
    console.log(userCredential);
    console.log(error);
  };

  const onDismissAlert = () => setRequestError('');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {requestError && (
        <SimpleTextAlert
          text={requestError}
          type={SimpleTextAlertType.ERROR}
          onDismissAlert={onDismissAlert}
        />
      )}
      <div>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Email"
              placeholder="test@mail.com"
              type="email"
              autoComplete="email"
              error={errors?.email?.message}
            />
          )}
        />
      </div>

      <div className="space-y-1">
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Password"
              type="password"
              error={errors?.password?.message}
            />
          )}
        />
      </div>

      <div className="flex items-end">
        <div className="text-sm">
          <a
            href="/forgotpwd"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <PrimaryButton type="submit">Sign in</PrimaryButton>
      </div>
    </form>
  );
};

export default FirebaseEmailAuth;
