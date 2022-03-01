import { AuthError, User } from '@firebase/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { Dispatch } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import type { Asserts } from 'yup';
import unifiedEmailPasswordAuth from '@lib/firebaseAuth/unifiedEmailPasswordAuth';
import { useAuth } from '@providers/AuthProvider';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import Input from '@components/UI/form/Input';
import LoadingText from '@components/UI/loading/LoadingText';

export const userPwdSchema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

interface IUserPwdForm extends Asserts<typeof userPwdSchema> {}

interface IFirebaseEmailAuth {
  onAuthComplete: (user: User) => void;
  setRequestError: Dispatch<string>;
}

const FirebaseEmailAuth = ({
  onAuthComplete,
  setRequestError,
}: IFirebaseEmailAuth) => {
  const { auth, onAuth } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserPwdForm>({
    resolver: yupResolver(userPwdSchema),
  });

  const onError = (error: AuthError) => setRequestError(error.message);

  const handleAuh = (user: User) => {
    onAuthComplete(user);
    onAuth(user);
  };

  if (!auth) return <LoadingText text="Loading Login..." />;
  const onSubmit: SubmitHandler<IUserPwdForm> = ({ email, password }) => {
    setRequestError('');
    unifiedEmailPasswordAuth({
      auth,
      email,
      password,
      onAuth: handleAuh,
      onError,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
