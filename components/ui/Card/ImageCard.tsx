// eslint-disable-next-line import/no-cycle
import { Heading, Typography } from '@hispanic-ui';
import clsx from 'clsx';
import React from 'react';

import type { ImageCardType } from './types';

export const ImageCard = ({
  title,
  subTitle,
  image,
  height,
  onClick,
}: ImageCardType & { onClick?: (e: React.MouseEvent) => void }) => {
  return (
    <div
      onClick={onClick}
      className="relative w-full cursor-pointer"
      style={{ height }}
    >
      <img src={image} alt="card" className="h-full w-full object-cover" />
      <div
        className={clsx(
          'absolute bottom-0 w-full',
          !subTitle && 'p-5',
          subTitle && 'px-5 py-6'
        )}
        style={{
          background: 'rgba(5, 12, 31, 0.80)',
        }}
      >
        <Heading
          level={subTitle ? 6 : 4}
          color="white"
          weight="semibold"
          lexend
        >
          {title}
        </Heading>

        {subTitle && (
          <Typography
            className="mt-3"
            variant="white"
            size="small"
            weight="medium"
            lexend
          >
            {subTitle}
          </Typography>
        )}
      </div>
    </div>
  );
};
