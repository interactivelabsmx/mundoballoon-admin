import { useRouter } from 'next/router';
import React from 'react';
import withAuthServer from '@lib/firebaseAuth/withAuthServer';
import AdminLayout from '@layouts/AdminLayout';
import AddProductVariant from '@components/Products/AddProductVariant';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';
import SectionHeader from '@components/UI/headers/SectionHeader';
import LoadingText from '@components/UI/loading/LoadingText';
import { Product } from '@graphql/graphql';
import { useGetProductByIdQuery } from '@graphql/queries/products/productById';

const AddProductVariantRoute = (): JSX.Element => {
  const router = useRouter();
  const { pid = 0 } = router.query;
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

export default AddProductVariantRoute;
