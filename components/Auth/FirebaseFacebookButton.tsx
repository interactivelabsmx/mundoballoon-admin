import { Dispatch } from 'react';
import { FacebookAuthProvider, User, AuthError } from '@firebase/auth';
import { useAuth } from '../../containers/AuthProvider';
import getOpenSignInWithPopupFuction from '../../lib/firebaseAuth/getOpenSignInWithPopupFuction';
import SecundaryButton from '../UI/buttons/SecundaryButton';
import FacebookIcon from '../UI/Icons/FacebookIcon';

interface IFirebaseFacebookButton {
  onAuthComplete: (user: User) => void;
  setRequestError: Dispatch<string>;
}

const FirebaseFacebookButton = ({
  onAuthComplete,
  setRequestError,
}: IFirebaseFacebookButton) => {
  const { auth, onAuth } = useAuth();
  const provider = new FacebookAuthProvider();
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
      <FacebookIcon />
    </SecundaryButton>
  );
};

export default FirebaseFacebookButton;
