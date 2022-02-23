import { HTMLAttributes, ReactNode } from 'react';
import classNames from '@lib/utils/classnames';

interface HTMLHeadingElement {
  children: ReactNode;
}

const baseClassNames = 'text-gray-900 text-lg leading-6 font-medium';

const TextHeader = ({
  children,
  className,
}: HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={classNames(baseClassNames, className)}>{children}</h3>
);

export default TextHeader;
