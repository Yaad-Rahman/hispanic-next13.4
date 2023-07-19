import { Button, Heading } from '@hispanic-ui';

import { Container } from '@/components/layout/Container';
import { EventCard } from '@/components/ui/Card/EventCard';
import { UpcomingEventsData } from '@/constants/testData';

export const UpcomingEvents = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient(360deg, #431A24 0%, rgba(67, 26, 36, 0.00) 100%), #081F3F',
      }}
    >
      <img
        src="/images/homepage/flagRope.svg"
        alt="flags"
        className="w-full py-24"
      />
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
        <div className="mt-16 grid grid-cols-3 gap-8">
          {UpcomingEventsData.map((event, index) => (
            <EventCard
              address={event.address}
              date={event.date}
              eventImage={event.eventImage}
              eventName={event.eventName}
              isFree={event.isFree}
              price={event.price}
              time={event.time}
              key={index}
            />
          ))}
        </div>
      </Container>
      <img
        src="/images/homepage/event-down.svg"
        alt="down style"
        className="w-full pt-24"
      />
    </div>
  );
};
