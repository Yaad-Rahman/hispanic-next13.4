import clsx from 'clsx';
import React from 'react';

import { classes } from './styles';
import type { HeadingProps } from './types';

export const Heading = ({
  children,
  level = 1,
  weight = 'bold',
  className = '',
  color = 'dark',
  lexend = false,
  center = false,
}: HeadingProps) => {
  return (
    <h2
      className={clsx(
        center && 'text-center',
        lexend && 'font-lexendFont',
        classes.color[color],
        classes.level[level],
        classes.fontWeight[weight],
        className
      )}
    >
      {children}
    </h2>
  );
};
