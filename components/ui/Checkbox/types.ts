import type { ChangeEvent } from 'react';

export type CheckboxType = {
  label: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
