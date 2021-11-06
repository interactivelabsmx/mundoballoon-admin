import { ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';
import BaseButton from './BaseButton';

const secundaryClassNames =
  'border-gray-300 bg-white text-gray-500 hover:bg-gray-50';

const SecundaryButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <BaseButton
    {...props}
    className={classnames(secundaryClassNames, props.className)}
  />
);

export default SecundaryButton;
