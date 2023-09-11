import type { InputProps } from '../Input/types';

export type SelectProps = Omit<InputProps, 'readOnly' | 'type' | 'onChange'> & {
  options: (string | number)[];
  onChange?: (event: React.FormEvent<HTMLSelectElement>) => void;
};
