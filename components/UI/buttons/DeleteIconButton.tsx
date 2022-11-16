import { TrashIcon } from '@heroicons/react/24/outline';
import { ButtonHTMLAttributes } from 'react';
import SecundaryButton from './SecundaryButton';

const DeleteIconButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <SecundaryButton {...props} className="px-3 rounded-md">
    <span className="sr-only">{props['aria-label']}</span>
    <TrashIcon className="h-6 w-6" aria-hidden="true" />
  </SecundaryButton>
);

export default DeleteIconButton;
