import React, { useCallback, useState } from 'react';
import AddIconTrailButton from '@components/UI/buttons/AddIconTrailButton';
import Modal from '@components/UI/modal/Modal';
import AddVariantsTypeContainer from './AddVariantsTypeContainer';

const AddVariantsTypeModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const openModal = useCallback(() => setOpen(true), [setOpen]);

  return (
    <>
      <AddIconTrailButton
        onClick={openModal}
        aria-label="Open Add Variant Type Modal"
      />
      <Modal open={open} setOpen={setOpen}>
        <AddVariantsTypeContainer setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default AddVariantsTypeModal;
