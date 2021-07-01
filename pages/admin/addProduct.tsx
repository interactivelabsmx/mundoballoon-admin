import React from 'react';
import { withAuthUserTokenSSR } from 'next-firebase-auth';
import withAuthServerSideProps from '../../lib/withAuthServerSideProps';
import Admin from '../../layouts/Admin';

const AddProduct = (): JSX.Element => (
  <div className="flex flex-wrap mt-4">
    <div className="w-full mb-12 px-4"></div>
    <div className="w-full mb-12 px-4"></div>
  </div>
);

export const getServerSideProps = withAuthUserTokenSSR()(
  //@ts-expect-error argument not provided
  withAuthServerSideProps()()
);

AddProduct.layout = Admin;

export default AddProduct;
