import clsx from 'clsx';
import React, { useMemo, useState } from 'react';

import { classes } from '../Input/styles';
import type { SelectProps } from './types';

export const Select = ({
  name,
  placeholder = '',
  label,
  onChange,
  value,
  validationError,
  isDirty = false,
  transparent = false,
  startIcon,
  options,
}: SelectProps) => {
  const [touched, setTouched] = useState(isDirty);

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

  const raiseOnChange = (e: React.FormEvent<HTMLSelectElement>): void => {
    setTouched(true);

    if (onChange) {
      console.log('the select components', e.currentTarget.value);
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
        <select
          id={id}
          name={name}
          onChange={raiseOnChange}
          placeholder={placeholder}
          value={value}
          className={clsx(
            classes.default,
            borderClass,
            transparent && classes.background.transparent,
            !transparent && classes.background.white,
            startIcon && 'pl-11'
          )}
        >
          <option value="" disabled>
            Select {label}
          </option>
          {options &&
            options.map((optionName, index) => (
              <option
                className="w-full bg-white p-5"
                key={index}
                value={optionName}
              >
                {optionName}
              </option>
            ))}
        </select>
      </div>
      {validationError && (
        <span className="mt-2 text-xs text-red-700">{validationError}</span>
      )}
    </div>
  );
};
