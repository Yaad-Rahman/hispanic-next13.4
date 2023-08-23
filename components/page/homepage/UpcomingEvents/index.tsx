import { Button, Heading } from '@hispanic-ui';
import clsx from 'clsx';

import { Container } from '@/components/layout/Container';
import { EventCard } from '@/components/ui/Card/EventCard';
import { UpcomingEventsData } from '@/constants/testData';

export const UpcomingEvents = ({
  forEventPage,
}: {
  forEventPage?: boolean;
}) => {
  return (
    <div
      style={
        !forEventPage
          ? {
              background:
                'linear-gradient(360deg, #431A24 0%, rgba(67, 26, 36, 0.00) 100%), #081F3F',
            }
          : undefined
      }
    >
      {!forEventPage && (
        <img
          src="/images/homepage/flagRope.svg"
          alt="flags"
          className="w-full py-24"
        />
      )}

      <Container>
        <Heading level={5} color="white">
          Events
        </Heading>
        <div className="flex justify-between">
          <Heading level={2.5} color="white" lexend className="mt-3">
            Upcoming Events
          </Heading>
          <Button label="View all" variant="black" />
        </div>
        <div
          className={clsx(
            'mt-16 grid grid-cols-1 gap-8',
            !forEventPage && 'sm:grid-cols-3',
            forEventPage && 'sm:grid-cols-2'
          )}
        >
          {UpcomingEventsData.map((event, index) => (
            <EventCard
              id={2}
              address={event.address}
              date={event.date}
              eventImage={event.eventImage}
              eventName={event.eventName}
              isFree={event.isFree}
              key={index}
            />
          ))}
        </div>
      </Container>
      {!forEventPage && (
        <img
          src="/images/homepage/event-down.svg"
          alt="down style"
          className="w-full pt-24"
        />
      )}
    </div>
  );
};
