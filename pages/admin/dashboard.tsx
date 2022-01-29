import React from 'react';
import withAuthServer from '@lib/firebaseAuth/withAuthServer';
import AdminLayout from '@layouts/AdminLayout';
import SectionHeader from '@components/UI/SectionHeader';

const Dashboard = (): JSX.Element => (
  <AdminLayout>
    <SectionHeader text="Dashbaord" />
  </AdminLayout>
);

export const getServerSideProps = withAuthServer();

export default Dashboard;
