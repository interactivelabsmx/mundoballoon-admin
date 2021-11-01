import React from 'react';
import { withAuthUserTokenSSR } from 'next-firebase-auth';
import withAuthServerSideProps from '../../lib/withAuthServerSideProps';
import Admin from '../../layouts/Admin';
import AddProductForm from '../../components/Products/AddProductForm';

const AddProduct = (): JSX.Element => (
  <div className="flex flex-wrap mt-4">
    <div className="w-full xl:w-6/12">
      <AddProductForm />
    </div>
  </div>
);

export const getServerSideProps = withAuthUserTokenSSR()(
  //@ts-expect-error argument not provided
  withAuthServerSideProps()()
);

AddProduct.Layout = Admin;

export default AddProduct;
