import { FacebookAuthProvider, User } from '@firebase/auth';
import { useAuth } from '../../containers/AuthProvider';
import getOpenSignInWithPopupFuction from '../../lib/firebaseAuth/getOpenSignInWithPopupFuction';
import SecundaryButton from '../UI/buttons/SecundaryButton';
import FacebookIcon from '../UI/Icons/FacebookIcon';

interface IFirebaseFacebookButton {
  onAuthComplete: (user: User) => void;
}

const FirebaseFacebookButton = ({
  onAuthComplete,
}: IFirebaseFacebookButton) => {
  const { auth, onAuth } = useAuth();
  const provider = new FacebookAuthProvider();
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
        <FacebookIcon />
      </SecundaryButton>
    </div>
  );
};

export default FirebaseFacebookButton;
