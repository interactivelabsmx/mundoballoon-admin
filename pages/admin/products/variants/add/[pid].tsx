import { useRouter } from 'next/router';
import React from 'react';
import withAuthServer from '@lib/firebaseAuth/withAuthServer';
import AdminLayout from '@layouts/AdminLayout';
import AddProductVariantContainer from '@containers/Products/AddProductVariantContainer';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';
import SectionHeader from '@components/UI/headers/SectionHeader';
import LoadingText from '@components/UI/loading/LoadingText';
import { ProductEntityFragment } from '@graphql/fragments/ProductEntityFragment';
import { useGetProductByIdQuery } from '@graphql/queries/products/GetProductById';

const AddProductVariantRoute = () => {
  const router = useRouter();
  const { pid = 0 } = router.query;
  const { loading, error, data } = useGetProductByIdQuery({
    variables: { productId: +pid },
  });
  const product = data?.productById as ProductEntityFragment;
  return (
    <AdminLayout>
      <SectionHeader text="Add Product Variant" />
      {error && (
        <SimpleTextAlert
          text={error.message}
          type={SimpleTextAlertType.ERROR}
        />
      )}
      {loading ? (
        <LoadingText />
      ) : (
        <AddProductVariantContainer product={product} />
      )}
    </AdminLayout>
  );
};

export const getServerSideProps = withAuthServer();

export default AddProductVariantRoute;
