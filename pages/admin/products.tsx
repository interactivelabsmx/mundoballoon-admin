import React from 'react';
import withAuthServer from '@lib/firebaseAuth/withAuthServer';
import AdminLayout from '@layouts/AdminLayout';
import ProductsTableContainer from '@containers/Products/ProductsTableContainer';
import SectionHeader from '@components/UI/headers/SectionHeader';

const Products = () => (
  <AdminLayout>
    <SectionHeader text="Products" />
    <ProductsTableContainer />
  </AdminLayout>
);

export const getServerSideProps = withAuthServer();

export default Products;
