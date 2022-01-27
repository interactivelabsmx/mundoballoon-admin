import AdminLayout from '@layouts/AdminLayout';
import React from 'react';
import withAuthServer from '@lib/firebaseAuth/withAuthServer';

const Settings = (): JSX.Element => (
  <AdminLayout>
    <div>Settings</div>
  </AdminLayout>
);

export const getServerSideProps = withAuthServer();

export default Settings;
