import { useRouter } from 'next/router';
import React from 'react';
import withAuthServer from '@lib/firebaseAuth/withAuthServer';
import AdminLayout from '@layouts/AdminLayout';
import EditProductVariantContainer from '@containers/Products/EditProductVariantContainer';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';
import SectionHeader from '@components/UI/headers/SectionHeader';
import LoadingText from '@components/UI/loading/LoadingText';
import { ProductVariantDetailsFragment } from '@graphql/fragments/ProductVariantDetailsFragment';
import { useGetProductVariantByIdQuery } from '@graphql/queries/products/GetProductVariantById';

const AddProductVariantRoute = () => {
  const router = useRouter();
  const { pvid = 0 } = router.query;
  const { loading, error, data } = useGetProductVariantByIdQuery({
    variables: { productVariantId: +pvid },
  });
  const productVariant =
    data?.productVariantById as ProductVariantDetailsFragment;

  return (
    <AdminLayout>
      <SectionHeader text="Edit Product Variant" />
      {error && (
        <SimpleTextAlert
          text={error.message}
          type={SimpleTextAlertType.ERROR}
        />
      )}
      {loading ? (
        <LoadingText />
      ) : (
        <EditProductVariantContainer productVariant={productVariant} />
      )}
    </AdminLayout>
  );
};

export const getServerSideProps = withAuthServer();

export default AddProductVariantRoute;
