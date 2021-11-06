import React, { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import {
  EmailAuthProvider,
  FacebookAuthProvider,
  GoogleAuthProvider,
  PhoneAuthProvider,
} from '@firebase/auth';
import FirebaseGoogleAuth from './FirebaseGoogleAuth';

export const baseFirebaseUIAuthConfig = {
  signInFlow: 'popup',
  // Auth providers
  // https://github.com/firebase/firebaseui-web#configure-oauth-providers
  signInOptions: [
    {
      provider: PhoneAuthProvider.PROVIDER_ID,
    },
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
    {
      provider: GoogleAuthProvider.PROVIDER_ID,
    },
    {
      provider: FacebookAuthProvider.PROVIDER_ID,
      scopes: ['public_profile'],
    },
  ],
  signInSuccessUrl: '/',
  credentialHelper: 'none',
};

const CREATE_USER = gql`
  mutation CreateUser($userId: String!) {
    createUser(input: { userId: $userId }) {
      user {
        id
      }
    }
  }
`;

const FirebaseAuth = () => {
  // const router = useRouter();
  // const [createUser, { loading, error }] = useMutation(CREATE_USER);
  const [renderAuth, setRenderAuth] = useState(false);
  // const firebaseAuthConfig = {
  //   ...baseFirebaseUIAuthConfig,
  //   callbacks: {
  //     signInSuccessWithAuthResult: (authResult) => {
  //       createUser({ variables: { userId: authResult.user.uid } }).then(() =>
  //         router.push('/admin/dashboard')
  //       );
  //       return false;
  //     },
  //   },
  // };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRenderAuth(true);
    }
  }, []);
  return (
    <div>
      {/* {error && <div>{error}</div>}
      {loading && <div>LOADING...</div>} */}
      {renderAuth ? <FirebaseGoogleAuth /> : null}
    </div>
  );
};

export default FirebaseAuth;
