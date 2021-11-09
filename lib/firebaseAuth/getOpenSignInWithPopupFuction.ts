import { signInWithPopup, Auth, AuthProvider } from '@firebase/auth';

const getOpenSignInWithPopupFuction = (
  auth: Auth,
  provider: AuthProvider,
  StaticAuthProvider
) => {
  const openSignInWithPopup = () =>
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = StaticAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = StaticAuthProvider.credentialFromError(error);
      })
      .finally(() => {
        console.log('Popup closed');
      });
  return openSignInWithPopup;
};

export default getOpenSignInWithPopupFuction;
