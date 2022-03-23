import React, { useCallback, useState } from 'react';
import AddIconButton from '@components/UI/buttons/AddIconButton';
import Modal from '@components/UI/modal/Modal';
import AddProductCategoryContainer from './AddProductCategoryContainer';

const AddProductCategoryModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const openModal = useCallback(() => setOpen(true), [setOpen]);

  return (
    <>
      <AddIconButton
        onClick={openModal}
        aria-label="Open Add Product Category Modal"
      />
      <Modal open={open} setOpen={setOpen}>
        <AddProductCategoryContainer setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default AddProductCategoryModal;