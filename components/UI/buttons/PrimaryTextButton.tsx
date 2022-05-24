import { ButtonHTMLAttributes } from 'react';
import BaseTextButton from './BaseTextButton';

const primaryClassNames =
  'text-indigo-600 hover:text-indigo-500 focus:ring-indigo-500';

const PrimaryTextButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <BaseTextButton {...props} className={primaryClassNames} />
);

export default PrimaryTextButton;
