import { Button, Heading } from '@hispanic-ui';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

import { Container } from '@/components/layout/Container';
import { EventCard } from '@/components/ui/Card/EventCard';
import { FormatDateTime } from '@/libs/helpers/FormatDate';
import type { EventObjectWithTickets } from '@/types/eventType';

export const UpcomingEvents = ({
  events,
  forEventPage,
}: {
  events: EventObjectWithTickets[];
  forEventPage?: boolean;
}) => {
  const router = useRouter();
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
          <Button
            onClick={() => router.push('/events')}
            label="View all"
            variant="black"
          />
        </div>
        <div
          className={clsx(
            'mt-16 grid grid-cols-1 gap-8',
            !forEventPage && 'sm:grid-cols-3',
            forEventPage && 'sm:grid-cols-2'
          )}
        >
          {events.map((eventObj) => (
            <EventCard
              key={eventObj.event.id}
              id={eventObj.event.id}
              address={eventObj.event.venue}
              date={FormatDateTime(eventObj.event.eventDateTime)}
              eventImage={eventObj.event.photo.fileUrl}
              eventName={eventObj.event.name}
              isFree={!eventObj.event.paid}
              price={eventObj.ticketValue}
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
