import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth, UserRecord } from 'firebase-admin/auth';
import { parseCookies } from 'nookies';
import { cleanObject } from './utils';

type IncomingGSSP<P> = (
  ctx: GetServerSidePropsContext,
  user: Partial<UserRecord>
) => Promise<P>;

type WithAuthServerSidePropsResult = GetServerSidePropsResult<{
  [key: string]: any;
}>;

// type WithAuthServerSidePropsOptions = {
//   any options you eventually would like to pass (required role...)
// };

initializeApp({
  credential: cert(JSON.parse(process.env.FIREBASE_PRIVATE_KEY)),
  projectId: 'mundoballoon-dev',
});

export default function withAuthServer(
  incomingGSSP?: IncomingGSSP<WithAuthServerSidePropsResult> | null
  // options?: WithAuthServerSidePropsOptions
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<WithAuthServerSidePropsResult> => {
    const { req } = ctx;
    const cookies = parseCookies({ req });
    const auth = getAuth();
    let userRecord: UserRecord | null = null;
    // No authcookie
    if (!cookies['fi'])
      return { redirect: { destination: '/login', permanent: false } };

    try {
      const decodedIdToken = await auth.verifyIdToken(cookies['fi']);
      userRecord = await auth.getUser(decodedIdToken.uid);
    } catch {
      return { redirect: { destination: '/login', permanent: false } };
    }

    const user: Partial<UserRecord> = cleanObject(userRecord);
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
