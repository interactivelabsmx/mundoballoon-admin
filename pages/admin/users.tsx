import AdminLayout from '@layouts/AdminLayout';
import React from 'react';
import withAuthServer from '@lib/firebaseAuth/withAuthServer';

const Users = (): JSX.Element => (
  <AdminLayout>
    <div>Users</div>
  </AdminLayout>
);

export const getServerSideProps = withAuthServer();

export default Users;
