import React from 'react';
import AdminLayot from '../../layouts/AdminLayot';
import AddProductForm from '../../components/Products/AddProductForm';

const AddProduct = (): JSX.Element => <AddProductForm />;

AddProduct.Layout = AdminLayot;

export default AddProduct;
