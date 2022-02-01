import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getAuth, UserRecord } from 'firebase-admin/auth';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { parseCookies, destroyCookie } from 'nookies';
import { cleanObject, FI } from './utils';

type IncomingGSSP<P> = (
  ctx: GetServerSidePropsContext,
  user: Partial<UserRecord> | null
) => Promise<P>;

type WithAuthServerSidePropsResult = GetServerSidePropsResult<{
  [key: string]: any;
}>;

type WithAuthServerSidePropsOptions = {
  allowAll?: boolean;
};

if (getApps().length < 1) {
  initializeApp({
    credential: cert(JSON.parse(process.env.FIREBASE_PRIVATE_KEY || '{}')),
    projectId: 'mundoballoon-dev',
  });
}

export default function withAuthServer(
  incomingGSSP?: IncomingGSSP<WithAuthServerSidePropsResult> | null,
  options?: WithAuthServerSidePropsOptions
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<WithAuthServerSidePropsResult> => {
    const { req } = ctx;
    const cookies = parseCookies({ req });
    const auth = getAuth();
    let userRecord: UserRecord | null = null;
    const fi = cookies[FI];

    // No authcookie and not allow all (login page allows all)
    if (!fi && !options?.allowAll)
      return { redirect: { destination: '/login', permanent: false } };

    if (fi) {
      try {
        const decodedIdToken = await auth.verifyIdToken(cookies[FI]);
        userRecord = await auth.getUser(decodedIdToken.uid);
      } catch (e) {
        destroyCookie(ctx, FI);
        return { redirect: { destination: '/login', permanent: false } };
      }
    }

    // If allow all and already logged in go to dashboard
    if (options?.allowAll && userRecord)
      return {
        redirect: { destination: '/admin/dashboard', permanent: false },
      };

    // No user record and allow all
    const user: Partial<UserRecord> | null = userRecord
      ? cleanObject(userRecord)
      : null;
    if (incomingGSSP) {
      const incomingGSSPResult = await incomingGSSP(ctx, user);

      if ('props' in incomingGSSPResult) {
        return { props: { ...incomingGSSPResult.props, user } };
      }

      if ('redirect' in incomingGSSPResult) {
        return { redirect: { ...incomingGSSPResult.redirect } };
      }

      if ('notFound' in incomingGSSPResult) {
        return { notFound: incomingGSSPResult.notFound };
      }
    }

    return {
      props: {
        user,
      },
    };
  };
}
