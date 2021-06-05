const withAuthServerSideProps =
  () => (getServerSidePropsFunc) => async (context) => {
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
    if (getServerSidePropsFunc) {
      return {
        props: {
          ...((await getServerSidePropsFunc(context)).props || {}),
        },
      };
    }
    return {};
  };

export default withAuthServerSideProps;
