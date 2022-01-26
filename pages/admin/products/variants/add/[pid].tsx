import { useRouter } from 'next/router';
import React from 'react';
import AddProductVariant from '../../../../../components/Products/AddProductVariant';
import { SimpleTextAlertType } from '../../../../../components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '../../../../../components/UI/alerts/SimpleTextAlert';
import LoadingText from '../../../../../components/UI/loading/LoadingText';
import SectionHeader from '../../../../../components/UI/SectionHeader';
import AdminLayout from '../../../../../layouts/AdminLayout';
import withAuthServer from '../../../../../lib/firebaseAuth/withAuthServer';
import { Product } from '../../../../../types/graphql';
import { useGetProductByIdQuery } from './graphql/productById.gql';

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
