import React from 'react';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import SecundaryButton from '@components/UI/buttons/SecundaryButton';
import PrimaryLinkButton from '@components/UI/links/PrimaryLinkButton';
import LoadingText from '@components/UI/loading/LoadingText';
import BaseTable from '@components/UI/tables/BaseTable';
import { ProductDetailsFragment } from '@graphql/fragments/ProductDetailsFragment';
import { useDeleteProductMutation } from '@graphql/mutations/products/deleteProduct';
import { useAllProductsQuery } from '@graphql/queries/products/allProducts';
import { getProductColumns } from './columns';

const ProductsTableContainer = () => {
  const productsQueryVars = { first: 5, after: null };
  const { loading, error, data, fetchMore } = useAllProductsQuery({
    variables: productsQueryVars,
  });
  const [deleteProduct, { loading: deleteLoading, error: deleteError }] =
    useDeleteProductMutation();
  if (error || deleteError)
    return <SimpleTextError text="Error loading products" />;
  if (loading || deleteLoading || !data) return <LoadingText />;

  const onClickDelete = (productId: number) =>
    deleteProduct({ variables: { productId } });
  const columns = getProductColumns(onClickDelete);

  const { allProducts } = data;
  if (!allProducts?.nodes) return <LoadingText />;
  const { nodes, pageInfo } = allProducts;
  const onClickNextPage = () =>
    fetchMore({ variables: { after: pageInfo.endCursor } });
  const onClickPrevPage = () =>
    fetchMore({ variables: { before: pageInfo.startCursor } });
  return (
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
  );
};

export default ProductsTableContainer;