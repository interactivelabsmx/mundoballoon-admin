import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

const baseClassNames =
  'inline-flex items-center justify-center px-3 py-2 border border-transparent leading-4 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';

const BaseButton = ({
  type = 'button',
  children,
  className,
  onClick,
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    type={type}
    className={classNames(baseClassNames, className)}
    onClick={onClick}
  >
    {children}
  </button>
);

export default BaseButton;
