import React from 'react';
import withAuthServer from '@lib/firebaseAuth/withAuthServer';
import AdminLayout from '@layouts/AdminLayout';
import SectionHeader from '@components/UI/headers/SectionHeader';
import AddProductContainer from '@containers/Products/AddProductContainer';

const AddProduct = () => (
  <AdminLayout>
    <SectionHeader text="Add Product" />
    <AddProductContainer />
  </AdminLayout>
);

export const getServerSideProps = withAuthServer();

export default AddProduct;
