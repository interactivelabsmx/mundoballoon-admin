import { HTMLAttributes, ReactNode } from 'react';
import classNames from '@lib/utils/classnames';

interface HTMLHeadingElement {
  children: ReactNode;
}

const baseClassNames = 'text-gray-500 text-md leading-6 font-medium';

const TableSubHeader = ({
  children,
  className,
}: HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={classNames(baseClassNames, className)}>{children}</h3>
);

export default TableSubHeader;
