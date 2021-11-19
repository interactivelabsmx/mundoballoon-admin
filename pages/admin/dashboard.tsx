import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import PrimaryButton from '../../components/UI/buttons/PrimaryButton';
import withAuthServer from '../../lib/firebaseAuth/withAuthServer';

const Dashboard = (): JSX.Element => (
  <AdminLayout>
    <div className="flex">
      <PrimaryButton>Base Button</PrimaryButton>
    </div>
  </AdminLayout>
);

export const getServerSideProps = withAuthServer();

export default Dashboard;
