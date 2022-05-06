import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import { MouseEvent } from 'react';
import { Row, Column } from 'react-table';
import DropdownActions from '@components/UI/tables/DropdownActions';
import { ProductVariantEntityFragment } from '@graphql/fragments/ProductVariantEntityFragment';

export const getProductVariantActions = (
  productVariantId: number,
  onClickDelete: (productId: number) => void
) => [
  {
    id: `Edit${productVariantId}`,
    url: `/admin/products/variants/edit/${productVariantId}`,
    label: 'Edit',
    Icon: PencilAltIcon,
  },
  {
    onClick: (evt: MouseEvent<HTMLButtonElement>) => {
      evt.preventDefault();
      onClickDelete(productVariantId);
    },
    id: `Delete${productVariantId}`,
    label: 'Delete',
    Icon: TrashIcon,
  },
];

export const getProductVariantColumns = (
  onClickDelete: (productVariantId: number) => void
): Readonly<Column<ProductVariantEntityFragment>[]> => [
  {
    Header: 'Sku',
    accessor: 'sku',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Description',
    accessor: 'description',
  },
  {
    Header: 'Price',
    accessor: 'price',
  },
  {
    id: 'actions',
    Header: () => null,
    Cell: ({ row }: { row: Row<ProductVariantEntityFragment> }) => {
      const { productVariantId } = row.original;
      const items = getProductVariantActions(productVariantId, onClickDelete);
      return <DropdownActions label="Actions" items={items} />;
    },
  },
];
