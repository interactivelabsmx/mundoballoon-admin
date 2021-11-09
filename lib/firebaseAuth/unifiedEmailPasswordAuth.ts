import {
  Auth,
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from '@firebase/auth';

interface IUnifiedEmailPasswordAuth {
  auth: Auth;
  email: string;
  password: string;
}

const unifiedEmailPasswordAuth = ({
  auth,
  email,
  password,
}: IUnifiedEmailPasswordAuth) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => [userCredential, null])
    .catch((createError) => {
      if (createError.code === AuthErrorCodes.EMAIL_EXISTS) {
        return signInWithEmailAndPassword(auth, email, password)
          .then((userCredential: UserCredential) => [userCredential, null])
          .catch((loginError) => [null, loginError]);
      }
      return [null, createError];
    });

export default unifiedEmailPasswordAuth;
