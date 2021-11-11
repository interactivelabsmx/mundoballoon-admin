import { GoogleAuthProvider, User } from '@firebase/auth';
import { useAuth } from './AuthProvider';
import getOpenSignInWithPopupFuction from '../../lib/firebaseAuth/getOpenSignInWithPopupFuction';
import SecundaryButton from '../UI/buttons/SecundaryButton';
import GoogleIcon from '../UI/Icons/GoogleIcon';

interface IFirebaseGoogleButton {
  onAuthComplete: (user: User) => void;
}

const FirebaseGoogleButton = ({ onAuthComplete }: IFirebaseGoogleButton) => {
  const { auth, onAuth } = useAuth();
  const provider = new GoogleAuthProvider();
  const handleAuh = (user: User) => {
    onAuthComplete(user);
    onAuth(user);
  };
  const openSignInWithPopup = getOpenSignInWithPopupFuction({
    auth,
    provider,
    onAuth: handleAuh,
  });
  return (
    <div>
      <SecundaryButton onClick={openSignInWithPopup} className="w-full">
        <span className="sr-only">Sign in with Facebook</span>
        <GoogleIcon />
      </SecundaryButton>
    </div>
  );
};

export default FirebaseGoogleButton;
