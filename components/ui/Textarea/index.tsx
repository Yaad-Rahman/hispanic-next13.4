import clsx from 'clsx';
import React, { useMemo, useState } from 'react';

import { classes } from '../Input/styles';
import type { InputProps } from '../Input/types';

export const Textarea = ({
  name,
  label,
  placeholder,
  validationError,
  transparent = false,
  rows,
  value,
  isDirty,
  onChange,
}: Omit<InputProps, 'onChange'> & {
  rows: number;
  onChange?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
}) => {
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

  const raiseOnChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
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
      <textarea
        id={id}
        name={name}
        rows={rows}
        value={value}
        onChange={raiseOnChange}
        className={clsx(
          'resize-none',
          classes.default,
          borderClass,
          transparent && classes.background.transparent,
          !transparent && classes.background.white
        )}
        placeholder={placeholder}
      />
      {validationError && (
        <p className="text-xs text-red-700">{validationError}</p>
      )}
    </div>
  );
};
