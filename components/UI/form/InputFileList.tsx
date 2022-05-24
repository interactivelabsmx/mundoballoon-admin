import { PaperClipIcon } from '@heroicons/react/outline';
import PrimaryTextButton from '../buttons/PrimaryTextButton';

interface IInputFileList {
  files: File[];
  onRemove?: (fileName: string) => void;
}

const InputFileList = ({ files, onRemove }: IInputFileList) => (
  <ul
    role="list"
    className="border border-gray-200 rounded-md divide-y divide-gray-200 mt-4"
  >
    {files.map((file) => (
      <li
        key={file.name}
        className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
      >
        <div className="w-0 flex-1 flex items-center">
          <PaperClipIcon
            className="flex-shrink-0 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <span className="ml-2 flex-1 w-0 truncate">{file.name}</span>
        </div>
        <div className="ml-4 flex-shrink-0 flex space-x-4">
          {!!onRemove && (
            <PrimaryTextButton onClick={() => onRemove(file.name)}>
              Remove
            </PrimaryTextButton>
          )}
        </div>
      </li>
    ))}
  </ul>
);

export default InputFileList;
