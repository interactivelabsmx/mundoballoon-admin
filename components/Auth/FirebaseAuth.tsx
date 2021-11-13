import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { User } from '@firebase/auth';
import FirebaseFacebookButton from './FirebaseFacebookButton';
import FirebaseGoogleButton from './FirebaseGoogleButton';
import FirebaseEmailAuth from './FirebaseEmailAuth';
import SimpleTextAlert from '../UI/alerts/SimpleTextAlert';
import { SimpleTextAlertType } from '../UI/alerts/AlertConfigTypes';
import { useAuth } from '../../containers/AuthProvider';

const CREATE_USER = gql`
  mutation CreateUser($userId: String!) {
    createUser(input: { userId: $userId }) {
      user {
        id
      }
    }
  }
`;

const FirebaseAuth = () => {
  const { push } = useRouter();
  const { auth } = useAuth();
  const [createUser, { loading, error }] = useMutation(CREATE_USER);
  const onAuthComplete = async (user: User) => {
    const token = await user.getIdToken(true);
    createUser({
      context: { headers: { authorization: `Bearer ${token}` } },
      variables: { userId: user.uid },
    }).then(() => push('/admin/dashboard'));
  };
  return auth ? (
    <>
      {loading && <div>Authenticating</div>}
      {error && (
        <SimpleTextAlert
          text={error.message}
          type={SimpleTextAlertType.ERROR}
        />
      )}
      <div>
        <div>
          <div className="mt-1 grid grid-cols-3 gap-3">
            <FirebaseFacebookButton onAuthComplete={onAuthComplete} />
            <FirebaseGoogleButton onAuthComplete={onAuthComplete} />
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
        <FirebaseEmailAuth onAuthComplete={onAuthComplete} />
      </div>
    </>
  ) : null;
};

export default FirebaseAuth;
