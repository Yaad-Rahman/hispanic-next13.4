import clsx from 'clsx';
import React, { forwardRef } from 'react';

import { Loader } from '@/libs/Icons/Loader';

import { classes } from './styles';
import type { ButtonProps } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      loading = false,
      size = 'medium',
      label,
      className = '',
      startIcon,
      fullWidth = false,
      ...htmlButtonElementProps
    }: ButtonProps,
    ref
  ): JSX.Element => {
    return (
      <button
        ref={ref}
        className={clsx(
          fullWidth && 'w-full',
          !fullWidth && 'w-fit',
          variant !== 'text' && classes.default,
          variant !== 'text' &&
            htmlButtonElementProps.disabled &&
            classes.variant.disabled,
          htmlButtonElementProps.disabled && classes.disabled,
          variant !== 'text' && classes.size[size],
          classes.variant[variant],
          className
        )}
        {...htmlButtonElementProps}
      >
        <div className="flex w-full items-center justify-center">
          {loading ? (
            <Loader className="h-6 w-6 text-blue-500" />
          ) : (
            <div className="flex items-center gap-3">
              {startIcon && <div>{startIcon}</div>}
              {label && <span className="whitespace-nowrap">{label}</span>}
            </div>
          )}
        </div>
      </button>
    );
  }
);

Button.displayName = 'Button';
