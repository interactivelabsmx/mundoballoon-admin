import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import AddProductForm from '../../components/Products/AddProductForm';
import withAuthServer from '../../lib/firebaseAuth/withAuthServer';

const AddProduct = (): JSX.Element => (
  <AdminLayout>
    <AddProductForm />
  </AdminLayout>
);

export const getServerSideProps = withAuthServer();

export default AddProduct;
