import { useEffect } from 'react';
import { ControllerRenderProps, FieldPath, FieldValues } from 'react-hook-form';

interface IUseAutoSelectFirst<
  T,
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> {
  field: ControllerRenderProps<TFieldValues, TName>;
  data?: T;
  list: keyof T;
  prop: TName;
}

const useAutoSelectFirst = <
  T extends Record<string, unknown>,
  IFieldValues extends FieldValues,
  TName extends FieldPath<IFieldValues>
>({
  field,
  data,
  list,
  prop,
}: IUseAutoSelectFirst<T, IFieldValues, TName>) => {
  useEffect(() => {
    if (data) {
      const elements = data[list] as Array<T>;

      if (!field.value && elements.length > 0) {
        // this timeout is to allow react-hook-form finish register and allow for
        // watch and other APIs to execute properly when there is no network call
        setTimeout(() => {
          field.onChange({
            target: { value: elements[0][prop] },
            name: field.name,
          });
        }, 1);
      }
    }
  }, [field, data, list, prop]);
};

export default useAutoSelectFirst;
