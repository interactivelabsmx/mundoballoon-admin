import React from 'react';
import { PAGING_QUERY_DEFAULT } from '@lib/utils/sharedConsts';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import SecundaryButton from '@components/UI/buttons/SecundaryButton';
import LoadingText from '@components/UI/loading/LoadingText';
import BaseTable from '@components/UI/tables/BaseTable';
import { FirebaseUserFragment } from '@graphql/fragments/FirebaseUserFragment';
import { useDeleteUserMutation } from '@graphql/mutations/user/DeleteUser';
import { useGetUsersQuery } from '@graphql/queries/users/GetUsers';
import { getUsersColumns } from './getUsersColumns';

const UsersTableContainer = () => {
  const { loading, error, data, fetchMore } = useGetUsersQuery({
    variables: PAGING_QUERY_DEFAULT,
  });
  const [deleteUser, { loading: deleteLoading, error: deleteError }] =
    useDeleteUserMutation();

  if (error || deleteError)
    return <SimpleTextError text="Error loading products" />;
  if (loading || deleteLoading || !data) return <LoadingText />;

  const onClickDelete = (userId: string) =>
    deleteUser({ variables: { userId } });
  const columns = getUsersColumns(onClickDelete);

  const { users } = data;
  if (!users?.nodes) return <LoadingText />;
  const { nodes, pageInfo } = users;
  const onClickNextPage = () =>
    fetchMore({ variables: { after: pageInfo.endCursor } });
  const onClickPrevPage = () =>
    fetchMore({ variables: { before: pageInfo.startCursor } });
  return (
    <div className="flex flex-wrap mt-4">
      <div className="w-full mb-12 px-4">
        <BaseTable<FirebaseUserFragment> data={nodes} columns={columns} />
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
      </div>
    </div>
  );
};

export default UsersTableContainer;
