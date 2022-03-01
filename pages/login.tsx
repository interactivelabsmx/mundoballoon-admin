import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import withAuthServer from '@lib/firebaseAuth/withAuthServer';
import { useAuth } from '@providers/AuthProvider';
import FirebaseAuth from '@containers/Auth/FirebaseAuth';

const Login = () => {
  const { user } = useAuth();
  const { push } = useRouter();
  useEffect(() => {
    if (user) push('/admin/dashboard');
  }, [user, push]);
  return (
    <>
      <style global jsx>{`
        div#__next {
          height: 100%;
        }
      `}</style>
      <div className="min-h-full flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <div className="relative flex-1 w-auto h-12">
                <Image
                  className="h-12 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                  layout="fill"
                />
              </div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-8">
              <FirebaseAuth />
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
            layout="fill"
          />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = withAuthServer(null, { allowAll: true });

export default Login;
