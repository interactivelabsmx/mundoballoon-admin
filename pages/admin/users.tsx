import React from 'react';
import withAuthServer from '@lib/firebaseAuth/withAuthServer';
import AdminLayout from '@layouts/AdminLayout';

const Users = (): JSX.Element => (
  <AdminLayout>
    <div>Users</div>
  </AdminLayout>
);

export const getServerSideProps = withAuthServer();

export default Users;
