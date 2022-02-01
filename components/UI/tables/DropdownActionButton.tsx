import { IDropdownActionsItem } from './DropdownActions';

const DropdownActionButton = ({
  Icon,
  label,
  onClick,
}: IDropdownActionsItem) => (
  <button
    className="group flex items-center px-4 py-2 text-sm"
    onClick={onClick}
  >
    <Icon
      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
      aria-hidden="true"
    />
    {label}
  </button>
);

export default DropdownActionButton;
