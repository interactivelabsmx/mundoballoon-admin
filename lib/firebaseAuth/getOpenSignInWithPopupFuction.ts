import {
  User,
  Auth,
  AuthError,
  AuthProvider,
  signInWithPopup,
} from '@firebase/auth';

interface IGetOpenSignInWithPopupFuction {
  auth: Auth;
  provider: AuthProvider;
  onAuth: (user: User) => void;
  onError: (error: AuthError) => void;
}

const getOpenSignInWithPopupFuction =
  ({ auth, provider, onAuth, onError }: IGetOpenSignInWithPopupFuction) =>
  () =>
    signInWithPopup(auth, provider)
      .then(({ user }) => onAuth(user))
      .catch((error) => onError(error));

export default getOpenSignInWithPopupFuction;
