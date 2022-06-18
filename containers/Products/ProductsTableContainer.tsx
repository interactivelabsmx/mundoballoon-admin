import React, { useCallback } from 'react';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import SecundaryButton from '@components/UI/buttons/SecundaryButton';
import PrimaryLinkButton from '@components/UI/links/PrimaryLinkButton';
import LoadingText from '@components/UI/loading/LoadingText';
import BaseTable, { IExpandableRow } from '@components/UI/tables/BaseTable';
import { ProductEntityFragment } from '@graphql/fragments/ProductEntityFragment';
import { useDeleteProductMutation } from '@graphql/mutations/products/DeleteProduct';
import {
  GetProductsEntityDocument,
  useGetProductsEntityQuery,
} from '@graphql/queries/products/GetProductsEntity';
import ProductVariantsTableContainer from './ProductVariantsTableContainer';
import { getProductColumns } from './getProductColumns';

const ProductsTableContainer = () => {
  const pagingQueryVars = { first: 5, after: null };
  const { loading, error, data, fetchMore } = useGetProductsEntityQuery({
    variables: pagingQueryVars,
  });
  const [deleteProduct, { loading: deleteLoading, error: deleteError }] =
    useDeleteProductMutation({
      refetchQueries: [{ query: GetProductsEntityDocument }],
    });
  const expandableComponent = useCallback(
    ({ row }: IExpandableRow<ProductEntityFragment>) => (
      <tr>
        <td colSpan={5}>
          <ProductVariantsTableContainer productId={row.original.productId} />
        </td>
      </tr>
    ),
    []
  );

  if (error || deleteError)
    return <SimpleTextError text="Error loading products" />;
  if (loading || deleteLoading || !data) return <LoadingText />;

  const onClickDelete = (productId: number) =>
    deleteProduct({ variables: { productId } });
  const columns = getProductColumns(onClickDelete);

  const { productsEntity } = data;
  if (!productsEntity?.nodes) return <LoadingText />;
  const { nodes: products, pageInfo } = productsEntity;
  const onClickNextPage = () =>
    fetchMore({ variables: { after: pageInfo.endCursor } });
  const onClickPrevPage = () =>
    fetchMore({ variables: { before: pageInfo.startCursor } });
  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        <BaseTable<ProductEntityFragment>
          data={products}
          columns={columns}
          options={{
            isExpandable: true,
            expandableComponent,
          }}
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
