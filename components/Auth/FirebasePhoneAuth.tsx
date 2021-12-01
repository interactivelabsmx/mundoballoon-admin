import { Dispatch, useState } from 'react';
import { ConfirmationResult, User } from '@firebase/auth';
import SecundaryButton from '../UI/buttons/SecundaryButton';
import { PhoneIcon } from '@heroicons/react/solid';
import Modal from '../UI/modal/Modal';
import FirebasePhoneForm from './FirebasePhoneForm';
import FirebasePhoneCodeForm from './FirebasePhoneCodeForm';

interface IFirebasePhoneAuth {
  onAuthComplete: (user: User) => void;
  setRequestError: Dispatch<string>;
}

const FirebasePhoneAuth = ({
  onAuthComplete,
  setRequestError,
}: IFirebasePhoneAuth) => {
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <SecundaryButton onClick={openModal}>
        <span className="sr-only">Phone</span>
        <PhoneIcon height={20} />
      </SecundaryButton>
      <div id="recaptcha-verifier-container" />
      <Modal open={open} setOpen={setOpen}>
        <div className="sm:flex sm:items-start">
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
            <div className="mt-2 w-full">
              {!confirmationResult ? (
                <FirebasePhoneForm
                  onCancel={closeModal}
                  setRequestError={setRequestError}
                  setConfirmationResult={setConfirmationResult}
                />
              ) : (
                <FirebasePhoneCodeForm
                  onCancel={closeModal}
                  setRequestError={setRequestError}
                  onAuthComplete={onAuthComplete}
                  confirmationResult={confirmationResult}
                />
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FirebasePhoneAuth;
