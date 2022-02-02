import {
  PencilAltIcon,
  PlusCircleIcon,
  TrashIcon,
} from '@heroicons/react/solid';
import { MouseEvent } from 'react';
import { Row } from 'react-table';
import DropdownActions from '@components/UI/tables/DropdownActions';
import { Product } from '@graphql/graphql';

export const getItems = (
  productId: number,
  onClickDelete: (productId: number) => void
) => [
  {
    id: `Edit${productId}`,
    url: `/admin/products/edit/${productId}`,
    label: 'Edit',
    Icon: PencilAltIcon,
  },
  {
    onClick: (evt: MouseEvent<HTMLButtonElement>) => {
      evt.preventDefault();
      onClickDelete(productId);
    },
    id: `Delete${productId}`,
    label: 'Delete',
    Icon: TrashIcon,
  },
  {
    id: `Variants${productId}`,
    url: `/admin/products/variants/add/${productId}`,
    label: 'Add Variant',
    Icon: PlusCircleIcon,
  },
];

export const getColumns = (onClickDelete: (productId: number) => void) => [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Description',
    accessor: 'description',
  },
  {
    Header: 'Category',
    accessor: 'category.name',
  },
  {
    Header: 'Price',
    accessor: 'price',
  },
  {
    id: 'actions',
    Header: () => null,
    Cell: ({ row }: { row: Row<Product> }) => {
      const { productId } = row.original;
      const items = getItems(productId, onClickDelete);
      return <DropdownActions label="Actions" items={items} />;
    },
  },
];
