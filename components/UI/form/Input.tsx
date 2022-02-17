import { forwardRef, InputHTMLAttributes, LegacyRef, ReactNode } from 'react';
import classNames from '@lib/utils/classnames';
import ErrorText from './ErrorText';
import LabelBase from './LabeBase';

type IInput = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  error?: string;
  leading?: ReactNode;
};

const Input = (
  { label, error, leading, type = 'text', ...input }: IInput,
  ref: LegacyRef<HTMLInputElement> | undefined
) => (
  <>
    <LabelBase label={label} htmlFor={input.name || ''} />
    <div className="mt-1 relative">
      {leading && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">{leading}</span>
        </div>
      )}
      <input
        {...input}
        type={type}
        aria-labelledby={label}
        className={classNames(
          input.className,
          (leading && 'pl-7') || '',
          'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
        )}
        ref={ref}
      />
    </div>
    {error && <ErrorText text={error} fieldName={input.name || ''} />}
  </>
);

export default forwardRef<HTMLInputElement, IInput>(Input);
