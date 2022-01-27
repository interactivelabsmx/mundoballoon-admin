import AdminLayout from '@layouts/AdminLayout';
import React from 'react';
import withAuthServer from '@lib/firebaseAuth/withAuthServer';

const Orders = (): JSX.Element => (
  <AdminLayout>
    <div>Orders</div>
  </AdminLayout>
);

export const getServerSideProps = withAuthServer();

export default Orders;
