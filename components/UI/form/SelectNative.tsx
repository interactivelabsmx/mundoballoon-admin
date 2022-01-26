import { forwardRef, InputHTMLAttributes } from 'react';
import classNames from '../../../lib/utils/classnames';
import ErrorText from './ErrorText';
import LabelBase from './LabeBase';

type ISelectNative = InputHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  options: any[];
  optionLabel: string;
  optionValue: string;
};

const SelectNative = (
  { label, error, options, optionLabel, optionValue, ...input }: ISelectNative,
  ref
): JSX.Element => (
  <>
    <LabelBase label={label} htmlFor={input.name} />
    <div className="mt-1">
      <select
        {...input}
        className={classNames(
          'mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md',
          input.className
        )}
        ref={ref}
      >
        {options.map((opt) => (
          <option key={opt[optionValue]} value={opt[optionValue]}>
            {opt[optionLabel]}
          </option>
        ))}
      </select>
    </div>
    {error && <ErrorText text={error} fieldName={input.name} />}
  </>
);

export default forwardRef<HTMLSelectElement, ISelectNative>(SelectNative);
