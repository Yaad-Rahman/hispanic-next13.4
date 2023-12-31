import { useRouter } from 'next/navigation';

import { Button } from '../Button';
import { Heading } from '../Heading';
import { Typography } from '../Typography';
import type { EventCardType } from './types';

export const EventCard = ({
  id,
  address,
  date,
  eventImage,
  eventName,
  isFree,
  price,
  isPurchased,
  onClickViewAll,
}: EventCardType) => {
  const router = useRouter();
  return (
    <div className="flex flex-col rounded-lg bg-white p-6 shadow-lg">
      <img
        src={eventImage}
        alt="event"
        className="h-[240px] w-full cursor-pointer object-cover"
        onClick={() => router.push(`/events/${id}`)}
      />
      <div className="mt-8 flex items-center gap-1">
        <img src="/logos/calender.svg" alt="calender" className="h-6 w-6" />
        <Typography
          variant="noStyle"
          className=" text-button-primary"
          weight="bold"
          lexend
        >
          {date}
        </Typography>
      </div>
      <div
        onClick={() => router.push(`/events/${id}`)}
        className="mt-[10px] flex cursor-pointer items-center justify-between"
      >
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
          {isPurchased ? (
            <Button
              onClick={() => onClickViewAll(id)}
              label="View Tickets"
              variant="black"
              size="xs"
            />
          ) : (
            <Typography
              variant={isFree ? 'medium' : 'noStyle'}
              size="xl"
              className={isFree ? undefined : 'text-amber-600'}
              weight="bold"
              lexend
            >
              {isFree ? 'FREE' : `$${price}`}
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};
