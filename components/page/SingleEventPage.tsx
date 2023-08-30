'use client';

import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { UpcomingEvents } from '@hispanic-page-ui';
import { Heading, Typography } from '@hispanic-ui';

import { FormatDateTime } from '@/libs/helpers/FormatDate';
import type { EventObjectWithTickets, EventType } from '@/types/eventType';

import { Container } from '../layout/Container';
import { BookTicket } from './events/BookTicket';

export const SingleEventPage = ({
  event,
  upcomingEvents,
}: {
  event: EventType;
  upcomingEvents: EventObjectWithTickets[];
}) => {
  return (
    <div
      className="pt-defaultPadding"
      style={{
        background:
          'linear-gradient(360deg, #081F3F 1.04%, rgba(67, 26, 36, 0.66) 43.23%, rgba(67, 26, 36, 0.00) 100%)',
      }}
    >
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row">
          <div className="basis-8/12">
            <Heading level={2} weight="normal" color="white">
              {event.name}
            </Heading>
            <div className="mt-5 flex items-center gap-1">
              <CalendarDaysIcon className="h-6 w-6 text-white" />
              <Typography variant="white" weight="bold" size="xl" lexend>
                {FormatDateTime(event.eventDateTime)}
              </Typography>
            </div>
            <div className="mt-5 flex items-center gap-2 text-gray-500">
              <MapPinIcon className="h-6 w-6" />
              <Typography variant="noStyle" weight="bold" size="xl" lexend>
                {event.venue}
              </Typography>
            </div>
            <img
              className="mt-6 aspect-[399/292] w-full object-cover"
              src={event.photo.fileUrl}
              alt="event"
            />
            <Typography className="my-10" size="xl" variant="white" lexend>
              {event.description}
            </Typography>
            <img
              className="aspect-[800/347] w-full object-cover"
              src="/test/event-location.svg"
              alt="event location"
            />
            <div className="my-24">
              <UpcomingEvents events={upcomingEvents} forEventPage />
            </div>
          </div>
          <div className="basis-4/12">
            <BookTicket event={event} />
          </div>
        </div>
      </Container>
    </div>
  );
};
