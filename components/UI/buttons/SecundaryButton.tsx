import { ButtonHTMLAttributes } from 'react';
import classNames from '@lib/utils/classnames';
import BaseButton from './BaseButton';

const secundaryClassNames =
  'border-gray-300 bg-white text-gray-500 hover:bg-gray-50';

const SecundaryButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <BaseButton
    {...props}
    className={classNames(secundaryClassNames, props.className)}
  />
);

export default SecundaryButton;
