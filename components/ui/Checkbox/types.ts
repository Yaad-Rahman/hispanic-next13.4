import type { ChangeEvent } from 'react';

export type CheckboxType = {
  label: string;
  name: string;
  labelClassname?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
