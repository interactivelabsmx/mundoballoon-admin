import Link from 'next/link';
import { IDropdownActionsItem } from './DropdownActions';

const DropdownActionLink = ({ url, Icon, label }: IDropdownActionsItem) => (
  <Link href={url || ''}>
    <a className="group flex items-center px-4 py-2 text-sm">
      <Icon
        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
        aria-hidden="true"
      />
      {label}
    </a>
  </Link>
);

export default DropdownActionLink;
