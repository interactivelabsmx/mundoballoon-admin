import {
  Auth,
  AuthError,
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
  User,
} from '@firebase/auth';

interface IUnifiedEmailPasswordAuth {
  auth: Auth;
  email: string;
  password: string;
  onAuth: (user: User) => void;
  onError?: (error: AuthError) => void;
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
