import { XIcon } from '@heroicons/react/solid';
import {
  DismissAlertButtonColors,
  SimpleTextAlertType,
} from './AlertConfigTypes';

interface IDismissAlertButton {
  type: SimpleTextAlertType;
  onClick: () => void;
}

const DismissAlertButton = ({ type, onClick }: IDismissAlertButton) => (
  <div className="-mx-1.5 -my-1.5">
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex ${DismissAlertButtonColors[type].map(
        (k) => ` ${k} `
      )} rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 `}
    >
      <span className="sr-only">Dismiss</span>
      <XIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  </div>
);

export default DismissAlertButton;
