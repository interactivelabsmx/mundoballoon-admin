import React from 'react';
import withAuthServerSideProps from '../../lib/withAuthServerSideProps';
import { withAuthUserTokenSSR } from 'next-firebase-auth';
import Admin from '../../layouts/Admin';

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4"></div>
        <div className="w-full xl:w-4/12 px-4">{/* <CardBarChart /> */}</div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4"></div>
        <div className="w-full xl:w-4/12 px-4"></div>
      </div>
    </>
  );
}

export const getServerSideProps = withAuthUserTokenSSR()(
  withAuthServerSideProps()()
);

Dashboard.layout = Admin;
