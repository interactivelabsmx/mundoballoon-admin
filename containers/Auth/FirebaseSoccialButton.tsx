import { User, AuthError, AuthProvider } from '@firebase/auth';
import { Dispatch, FC, SVGProps } from 'react';
import getOpenSignInWithPopupFuction from '@lib/firebaseAuth/getOpenSignInWithPopupFuction';
import { useAuth } from '@providers/AuthProvider';
import SecundaryButton from '@components/UI/buttons/SecundaryButton';
import LoadingText from '@components/UI/loading/LoadingText';

export interface IFirebaseSocialButton {
  onAuthComplete: (user: User) => void;
  setRequestError: Dispatch<string>;
  provider: AuthProvider;
  label: string;
  Icon?: FC<SVGProps<SVGSVGElement>>;
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
  if (!auth) return <LoadingText text="Loading Login..." />;
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
