import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
} from 'react';
import { Base } from '@lib/utils/baseType';
import classNames from '@lib/utils/classnames';
import ErrorText from './ErrorText';
import LabelBase from './LabeBase';

export interface ISimpleSelectOptions {
  label: string;
  value: string | number;
}

type ISelectNative<T> = InputHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  options: Readonly<T[]>;
  optionLabel: keyof T;
  optionValue: keyof T;
  addToOptionsComponent?: ReactNode;
};

const SelectNative = <T extends Base>(
  {
    label,
    error,
    options,
    optionLabel,
    optionValue,
    addToOptionsComponent,
    ...input
  }: ISelectNative<T>,
  ref: ForwardedRef<HTMLSelectElement>
) => (
  <div className="w-full">
    <LabelBase label={label} htmlFor={input.name || ''} />
    <div className="mt-1 flex rounded-md shadow-sm">
      <select
        {...input}
        ref={ref}
        className={classNames(
          'flex-1 min-w-0 block w-full px-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
          !addToOptionsComponent ? 'rounded-md' : 'rounded-none rounded-l-md',
          input.className
        )}
      >
        {options.map((opt) => (
          <option key={opt[optionValue]} value={opt[optionValue]}>
            {opt[optionLabel]}
          </option>
        ))}
      </select>
      {addToOptionsComponent}
    </div>
    {error && <ErrorText text={error} fieldName={input.name || ''} />}
  </div>
);

export default forwardRef(SelectNative) as <T>(
  props: ISelectNative<T> & { ref: ForwardedRef<HTMLSelectElement> }
) => JSX.Element;
