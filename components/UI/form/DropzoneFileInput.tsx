import { PhotographIcon } from '@heroicons/react/outline';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ControllerRenderProps, Path } from 'react-hook-form';
import { Base } from '@lib/utils/baseType';
import ErrorText from './ErrorText';
import InputFileList from './InputFileList';

interface IDropzoneFileInput<TFieldValues, TPath extends Path<TFieldValues>> {
  field: ControllerRenderProps<TFieldValues, TPath>;
  error?: string;
  multiple?: boolean;
}

const DropzoneFileInput = <
  TFieldValues extends Base,
  TPath extends Path<TFieldValues>
>({
  field,
  error = '',
  multiple = false,
}: IDropzoneFileInput<TFieldValues, TPath>) => {
  const [files, setFiles] = useState<File[]>([]);
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = [...files, ...acceptedFiles];
      setFiles(newFiles);
      field.onChange({
        target: { value: newFiles },
        name: field.name,
      });
    },
    [files, field]
  );
  const onRemove = (fileName: string) => {
    const newFiles = files.filter((f) => f.name !== fileName);
    setFiles(newFiles);
    field.onChange({
      target: { value: newFiles },
      name: field.name,
    });
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple,
    onDrop,
  });

  const hideAddFiles = !multiple && files.length > 0;
  return (
    <>
      {!hideAddFiles && (
        <div
          {...getRootProps({
            className:
              'flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md',
          })}
        >
          <div className="max-w-lg flex justify-center">
            <div className="text-center">
              <PhotographIcon
                className="h-12 w-12 text-gray-300 inline-block"
                aria-hidden="true"
              />
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file"
                  className="relative cursor-pointer rounded-md font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2"
                >
                  <span className="underline">Upload files</span>
                </label>
                <p className="pl-1">
                  {isDragActive ? 'or drop here' : 'or drag and drop here'}
                </p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      )}
      <input {...getInputProps({ className: 'sr-only' })} />
      {!!error && <ErrorText text={error} fieldName="dropzone-file" />}
      {!!files.length && <InputFileList files={files} onRemove={onRemove} />}
    </>
  );
};

export default DropzoneFileInput;
