import {
  Auth,
  AuthProvider,
  getAuth,
  GoogleAuthProvider,
} from '@firebase/auth';
import { useEffect, useState } from 'react';
import getOpenSignInWithPopupFuction from '../../lib/firebaseAuth/getOpenSignInWithPopupFuction';
import SecundaryButton from '../UI/buttons/SecundaryButton';
import GoogleIcon from '../UI/Icons/GoogleIcon';

const FirebaseGoogleButton = () => {
  const [provider, setProvider] = useState<AuthProvider>(null);
  const [auth, setAuth] = useState<Auth>(null);
  useEffect(() => {
    setProvider(new GoogleAuthProvider());
    setAuth(getAuth());
  }, []);
  const openSignInWithPopup = getOpenSignInWithPopupFuction(
    auth,
    provider,
    GoogleAuthProvider
  );
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
