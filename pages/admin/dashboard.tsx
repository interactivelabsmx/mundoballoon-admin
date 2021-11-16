import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import PrimaryButton from '../../components/UI/buttons/PrimaryButton';

const Dashboard = (): JSX.Element => (
  <AdminLayout>
    <div className="flex">
      <PrimaryButton>Base Button</PrimaryButton>
    </div>
  </AdminLayout>
);

export default Dashboard;
