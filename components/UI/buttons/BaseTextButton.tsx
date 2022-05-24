import { ButtonHTMLAttributes } from 'react';
import classNames from '@lib/utils/classnames';

const baseClassNames =
  'rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';

const BaseTextButton = ({
  type = 'button',
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    type={type}
    className={classNames(
      baseClassNames,
      className,
      (props.disabled && 'disabled:opacity-50') || ''
    )}
    {...props}
  >
    {children}
  </button>
);

export default BaseTextButton;
