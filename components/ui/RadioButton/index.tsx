import { useMemo, useRef } from 'react';

import { Typography } from '../Typography';
import type { RadioButtonType } from './types';

export const RadioButton = ({
  name,
  labelTitle,
  labelSubTitle,
}: RadioButtonType) => {
  const buttonRef = useRef<any>();
  const randomPrefix = useMemo(
    () => Math.random().toString(36).substring(7),
    []
  );

  const id = randomPrefix + name;
  return (
    <div className="flex items-center gap-5">
      <input
        type="radio"
        name={name}
        id={id}
        ref={buttonRef}
        className="h-6 w-6 accent-primary-600"
      />
      <label
        className="cursor-pointer"
        onClick={() => buttonRef.current?.click()}
        htmlFor={id}
      >
        <Typography lexend weight="bold">
          {labelTitle}
        </Typography>
        <Typography className="mt-1" lexend weight="bold" variant="lightGray">
          {labelSubTitle}
        </Typography>
      </label>
    </div>
  );
};
