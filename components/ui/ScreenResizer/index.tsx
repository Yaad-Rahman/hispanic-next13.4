import clsx from 'clsx';
import React from 'react';

type ScreenResizerProps = {
  displayOnly: 'desktop' | 'mobile';
  children: React.ReactNode;
};

export const ScreenResizer = ({
  displayOnly,
  children,
}: ScreenResizerProps) => {
  return (
    <div
      className={clsx(
        displayOnly === 'mobile' && 'block md:hidden',
        displayOnly === 'desktop' && 'hidden md:block'
      )}
    >
      {children}
    </div>
  );
};
