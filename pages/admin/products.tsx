import React from 'react';
import withAuthServer from '@lib/firebaseAuth/withAuthServer';
import AdminLayout from '@layouts/AdminLayout';
import ErrorSection from '@layouts/ErrorSection';
import LoadingSection from '@layouts/LoadingSection';
import SecundaryButton from '@components/UI/buttons/SecundaryButton';
import SectionHeader from '@components/UI/headers/SectionHeader';
import PrimaryLinkButton from '@components/UI/links/PrimaryLinkButton';
import BaseTable from '@components/UI/tables/BaseTable';
import { ProductDetailsFragment } from '@graphql/fragments/ProductDetailsFragment';
import { useDeleteProductMutation } from '@graphql/mutations/products/deleteProduct';
import { useAllProductsQuery } from '@graphql/queries/products/allProducts';
import { getProductColumns } from './products/columns';

const Products = (): JSX.Element => {
  const productsQueryVars = { first: 5, after: null };
  const { loading, error, data, fetchMore } = useAllProductsQuery({
    variables: productsQueryVars,
  });
  const [deleteProduct, { loading: deleteLoading, error: deleteError }] =
    useDeleteProductMutation();
  if (error || deleteError)
    return <ErrorSection text="Error loading products" />;
  if (loading || deleteLoading || !data) return <LoadingSection />;

  const onClickDelete = (productId: number) =>
    deleteProduct({ variables: { productId } });
  const columns = getProductColumns(onClickDelete);

  const { allProducts } = data;
  if (!allProducts?.nodes) return <LoadingSection />;
  const { nodes, pageInfo } = allProducts;
  const onClickNextPage = () =>
    fetchMore({ variables: { after: pageInfo.endCursor } });
  const onClickPrevPage = () =>
    fetchMore({ variables: { before: pageInfo.startCursor } });
  return (
    <AdminLayout>
      <SectionHeader text="Products" />
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <BaseTable<ProductDetailsFragment>
            data={nodes as ProductDetailsFragment[]}
            columns={columns}
          />
          <div className="flex justify-between mt-4">
            <SecundaryButton
              disabled={!pageInfo.hasPreviousPage}
              onClick={onClickPrevPage}
            >
              Prev Page
            </SecundaryButton>
            <SecundaryButton
              disabled={!pageInfo.hasNextPage}
              onClick={onClickNextPage}
            >
              Next Page
            </SecundaryButton>
          </div>
          <div className="mt-4 text-right">
            <PrimaryLinkButton href="/admin/products/add">
              Add New Product
            </PrimaryLinkButton>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export const getServerSideProps = withAuthServer();

export default Products;
