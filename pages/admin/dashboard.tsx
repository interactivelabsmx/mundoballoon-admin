import React from 'react';
import withAuthServer from '@lib/firebaseAuth/withAuthServer';
import AdminLayout from '@layouts/AdminLayout';
import SectionHeader from '@components/UI/headers/SectionHeader';

const Dashboard = () => (
  <AdminLayout>
    <SectionHeader text="Dashboard Page" />
  </AdminLayout>
);

export const getServerSideProps = withAuthServer();

export default Dashboard;
