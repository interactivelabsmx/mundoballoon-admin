import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import classNames from '@lib/utils/classnames';

const baseClassNames =
  'inline-flex items-center justify-center px-3 py-2 border border-transparent leading-4 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';

const BaseLinkButton = ({
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Link href={props.href || ''}>
    <a className={classNames(baseClassNames, className)} {...props}>
      {children}
    </a>
  </Link>
);

export default BaseLinkButton;
