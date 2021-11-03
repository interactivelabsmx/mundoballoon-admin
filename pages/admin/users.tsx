import React from 'react';
import { withAuthUserTokenSSR } from 'next-firebase-auth';
import withAuthServerSideProps from '../../lib/withAuthServerSideProps';
import AdminLayot from '../../layouts/AdminLayot';

const Users = (): JSX.Element => <div>Users</div>;

export const getServerSideProps = withAuthUserTokenSSR()(
  //@ts-expect-error argument not provided
  withAuthServerSideProps()()
);

Users.Layout = AdminLayot;

export default Users;
