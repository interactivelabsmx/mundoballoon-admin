import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { ButtonHTMLAttributes } from 'react';
import SecundaryButton from './SecundaryButton';

const AddIconTrailButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <SecundaryButton
    {...props}
    className="px-3 rounded-none rounded-r-md border-l-0"
  >
    <span className="sr-only">{props['aria-label']}</span>
    <PlusCircleIcon className="h-6 w-6" aria-hidden="true" />
  </SecundaryButton>
);

export default AddIconTrailButton;
