import React from 'react';
import withAuthServer from '@lib/firebaseAuth/withAuthServer';
import AdminLayout from '@layouts/AdminLayout';
import UsersTableContainer from '@containers/Users/UsersTableContainer';
import SectionHeader from '@components/UI/headers/SectionHeader';

const Users = () => (
  <AdminLayout>
    <SectionHeader text="Users Page" />
    <UsersTableContainer />
  </AdminLayout>
);

export const getServerSideProps = withAuthServer();

export default Users;
