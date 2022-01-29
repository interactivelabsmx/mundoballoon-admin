import React from 'react';
import withAuthServer from '@lib/firebaseAuth/withAuthServer';
import AdminLayout from '@layouts/AdminLayout';

const Orders = (): JSX.Element => (
  <AdminLayout>
    <div>Orders</div>
  </AdminLayout>
);

export const getServerSideProps = withAuthServer();

export default Orders;
