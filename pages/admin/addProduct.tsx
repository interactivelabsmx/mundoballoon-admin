import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import AddProductForm from '../../components/Products/AddProductForm';

const AddProduct = (): JSX.Element => (
  <AdminLayout>
    <AddProductForm />
  </AdminLayout>
);

export default AddProduct;
