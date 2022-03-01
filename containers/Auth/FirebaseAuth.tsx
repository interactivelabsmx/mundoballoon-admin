import { User } from '@firebase/auth';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { setRecaptchaVerifier } from '@lib/firebaseAuth/phoneAuth';
import { useAuth } from '@providers/AuthProvider';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';
import { useCreateUserMutation } from '@graphql/mutations/user/CreateUser';
import FirebaseEmailAuth from './FirebaseEmailAuth';
import FirebaseFacebookButton from './FirebaseFacebookButton';
import FirebaseGoogleButton from './FirebaseGoogleButton';
import FirebasePhoneAuth from './FirebasePhoneAuth';

const FirebaseAuth = () => {
  const { push } = useRouter();
  const { auth } = useAuth();
  const [requestError, setRequestError] = useState('');
  const [createUser, { loading, error }] = useCreateUserMutation();
  const onAuthComplete = async (user: User) => {
    const token = await user.getIdToken(true);
    await createUser({
      context: { headers: { authorization: `Bearer ${token}` } },
      variables: { userId: user.uid },
    });
    push('/admin/dashboard');
  };
  const onDismissAlert = () => setRequestError('');
  useEffect(() => {
    if (auth) setRecaptchaVerifier();
  }, [auth]);

  return auth ? (
    <>
      {loading && <div>Authenticating</div>}
      {(requestError || error) && (
        <SimpleTextAlert
          text={requestError || error?.message}
          type={SimpleTextAlertType.ERROR}
          onDismissAlert={onDismissAlert}
        />
      )}
      <div>
        <div>
          <div className="mt-1 grid grid-cols-3 gap-3">
            <FirebaseFacebookButton
              onAuthComplete={onAuthComplete}
              setRequestError={setRequestError}
            />
            <FirebaseGoogleButton
              onAuthComplete={onAuthComplete}
              setRequestError={setRequestError}
            />
            <FirebasePhoneAuth
              onAuthComplete={onAuthComplete}
              setRequestError={setRequestError}
            />
          </div>
        </div>

        <div className="mt-6 relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-100 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <FirebaseEmailAuth
          onAuthComplete={onAuthComplete}
          setRequestError={setRequestError}
        />
      </div>
    </>
  ) : null;
};

export default FirebaseAuth;
