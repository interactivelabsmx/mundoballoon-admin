import React from 'react';
import withAuthServer from '@lib/firebaseAuth/withAuthServer';
import AdminLayout from '@layouts/AdminLayout';

const Settings = (): JSX.Element => (
  <AdminLayout>
    <div>Settings</div>
  </AdminLayout>
);

export const getServerSideProps = withAuthServer();

export default Settings;
