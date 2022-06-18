import {
  getAuth,
  AuthError,
  RecaptchaVerifier,
  ConfirmationResult,
  signInWithPhoneNumber,
} from '@firebase/auth';
import { IBaeFunctionAuth } from './firebaseAuthTypes';

declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
  }
}

interface IPhoneAuth extends IBaeFunctionAuth {
  phoneNumber: string;
  onCodeSent: (confirmationResult: ConfirmationResult) => void;
  onError: (error: AuthError) => void;
}

export const setRecaptchaVerifier = () => {
  const auth = getAuth();
  window.recaptchaVerifier = new RecaptchaVerifier(
    'recaptcha-verifier-container',
    { size: 'invisible' },
    auth
  );
};

export const phoneCodeRequest = ({
  auth,
  phoneNumber,
  onCodeSent,
  onError,
}: IPhoneAuth) => {
  const appVerifier = window.recaptchaVerifier;
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => onCodeSent(confirmationResult))
    .catch((error: AuthError) => onError(error));
};
