import clsx from 'clsx';
import React from 'react';

import { classes } from './styles';
import type { TypographyProps } from './types';

export const Typography = ({
  children,
  size = 'medium',
  weight = 'normal',
  variant = 'dark',
  className = '',
  lexend = false,
  center = false,
}: TypographyProps) => {
  return (
    <p
      className={clsx(
        center && 'text-center',
        lexend && 'font-lexendFont',
        classes.weight(weight),
        classes.size[size],
        classes.variant[variant],
        className
      )}
    >
      {children}
    </p>
  );
};
