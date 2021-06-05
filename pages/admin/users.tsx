import React from 'react';
import withAuthServerSideProps from '../../lib/withAuthServerSideProps';
import { withAuthUserTokenSSR } from 'next-firebase-auth';
import CardTable from '../../components/Cards/CardTable';
import Admin from '../../layouts/Admin';

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withAuthUserTokenSSR()(
  withAuthServerSideProps()()
);

Tables.layout = Admin;
