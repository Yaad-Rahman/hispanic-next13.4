import { Heading } from '../Heading';
import { Typography } from '../Typography';
import type { EventCardType } from './types';

export const EventCard = ({
  address,
  date,
  eventImage,
  eventName,
  isFree,
  time,
}: EventCardType) => {
  return (
    <div className="flex flex-col rounded-lg bg-white p-6 shadow-lg">
      <img
        src={eventImage}
        alt="event"
        className="h-[240px] w-full object-cover"
      />
      <div className="mt-8 flex items-center gap-1">
        <img src="/logos/calender.svg" alt="calender" className="h-6 w-6" />
        <Typography
          variant="noStyle"
          className=" text-button-primary"
          weight="bold"
          lexend
        >
          {date} • {time}
        </Typography>
      </div>
      <div className=" mt-[10px] flex items-center justify-between">
        <Heading level={4} lexend>
          {eventName}
        </Heading>
        <img
          src="/logos/arrow-up-right.svg"
          alt="arrow up right"
          className="h-6 w-6"
        />
      </div>
      <div className="flex h-full flex-col justify-end">
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img src="/logos/map-pin.svg" alt="map pin" className="h-5 w-5" />
            <Typography variant="medium" weight="bold" lexend>
              {address}
            </Typography>
          </div>

          <Typography
            variant={isFree ? 'medium' : 'noStyle'}
            size="xl"
            className={isFree ? undefined : 'text-amber-600'}
            weight="bold"
            lexend
          >
            {isFree ? 'FREE' : 'PAID'}
          </Typography>
        </div>
      </div>
    </div>
  );
};
