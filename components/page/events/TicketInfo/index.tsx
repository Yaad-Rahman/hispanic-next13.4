import { Typography } from '@hispanic-ui';

import type { TicketInfoType } from './types';

export const TicketInfo = ({ info }: TicketInfoType) => {
  return (
    <div className="flex flex-col gap-3">
      {info.length > 0 &&
        info.map((item, index) => (
          <div key={index} className="flex w-full items-center justify-between">
            <div className="flex items-center gap-1 text-gray-500">
              {item.icon}
              <Typography
                size="small"
                variant="lightGray"
                weight="medium"
                lexend
              >
                {item.key}
              </Typography>
            </div>
            <Typography
              className="text-primary-500"
              variant="noStyle"
              size="small"
              weight="medium"
              lexend
            >
              {item.value}
            </Typography>
          </div>
        ))}
    </div>
  );
};
