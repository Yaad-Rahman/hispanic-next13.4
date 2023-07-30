import { useMemo } from 'react';

import { classes } from './styles';
import type { CheckboxType } from './types';

export const Checkbox = ({ label }: CheckboxType) => {
  const randomPrefix = useMemo(
    () => Math.random().toString(36).substring(7),
    []
  );

  const id = randomPrefix;

  return (
    <div className="flex items-center gap-2">
      <input
        className={classes.checkbox}
        type="checkbox"
        id={id}
        name="vehicle1"
        onChange={(e) => console.log('checkbox', e)}
      />
      <label htmlFor={id} className={classes.label}>
        {label}
      </label>
    </div>
  );
};
