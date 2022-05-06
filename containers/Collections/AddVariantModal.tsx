import React, { useCallback, useState } from 'react';
import AddIconTrailButton from '@components/UI/buttons/AddIconTrailButton';
import Modal from '@components/UI/modal/Modal';
import AddVariantContainer from './AddVariantContainer';

const AddVariantModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const openModal = useCallback(() => setOpen(true), [setOpen]);

  return (
    <>
      <AddIconTrailButton
        onClick={openModal}
        aria-label="Open Add Variant Modal"
      />
      <Modal open={open} setOpen={setOpen}>
        <AddVariantContainer setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default AddVariantModal;
