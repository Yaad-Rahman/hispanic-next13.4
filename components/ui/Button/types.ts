import type { ButtonHTMLAttributes } from 'react';

export type ButtonProps = {
  label: string | undefined;
  loading?: boolean;
  size?: 'xs' | 'small' | 'medium' | 'large';
  variant: 'black' | 'white' | 'blue' | 'lightBlue' | 'text';
  className?: string;
  startIcon?: JSX.Element | undefined;
  fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
