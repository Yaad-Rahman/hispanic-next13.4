import { Typography } from '@hispanic-ui';
import clsx from 'clsx';
import { useCallback } from 'react';

import type { BoardMemberType } from '@/types/boardType';

export const ImageCards = ({ members }: { members: BoardMemberType[] }) => {
  const colStart = useCallback((index: number, length: number) => {
    if (length % 4 <= 3 && length < 3 && index % 2 === 0) return 'col-start-2';
    return '';
  }, []);
  return (
    <div className="grid grid-cols-1 justify-center gap-x-8 gap-y-10 sm:grid-cols-4">
      {members.map((member, index, memberArray) => (
        <div
          key={index}
          className={clsx(
            'relative h-[352px]',
            colStart(index, memberArray.length)
          )}
        >
          <img
            src={member.displayPhoto?.fileUrl}
            alt="profile"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute bottom-0 w-full px-5 py-6"
            style={{
              background: 'rgba(5, 12, 31, 0.80)',
            }}
          >
            <Typography variant="white" size="large" weight="semibold" lexend>
              {member.name}
            </Typography>
            <Typography
              className="mt-3"
              variant="white"
              size="small"
              weight="medium"
              lexend
            >
              {member.designation}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};
