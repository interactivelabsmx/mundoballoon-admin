import {
  Auth,
  AuthProvider,
  getAuth,
  FacebookAuthProvider,
} from '@firebase/auth';
import { useEffect, useState } from 'react';
import getOpenSignInWithPopupFuction from '../../lib/firebaseAuth/getOpenSignInWithPopupFuction';
import SecundaryButton from '../UI/buttons/SecundaryButton';
import FacebookIcon from '../UI/Icons/FacebookIcon';

const FirebaseFacebookButton = () => {
  const [provider, setProvider] = useState<AuthProvider>(null);
  const [auth, setAuth] = useState<Auth>(null);
  useEffect(() => {
    setProvider(new FacebookAuthProvider());
    setAuth(getAuth());
  }, []);
  const openSignInWithPopup = getOpenSignInWithPopupFuction(
    auth,
    provider,
    FacebookAuthProvider
  );
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
