import React from 'react';
import withAuthServer from '@lib/firebaseAuth/withAuthServer';
import AdminLayout from '@layouts/AdminLayout';
import SectionHeader from '@components/UI/headers/SectionHeader';
import ProductsTableContainer from '@containers/Products/ProductsTableContainer';

const Products = () => (
  <AdminLayout>
    <SectionHeader text="Products" />
    <ProductsTableContainer />
  </AdminLayout>
);

export const getServerSideProps = withAuthServer();

export default Products;
