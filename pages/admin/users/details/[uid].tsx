import { useRouter } from 'next/router';
import React from 'react';
import withAuthServer from '@lib/firebaseAuth/withAuthServer';
import AdminLayout from '@layouts/AdminLayout';
import UserDetailsContainer from '@containers/Users/UserDetailsContainer';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';
import SectionHeader from '@components/UI/headers/SectionHeader';
import LoadingText from '@components/UI/loading/LoadingText';
import { UserFragment } from '@graphql/fragments/UserFragment';
import { useGetUserByIdQuery } from '@graphql/queries/users/GetUserById';

const UserDetails = () => {
  const router = useRouter();
  const uid = router.query.uid as string;
  const { loading, error, data } = useGetUserByIdQuery({
    variables: { userId: uid },
  });
  const user = data?.userById as UserFragment;
  return (
    <AdminLayout>
      <SectionHeader text="User Details" />
      {error && (
        <SimpleTextAlert
          text={error.message}
          type={SimpleTextAlertType.ERROR}
        />
      )}
      {loading ? <LoadingText /> : <UserDetailsContainer user={user} />}
    </AdminLayout>
  );
};

export const getServerSideProps = withAuthServer();

export default UserDetails;
