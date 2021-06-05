import React, { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { withAuthUser, AuthAction } from 'next-firebase-auth';
import firebase from 'firebase/app';
import 'firebase/auth';

import { baseFirebaseUIAuthConfig } from '../../lib/initFirebaseAuth';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const [createUser, { loading, error }] = useMutation(CREATE_USER);
  const [renderAuth, setRenderAuth] = useState(false);
  const firebaseAuthConfig = {
    ...baseFirebaseUIAuthConfig,
    callbacks: {
      signInSuccessWithAuthResult: (authResult) => {
        createUser({ variables: { userId: authResult.user.uid } }).then(() =>
          router.push('/admin/dashboard')
        );
        return false;
      },
    },
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRenderAuth(true);
    }
  }, []);
  return (
    <div>
      {error && <div>{error}</div>}
      {loading && <div>LOADING...</div>}
      {renderAuth ? (
        <StyledFirebaseAuth
          uiConfig={firebaseAuthConfig}
          firebaseAuth={firebase.auth()}
        />
      ) : null}
    </div>
  );
};

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.RETURN_NULL,
  whenUnauthedAfterInit: AuthAction.RENDER,
})(FirebaseAuth);
