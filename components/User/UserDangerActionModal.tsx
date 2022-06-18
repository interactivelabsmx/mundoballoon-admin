import { ExclamationIcon } from '@heroicons/react/outline';
import { Dispatch } from 'react';
import Modal from '@components/UI/modal/Modal';

interface IUserDangerActionModal {
  title: string;
  description: string;
  ctaTile: string;
  open: boolean;
  setOpen: Dispatch<boolean>;
  onPerformAction: () => void;
}

const UserDangerActionModal = ({
  open,
  setOpen,
  title,
  description,
  ctaTile,
  onPerformAction,
}: IUserDangerActionModal) => {
  const onCancelClick = () => setOpen(false);
  const onCtaClick = () => {
    setOpen(false);
    onPerformAction();
  };
  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title={
        <>
          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <ExclamationIcon
              className="h-6 w-6 text-red-600"
              aria-hidden="true"
            />
          </div>
          <div className="flex items-center justify-center">
            <h3 className="ml-4">{title}</h3>
          </div>
        </>
      }
    >
      <div className="sm:flex sm:items-start">
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <div className="mt-2">
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={onCtaClick}
        >
          {ctaTile}
        </button>
        <button
          type="button"
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
          onClick={onCancelClick}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default UserDangerActionModal;
