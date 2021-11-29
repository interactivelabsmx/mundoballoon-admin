import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import AddProductForm from '../../components/Products/AddProductForm';
import withAuthServer from '../../lib/firebaseAuth/withAuthServer';
import SectionHeader from '../../components/UI/SectionHeader';

const AddProduct = (): JSX.Element => (
  <AdminLayout>
    <SectionHeader text="Add Product" />
    <AddProductForm />
  </AdminLayout>
);

export const getServerSideProps = withAuthServer();

export default AddProduct;
