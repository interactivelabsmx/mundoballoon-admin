import React from 'react';
import { withAuthUserTokenSSR } from 'next-firebase-auth';
import withAuthServerSideProps from '../../lib/withAuthServerSideProps';
import AdminLayot from '../../layouts/AdminLayot';

const Settings = (): JSX.Element => (
  <div className="flex flex-wrap">
    <div className="w-full lg:w-8/12 px-4"></div>
    <div className="w-full lg:w-4/12 px-4"></div>
  </div>
);

export const getServerSideProps = withAuthUserTokenSSR()(
  //@ts-expect-error argument not provided
  withAuthServerSideProps()()
);

Settings.layout = AdminLayot;

export default Settings;
