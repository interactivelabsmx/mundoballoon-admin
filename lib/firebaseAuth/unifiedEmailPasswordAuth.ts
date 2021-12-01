import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from '@firebase/auth';
import { IBaeFunctionAuth } from './firebaseAuthTypes';

interface IUnifiedEmailPasswordAuth extends IBaeFunctionAuth {
  email: string;
  password: string;
}

const unifiedEmailPasswordAuth = ({
  auth,
  email,
  password,
  onAuth,
  onError,
}: IUnifiedEmailPasswordAuth) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      onAuth(userCredential.user);
      return [userCredential, null];
    })
    .catch((createError) => {
      if (createError.code === AuthErrorCodes.EMAIL_EXISTS) {
        return signInWithEmailAndPassword(auth, email, password)
          .then((userCredential: UserCredential) => {
            onAuth(userCredential.user);
            return [userCredential, null];
          })
          .catch((loginError) => {
            onError && onError(loginError);
            return [null, loginError];
          });
      }
      onError && onError(createError);
      return [null, createError];
    });

export default unifiedEmailPasswordAuth;
