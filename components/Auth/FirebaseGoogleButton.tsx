import { GoogleAuthProvider, User } from '@firebase/auth';
import { Dispatch } from 'react';
import GoogleIcon from '@components/UI/Icons/GoogleIcon';
import FirebaseSocialButton, {
  IFirebaseSocialButton,
} from './FirebaseSoccialButton';

interface IFirebaseGoogleButton {
  onAuthComplete: (user: User) => void;
  setRequestError: Dispatch<string>;
}

const FirebaseGoogleButton = ({
  onAuthComplete,
  setRequestError,
}: IFirebaseGoogleButton) => {
  const SocialButtonProps: IFirebaseSocialButton = {
    onAuthComplete,
    setRequestError,
    provider: new GoogleAuthProvider(),
    label: 'Sign in with Google',
  };
  return <FirebaseSocialButton {...SocialButtonProps} Icon={GoogleIcon} />;
};

export default FirebaseGoogleButton;
