import { useState } from 'react';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import SecundaryButton from '@components/UI/buttons/SecundaryButton';
import { UserFragment } from '@graphql/fragments/UserFragment';
import UserDangerActionModal from './UserDangerActionModal';
import UserDetailsDisplayRow from './UserDetailsDisplayRow';

interface IUserDetails {
  user: UserFragment;
  onDeleteClick: () => void;
  onGrantAdminClick: () => void;
  onRevokeAdminClick: () => void;
}

const UserDetails = ({
  user,
  onDeleteClick,
  onGrantAdminClick,
  onRevokeAdminClick,
}: IUserDetails) => {
  const [deleteAlertModalOpen, setDeleteAlertModalOpen] = useState(false);
  const openDeleteAlertModal = () => setDeleteAlertModalOpen(true);
  const [adminAlertModalOpen, setAdminAlertModalOpen] = useState(false);
  const openAdminAlertModal = () => setAdminAlertModalOpen(true);
  const isAdmin = user.claims?.includes('ADMIN');
  return (
    <div>
      <div className="mt-5">
        <dl className="sm:divide-y sm:divide-gray-200">
          <UserDetailsDisplayRow
            label="Display Name"
            value={user.displayName}
          />
          <UserDetailsDisplayRow label="Email" value={user.email} />
          <UserDetailsDisplayRow label="Phone" value={user.phoneNumber} />
          <UserDetailsDisplayRow
            label="Roles"
            value={user.claims?.toString()}
          />
        </dl>
      </div>
      <div className="text-right">
        <SecundaryButton className="mr-4" onClick={openDeleteAlertModal}>
          Deactivate User
        </SecundaryButton>
        {isAdmin ? (
          <PrimaryButton onClick={onRevokeAdminClick}>
            Revoke Admin Acess
          </PrimaryButton>
        ) : (
          <PrimaryButton onClick={openAdminAlertModal}>
            Grant Admin Acess
          </PrimaryButton>
        )}
      </div>
      <UserDangerActionModal
        title="Deactivate account"
        description="Are you sure you want to deactivate the account? This action cannot be undone."
        ctaTile="Deactivate"
        open={deleteAlertModalOpen}
        setOpen={setDeleteAlertModalOpen}
        onPerformAction={onDeleteClick}
      />
      <UserDangerActionModal
        title="Grant Admin Access"
        description="Make sure the user is part of the team and needs this super access."
        ctaTile="Grant Acess"
        open={adminAlertModalOpen}
        setOpen={setAdminAlertModalOpen}
        onPerformAction={onGrantAdminClick}
      />
    </div>
  );
};

export default UserDetails;
