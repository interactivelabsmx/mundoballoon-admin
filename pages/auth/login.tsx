import React from 'react';
import Auth from '../../layouts/Auth';
import FirebaseAuth from '../../components/Auth/FirebaseAuth';
import { withAuthUserTokenSSR } from 'next-firebase-auth';

const Login = (): JSX.Element => (
  <div className="container mx-auto px-4 h-full">
    <div className="flex content-center items-center justify-center h-full">
      <div className="w-full lg:w-4/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h6 className="text-blueGray-500 text-sm font-bold">
                Sign in with
              </h6>
            </div>
            <FirebaseAuth />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const getServerSideProps = withAuthUserTokenSSR()(async (context) => {
  const { AuthUser } = context;
  const token = await AuthUser?.getIdToken();
  if (token) {
    return {
      redirect: {
        permanent: false,
        destination: '/admin/dashboard',
      },
    };
  }
  return { redirect: null };
});

Login.layout = Auth;

export default Login;
