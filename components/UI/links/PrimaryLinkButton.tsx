import { AnchorHTMLAttributes } from 'react';
import BaseLinkButton from './BaseLinkButton';

const primaryClassNames =
  'bg-indigo-600 hover:bg-indigo text-white focus:ring-indigo-500';

const PrimaryLinkButton = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <BaseLinkButton {...props} className={primaryClassNames} />
);

export default PrimaryLinkButton;
