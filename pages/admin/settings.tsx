import React from 'react';
import withAuthServerSideProps from '../../lib/withAuthServerSideProps';
import { withAuthUserTokenSSR } from 'next-firebase-auth';
import CardSettings from '../../components/Cards/CardSettings';
import CardProfile from '../../components/Cards/CardProfile';
import Admin from '../../layouts/Admin';

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withAuthUserTokenSSR()(
  withAuthServerSideProps()()
);

Settings.layout = Admin;
