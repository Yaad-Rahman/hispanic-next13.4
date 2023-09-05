import { Field } from 'formik';
import { useMemo } from 'react';

import { Typography } from '../Typography';
import type { RadioButtonType } from './types';

export const RadioButton = ({
  name,
  labelTitle,
  labelSubTitle,
  value,
}: RadioButtonType) => {
  const randomPrefix = useMemo(
    () => Math.random().toString(36).substring(7),
    []
  );

  const id = randomPrefix + name;
  return (
    <label className="flex cursor-pointer items-center gap-5" htmlFor={id}>
      <Field
        type="radio"
        name={name}
        id={id}
        value={String(value) || ''}
        className="h-6 w-6 accent-primary-600"
      />
      <div>
        <Typography lexend weight="bold">
          {labelTitle}
        </Typography>
        <Typography className="mt-1" lexend weight="bold" variant="lightGray">
          {labelSubTitle}
        </Typography>
      </div>
    </label>
  );
};
