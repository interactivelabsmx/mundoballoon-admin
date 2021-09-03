import { GetStaticPropsResult } from 'next';
import { SSRPropsContext } from 'next-firebase-auth';

type GetServerSideProps = (context: SSRPropsContext) => Promise<
  GetStaticPropsResult<{
    [key: string]: any;
  }>
>;

const withAuthServerSideProps =
  () =>
  (getServerSideProps: GetServerSideProps) =>
  async (
    context: SSRPropsContext
  ): Promise<
    GetStaticPropsResult<{
      [key: string]: any;
    }>
  > => {
    const { AuthUser } = context;
    const token = await AuthUser?.getIdToken();
    if (!token) {
      return {
        redirect: {
          permanent: false,
          destination: '/auth/login',
        },
      };
    }
    if (getServerSideProps) {
      return {
        props: {
          // @ts-expect-error Property 'props' does not exist on type
          ...((await getServerSideProps(context)).props || {}),
        },
      };
    }
    return { props: {} };
  };

export default withAuthServerSideProps;
