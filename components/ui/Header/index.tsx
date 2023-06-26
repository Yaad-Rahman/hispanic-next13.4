import clsx from 'clsx';
import React from 'react';

import { classes } from './styles';
import type { HeadingProps } from './types';

export const Header = ({
  children,
  variant = 'titleL',
  weight = 'bold',
  className = '',
  color = 'dark',
  center = false,
}: HeadingProps) => {
  return (
    <h2
      className={clsx(
        classes.color[color],
        classes.variant[variant],
        center && 'text-center',
        weight === 'bold' && classes.bold,
        weight === 'semibold' && classes.semibold,
        className
      )}
    >
      {children}
    </h2>
  );
};
