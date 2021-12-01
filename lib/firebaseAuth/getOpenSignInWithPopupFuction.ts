import { AuthProvider, signInWithPopup } from '@firebase/auth';
import { IBaeFunctionAuth } from './firebaseAuthTypes';

interface IGetOpenSignInWithPopupFuction extends IBaeFunctionAuth {
  provider: AuthProvider;
}

const getOpenSignInWithPopupFuction =
  ({ auth, provider, onAuth, onError }: IGetOpenSignInWithPopupFuction) =>
  () =>
    signInWithPopup(auth, provider)
      .then(({ user }) => onAuth(user))
      .catch((error) => onError(error));

export default getOpenSignInWithPopupFuction;
