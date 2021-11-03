import React from 'react';
import { withAuthUserTokenSSR } from 'next-firebase-auth';
import withAuthServerSideProps from '../../lib/withAuthServerSideProps';
import AdminLayout from '../../layouts/AdminLayot';
import PrimaryButton from '../../components/UI/buttons/PrimaryButton';

const Dashboard = (): JSX.Element => (
  <>
    <div className="flex">
      <PrimaryButton>Base Button</PrimaryButton>
    </div>
  </>
);

export const getServerSideProps = withAuthUserTokenSSR()(
  //@ts-expect-error argument not provided
  withAuthServerSideProps()()
);

Dashboard.Layout = AdminLayout;

export default Dashboard;
