import React from 'react';
import { SimpleTextAlertType } from '@components/UI/alerts/AlertConfigTypes';
import SimpleTextAlert from '@components/UI/alerts/SimpleTextAlert';
import LoadingText from '@components/UI/loading/LoadingText';
import UserDetails from '@components/User/UserDetails';
import { UserFragment } from '@graphql/fragments/UserFragment';
import { useDeleteUserMutation } from '@graphql/mutations/user/DeleteUser';
import { useGrantAdminUserMutation } from '@graphql/mutations/user/GrantAdminUser';
import { useRevokeAdminUserMutation } from '@graphql/mutations/user/RevokeAdminUser';

interface IUserDetailsContainer {
  user: UserFragment;
}

const UserDetailsContainer = ({ user }: IUserDetailsContainer) => {
  const { userId } = user;
  const [deleteUser, { loading: deleteLoading, error: deleteError }] =
    useDeleteUserMutation();
  const onDeleteClick = () => deleteUser({ variables: { userId } });
  const [grantAdmin, { loading: grantLoading, error: grantError }] =
    useGrantAdminUserMutation();
  const onGrantAdminClick = () => grantAdmin({ variables: { userId } });
  const [revokeAdmin, { loading: revokeLoading, error: revokeError }] =
    useRevokeAdminUserMutation();
  const onRevokeAdminClick = () => revokeAdmin({ variables: { userId } });
  return (
    <>
      <UserDetails
        user={user}
        onDeleteClick={onDeleteClick}
        onGrantAdminClick={onGrantAdminClick}
        onRevokeAdminClick={onRevokeAdminClick}
      />
      {(grantError || deleteError || revokeError) && (
        <SimpleTextAlert
          text={
            grantError?.message || deleteError?.message || revokeError?.message
          }
          type={SimpleTextAlertType.ERROR}
        />
      )}
      {(grantLoading || revokeLoading || deleteLoading) && (
        <LoadingText text="Loading..." />
      )}
    </>
  );
};

export default UserDetailsContainer;
