import React, { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

import FirebaseFacebookButton from './FirebaseFacebookButton';
import FirebaseGoogleButton from './FirebaseGoogleButton';
import FirebaseEmailAuth from './FirebaseEmailAuth';

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

  return renderAuth ? (
    <>
      <div>
        <div>
          <div className="mt-1 grid grid-cols-3 gap-3">
            <FirebaseFacebookButton />
            <FirebaseGoogleButton />
          </div>
        </div>

        <div className="mt-6 relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-100 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <FirebaseEmailAuth />
      </div>
    </>
  ) : null;
};

export default FirebaseAuth;
