export type InputProps = {
  name: string;
  placeholder?: string;
  children?: React.ReactNode | undefined;
  type?: 'text' | 'password' | 'date';
  label?: string | undefined;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  value?: string;
  readOnly?: boolean;
  validationError?: string;
  isDirty?: boolean;
  transparent?: boolean;
  helperText?: string;
  startIcon?: JSX.Element | undefined;
};
