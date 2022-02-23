import React from 'react';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import SimpleTextWarning from '@components/UI/alerts/SimpleTextWarning';
import TableSubHeader from '@components/UI/headers/TableSubHeader';
import LoadingText from '@components/UI/loading/LoadingText';
import BaseTable from '@components/UI/tables/BaseTable';
import { ProductVariantEntityFragment } from '@graphql/fragments/ProductVariantEntityFragment';
import { useDeleteProductVariantMutation } from '@graphql/mutations/products/DeleteProductVariant';
import { useGetProductVariantsEntityByIdQuery } from '@graphql/queries/products/GetProductVariantsEntityById';
import { GetProductsEntityDocument } from '@graphql/queries/products/GetProductsEntity';
import { getProductVariantColumns } from './getProductVariantColumns';

interface IProductVariantsTableContainer {
  productId: number;
}

const ProductVariantsTableContainer = ({
  productId,
}: IProductVariantsTableContainer) => {
  const { loading, error, data } = useGetProductVariantsEntityByIdQuery({
    variables: { productId },
  });
  const [deleteProduct, { loading: deleteLoading, error: deleteError }] =
    useDeleteProductVariantMutation({
      refetchQueries: [{ query: GetProductsEntityDocument }],
    });
  if (error || deleteError)
    return <SimpleTextError text="Error loading products" />;
  if (loading || deleteLoading || !data) return <LoadingText />;

  const onClickDelete = (productVariantId: number) =>
    deleteProduct({ variables: { productVariantId } });
  const columns = getProductVariantColumns(onClickDelete);

  const { productVariantsEntityById: variants } = data;
  return (
    <div className="m-4">
      <TableSubHeader className="m-4 border-b border-gray-500">
        Product Variants
      </TableSubHeader>
      {variants.length ? (
        <BaseTable<ProductVariantEntityFragment>
          data={variants}
          columns={columns}
        />
      ) : (
        <SimpleTextWarning text="There are no Variants" />
      )}
    </div>
  );
};

export default ProductVariantsTableContainer;
