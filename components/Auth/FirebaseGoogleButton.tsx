import { Dispatch } from 'react';
import { GoogleAuthProvider, User, AuthError } from '@firebase/auth';
import { useAuth } from '../../containers/AuthProvider';
import getOpenSignInWithPopupFuction from '../../lib/firebaseAuth/getOpenSignInWithPopupFuction';
import SecundaryButton from '../UI/buttons/SecundaryButton';
import GoogleIcon from '../UI/Icons/GoogleIcon';

interface IFirebaseGoogleButton {
  onAuthComplete: (user: User) => void;
  setRequestError: Dispatch<string>;
}

const FirebaseGoogleButton = ({
  onAuthComplete,
  setRequestError,
}: IFirebaseGoogleButton) => {
  const { auth, onAuth } = useAuth();
  const provider = new GoogleAuthProvider();
  const handleAuh = (user: User) => {
    onAuthComplete(user);
    onAuth(user);
  };
  const onError = (error: AuthError) => {
    setRequestError(error.message);
  };
  const openSignInWithPopup = getOpenSignInWithPopupFuction({
    auth,
    provider,
    onAuth: handleAuh,
    onError,
  });
  return (
    <SecundaryButton onClick={openSignInWithPopup} className="w-full">
      <span className="sr-only">Sign in with Facebook</span>
      <GoogleIcon />
    </SecundaryButton>
  );
};

export default FirebaseGoogleButton;
