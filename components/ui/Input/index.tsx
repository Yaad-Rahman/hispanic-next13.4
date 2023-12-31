'use client';

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React, { useMemo, useState } from 'react';

import { classes } from './styles';
import type { InputProps } from './types';

export const Input = ({
  name,
  placeholder = '',
  type = 'text',
  label,
  onChange,
  value,
  validationError,
  isDirty = false,
  readOnly = false,
  transparent = false,
  helperText,
  startIcon,
}: InputProps) => {
  const [touched, setTouched] = useState(isDirty);
  const [inputType, setInputType] = useState<InputProps['type']>(type);

  const borderClass = useMemo(
    () =>
      touched && validationError ? classes.errorBorder : 'border-primary-300',
    [touched, validationError]
  );

  const randomPrefix = useMemo(
    () => Math.random().toString(36).substring(7),
    []
  );

  const id = randomPrefix + name;

  const raiseOnChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setTouched(true);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div>
      {label && (
        <label htmlFor={id} className={classes.label}>
          {label}
        </label>
      )}
      <div className="relative">
        {startIcon && <div className="absolute left-4 h-full">{startIcon}</div>}
        <input
          id={id}
          name={name}
          type={inputType}
          onChange={raiseOnChange}
          readOnly={readOnly}
          className={clsx(
            classes.default,
            borderClass,
            transparent && classes.background.transparent,
            !transparent && classes.background.white,
            startIcon && 'pl-11',
            type === 'password' && 'pr-11'
          )}
          placeholder={placeholder}
          value={value}
        />
        {type === 'password' &&
          (inputType === 'password' ? (
            <EyeSlashIcon
              onClick={() => setInputType('text')}
              className="absolute right-4 top-[10px] h-6 w-6 cursor-pointer"
            />
          ) : (
            <EyeIcon
              onClick={() => setInputType('password')}
              className="absolute right-4 top-[10px] h-6 w-6 cursor-pointer"
            />
          ))}
      </div>
      <div className="flex flex-col gap-2">
        {validationError && (
          <span className="mt-2 text-xs text-red-700">{validationError}</span>
        )}
        {helperText && (
          <span className="font-lexendFont text-sm text-gray-600">
            {helperText}
          </span>
        )}
      </div>
    </div>
  );
};
