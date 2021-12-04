import { Dispatch, FunctionComponent, SVGProps } from 'react';
import { User, AuthError, AuthProvider } from '@firebase/auth';
import { useAuth } from '../../containers/AuthProvider';
import getOpenSignInWithPopupFuction from '../../lib/firebaseAuth/getOpenSignInWithPopupFuction';
import SecundaryButton from '../UI/buttons/SecundaryButton';

export interface IFirebaseSocialButton {
  onAuthComplete: (user: User) => void;
  setRequestError: Dispatch<string>;
  provider: AuthProvider;
  label: string;
  Icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
}

const FirebaseSocialButton = ({
  onAuthComplete,
  setRequestError,
  provider,
  label,
  Icon,
}: IFirebaseSocialButton) => {
  const { auth, onAuth } = useAuth();
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
      <span className="sr-only">{label}</span>
      {Icon && <Icon />}
    </SecundaryButton>
  );
};

export default FirebaseSocialButton;