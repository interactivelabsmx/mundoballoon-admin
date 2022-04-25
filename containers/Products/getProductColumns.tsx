import {
  ChevronDownIcon,
  ChevronRightIcon,
  PencilAltIcon,
  PlusCircleIcon,
  TrashIcon,
} from '@heroicons/react/solid';
import { MouseEvent } from 'react';
import { Column, Row, UseExpandedRowProps } from 'react-table';
import DropdownActions from '@components/UI/tables/DropdownActions';
import { ProductEntityFragment } from '@graphql/fragments/ProductEntityFragment';

export const getProductActions = (
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

export const getProductColumns = (
  onClickDelete: (productId: number) => void
): Column<ProductEntityFragment>[] => [
  {
    Header: () => null,
    id: 'expander',
    Cell: ({ row }: { row: UseExpandedRowProps<ProductEntityFragment> }) => (
      <span {...row.getToggleRowExpandedProps()} role="button">
        {row.isExpanded ? (
          <ChevronDownIcon className="mr-3 h-5 w-5" aria-hidden="true" />
        ) : (
          <ChevronRightIcon className="mr-3 h-5 w-5" aria-hidden="true" />
        )}
      </span>
    ),
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
    Cell: ({ row }: { row: Row<ProductEntityFragment> }) => {
      const { productId } = row.original;
      const items = getProductActions(productId, onClickDelete);
      return <DropdownActions label="Actions" items={items} />;
    },
  },
];
