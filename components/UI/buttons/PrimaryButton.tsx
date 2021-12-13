import { ButtonHTMLAttributes } from 'react';
import BaseButton from './BaseButton';

const primaryClassNames =
  'bg-indigo-600 hover:bg-indigo text-white focus:ring-indigo-500';

const PrimaryButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <BaseButton {...props} className={primaryClassNames} />
);

export default PrimaryButton;
