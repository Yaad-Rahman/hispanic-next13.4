import clsx from 'clsx';

import { classes } from './styles';
import type { IconProps } from './types';

export const CheckIcon = ({ className = '' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className={clsx(classes.outline, className)}
    width="100%"
    height="100%"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);
