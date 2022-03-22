import { PlusCircleIcon } from '@heroicons/react/outline';
import React, { useCallback, useState } from 'react';
import SecundaryButton from '@components/UI/buttons/SecundaryButton';
import Modal from '@components/UI/modal/Modal';
import AddProductCategoryContainer from './AddProductCategoryContainer';

const AddProductCategoryModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const openModal = useCallback(() => setOpen(true), [setOpen]);

  return (
    <>
      <SecundaryButton
        onClick={openModal}
        className="px-3 rounded-none rounded-r-md border-l-0"
      >
        <span className="sr-only">Close sidebar</span>
        <PlusCircleIcon className="h-6 w-6" aria-hidden="true" />
      </SecundaryButton>
      <Modal open={open} setOpen={setOpen}>
        <AddProductCategoryContainer setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default AddProductCategoryModal;
