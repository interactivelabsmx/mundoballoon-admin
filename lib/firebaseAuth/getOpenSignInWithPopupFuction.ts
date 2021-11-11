import {
  signInWithPopup,
  Auth,
  AuthProvider,
  User,
  AuthError,
} from '@firebase/auth';

interface IGetOpenSignInWithPopupFuction {
  auth: Auth;
  provider: AuthProvider;
  // StaticAuthProvider,
  onAuth: (user: User) => void;
  onError?: (error: AuthError) => void;
}

const getOpenSignInWithPopupFuction = ({
  auth,
  provider,
  onAuth,
  onError,
}: IGetOpenSignInWithPopupFuction) => {
  const openSignInWithPopup = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = StaticAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // console.log(token);
        // The signed-in user info.
        const user = result.user;
        onAuth(user);
      })
      .catch((error) => {
        onError && onError(error);
        //   // Handle Errors here.
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
        //   // The email of the user's account used.
        //   const email = error.email;
        //   // The AuthCredential type that was used.
        //   const credential = StaticAuthProvider.credentialFromError(error);
      });
  return openSignInWithPopup;
};

export default getOpenSignInWithPopupFuction;
