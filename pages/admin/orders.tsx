import React from 'react';
import { withAuthUserTokenSSR } from 'next-firebase-auth';
import withAuthServerSideProps from '../../lib/withAuthServerSideProps';
import AdminLayot from '../../layouts/AdminLayot';

const Orders = (): JSX.Element => (
  <div className="flex flex-wrap mt-4">
    <div className="w-full mb-12 px-4"></div>
    <div className="w-full mb-12 px-4"></div>
  </div>
);

export const getServerSideProps = withAuthUserTokenSSR()(
  //@ts-expect-error argument not provided
  withAuthServerSideProps()()
);

Orders.Layout = AdminLayot;

export default Orders;
