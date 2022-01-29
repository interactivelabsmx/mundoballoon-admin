import { useRouter } from 'next/router';
import React from 'react';
import withAuthServer from '@lib/firebaseAuth/withAuthServer';
import AdminLayout from '@layouts/AdminLayout';
import AddProductVariant from '@components/Products/AddProductVariant';
import SectionHeader from '@components/UI/SectionHeader';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';
import LoadingText from '@components/UI/loading/LoadingText';
import { Product } from '@graphql/graphql';
import { useGetProductByIdQuery } from '@graphql/queries/products/productById';

const AddProduct = (): JSX.Element => {
  const router = useRouter();
  const { pid } = router.query;
  const { loading, error, data } = useGetProductByIdQuery({
    variables: { productId: +pid },
  });
  const product = data?.productById as Product;
  return (
    <AdminLayout>
      <SectionHeader text="Add Product Variants" />
      {error && (
        <SimpleTextAlert
          text={error.message}
          type={SimpleTextAlertType.ERROR}
        />
      )}
      {loading ? <LoadingText /> : <AddProductVariant product={product} />}
    </AdminLayout>
  );
};

export const getServerSideProps = withAuthServer();

export default AddProduct;
