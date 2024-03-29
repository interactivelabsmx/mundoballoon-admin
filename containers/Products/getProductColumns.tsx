import {
  ChevronDownIcon,
  ChevronRightIcon,
  PencilIcon,
  PlusCircleIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { MouseEvent } from 'react';
import { Row, Column, UseExpandedRowProps } from 'react-table';
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
    Icon: PencilIcon,
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
): Readonly<Column<ProductEntityFragment>[]> => [
  {
    id: 'expander',
    Header: () => null,
    // @ts-expect-error UseExpandedRowProps is not used formely on the Column<D> type
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
