import { FacebookAuthProvider, User } from '@firebase/auth';
import { Dispatch } from 'react';
import FacebookIcon from '@components/UI/Icons/FacebookIcon';
import FirebaseSocialButton, {
  IFirebaseSocialButton,
} from './FirebaseSoccialButton';

interface IFirebaseFacebookButton {
  onAuthComplete: (user: User) => void;
  setRequestError: Dispatch<string>;
}

const FirebaseFacebookButton = ({
  onAuthComplete,
  setRequestError,
}: IFirebaseFacebookButton) => {
  const SocialButtonProps: IFirebaseSocialButton = {
    onAuthComplete,
    setRequestError,
    provider: new FacebookAuthProvider(),
    label: 'Sign in with Facebook',
  };
  return <FirebaseSocialButton {...SocialButtonProps} Icon={FacebookIcon} />;
};

export default FirebaseFacebookButton;
