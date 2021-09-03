import React from 'react';
import { withAuthUserTokenSSR } from 'next-firebase-auth';
import withAuthServerSideProps from '../../lib/withAuthServerSideProps';
import Admin from '../../layouts/Admin';

const Dashboard = (): JSX.Element => (
  <>
    <div className="flex flex-wrap">
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4"></div>
      <div className="w-full xl:w-4/12 px-4"></div>
    </div>
    <div className="flex flex-wrap mt-4">
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4"></div>
      <div className="w-full xl:w-4/12 px-4"></div>
    </div>
  </>
);

export const getServerSideProps = withAuthUserTokenSSR()(
  //@ts-expect-error argument not provided
  withAuthServerSideProps()()
);

Dashboard.Layout = Admin;

export default Dashboard;
