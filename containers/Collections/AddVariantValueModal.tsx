import React, { useCallback, useState } from 'react';
import AddIconTrailButton from '@components/UI/buttons/AddIconTrailButton';
import Modal from '@components/UI/modal/Modal';
import AddVariantValueContainer from './AddVariantValueContainer';

interface IAddVariantValueModal {
  variantId: number;
}

const AddVariantValueModal = ({ variantId }: IAddVariantValueModal) => {
  const [open, setOpen] = useState<boolean>(false);
  const openModal = useCallback(() => setOpen(true), [setOpen]);

  return (
    <>
      <AddIconTrailButton
        onClick={openModal}
        aria-label="Open Add Variant Value Modal"
      />
      <Modal open={open} setOpen={setOpen}>
        <AddVariantValueContainer setOpen={setOpen} variantId={variantId} />
      </Modal>
    </>
  );
};

export default AddVariantValueModal;
