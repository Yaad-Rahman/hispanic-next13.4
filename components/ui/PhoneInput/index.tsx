'use client';

import 'react-phone-number-input/style.css';

import clsx from 'clsx';
import React, { useMemo, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';

import { classes } from '../Input/styles';
import type { InputProps } from '../Input/types';

export const PhoneNumberInput = ({
  label,
  onChange,
  value,
  validationError,
  isDirty = false,
  transparent = false,
}: Omit<
  InputProps,
  'startIcon' | 'type' | 'placeholder' | 'readOnly' | 'onChange'
> & { onChange: (params: string | undefined) => void }) => {
  const [touched, setTouched] = useState(isDirty);
  const borderClass = useMemo(
    () =>
      touched && validationError ? classes.errorBorder : 'border-primary-300',
    [touched, validationError]
  );

  const raiseOnChange = (val: any): void => {
    setTouched(true);

    if (onChange) {
      onChange(val);
    }
  };

  return (
    <div>
      {label && <label className={classes.label}>{label}</label>}
      <PhoneInput
        international={false}
        flags={flags}
        value={value}
        onChange={raiseOnChange}
        className={clsx(
          classes.default,
          borderClass,
          transparent && classes.background.transparent,
          !transparent && classes.background.white
        )}
      />
      {validationError && (
        <span className="mt-2 text-xs text-red-700">{validationError}</span>
      )}
    </div>
  );
};
