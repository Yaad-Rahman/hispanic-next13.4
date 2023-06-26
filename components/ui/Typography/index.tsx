import clsx from 'clsx';
import React from 'react';

import { classes } from './styles';
import type { TypographyProps } from './types';

export const Typography = ({
  children,
  size = 'medium',
  variant = 'mediumDark',
  className = '',
  lexend = false,
  center = false,
}: TypographyProps) => {
  return (
    <p
      className={clsx(
        center && 'text-center',
        lexend && 'font-lexendFont',
        classes.size[size],
        classes.variant[variant],
        className
      )}
    >
      {children}
    </p>
  );
};
