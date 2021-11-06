import React from 'react';
import AdminLayout from '../../layouts/AdminLayot';
import PrimaryButton from '../../components/UI/buttons/PrimaryButton';

const Dashboard = (): JSX.Element => (
  <div className="flex">
    <PrimaryButton>Base Button</PrimaryButton>
  </div>
);

Dashboard.Layout = AdminLayout;

export default Dashboard;
