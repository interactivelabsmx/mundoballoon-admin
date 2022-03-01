import React from 'react';
import withAuthServer from '@lib/firebaseAuth/withAuthServer';
import AdminLayout from '@layouts/AdminLayout';
import AddProductContainer from '@containers/Products/AddProductContainer';
import SectionHeader from '@components/UI/headers/SectionHeader';

const AddProduct = () => (
  <AdminLayout>
    <SectionHeader text="Add Product" />
    <AddProductContainer />
  </AdminLayout>
);

export const getServerSideProps = withAuthServer();

export default AddProduct;
