import { Heading } from '../Heading';
import { Typography } from '../Typography';
import type { EventCardType } from './types';

export const EventCard = ({
  address,
  date,
  eventImage,
  eventName,
  isFree,
  price,
  time,
}: EventCardType) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
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
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <img src="/logos/map-pin.svg" alt="map pin" className="h-5 w-5" />
          <Typography variant="medium" weight="bold" lexend>
            {address}
          </Typography>
        </div>
        {isFree ? (
          <Typography size="xl" weight="bold" variant="medium" lexend>
            FREE
          </Typography>
        ) : (
          <Typography
            variant="noStyle"
            size="xl"
            className="text-amber-600"
            weight="bold"
            lexend
          >
            {price}
          </Typography>
        )}
      </div>
    </div>
  );
};