import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { MouseEvent } from 'react';
import { Row, Column } from 'react-table';
import DropdownActions from '@components/UI/tables/DropdownActions';
import { FirebaseUserFragment } from '@graphql/fragments/FirebaseUserFragment';

export const getActions = (
  userId: string,
  onClickDelete: (userId: string) => void
) => [
  {
    id: `details${userId}`,
    url: `/admin/users/details/${userId}`,
    label: 'Details',
    Icon: PencilIcon,
  },
  {
    onClick: (evt: MouseEvent<HTMLButtonElement>) => {
      evt.preventDefault();
      onClickDelete(userId);
    },
    id: `disable${userId}`,
    label: 'Disable',
    Icon: TrashIcon,
  },
];

export const getUsersColumns = (
  onClickDelete: (userId: string) => void
): Readonly<Column<FirebaseUserFragment>[]> => [
  {
    Header: 'Name',
    accessor: 'displayName',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Phone',
    accessor: 'phoneNumber',
  },
  {
    Header: 'Roles',
    accessor: 'claims',
  },
  {
    id: 'actions',
    Header: () => null,
    Cell: ({ row }: { row: Row<FirebaseUserFragment> }) => {
      const { userId } = row.original;
      const items = getActions(userId, onClickDelete);
      return <DropdownActions label="Actions" items={items} />;
    },
  },
];
