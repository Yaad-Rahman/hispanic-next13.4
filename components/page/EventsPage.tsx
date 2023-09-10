'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {
  CategorySelector,
  EventCard,
  Heading,
  Input,
  NotFound,
  Pagination,
} from '@hispanic-ui';

import { EventCategories } from '@/constants/testData';
import { useEvents } from '@/hooks/events/useEvents';
import { usePagination } from '@/hooks/usePagination';
import { useSearch } from '@/hooks/useSearch';
import { FormatDateTime } from '@/libs/helpers/FormatDate';
import type { PaginationType } from '@/types/commonTypes';
import type { EventObjectWithTickets } from '@/types/eventType';

import { Container } from '../layout/Container';
import { ViewTicketsModal } from './events/ViewTicketsModal';

export const EventsPage = ({
  events,
  pagination,
}: {
  events: EventObjectWithTickets[];
  pagination: PaginationType;
}) => {
  const { search, handleSearch } = useSearch('name');
  const { onPageChange } = usePagination();

  const {
    downloading,
    selectedEvent,
    setSelectedEvent,
    handleTicketViewAll,
    handleDownloadTicket,
  } = useEvents(events);

  return (
    <div className="pt-defaultPadding">
      <img src="/images/homepage/flagRope.svg" alt="flags" className="w-full" />
      <Container>
        <div className="mt-24">
          <div className="flex items-center justify-between pr-1">
            <Heading level={2.5} color="white">
              Events
            </Heading>
            <Input
              startIcon={
                <MagnifyingGlassIcon className="mt-[11px] h-6 w-6 stroke-gray-500 pr-1" />
              }
              name="search"
              placeholder="Search"
              value={search}
              onChange={(event) => handleSearch(event.currentTarget.value)}
            />
          </div>
        </div>
        <div className="py-16">
          <CategorySelector categories={EventCategories} />
        </div>
        {events.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 pb-16 sm:grid-cols-3">
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
                isPurchased={
                  eventObj.tickets ? eventObj.tickets?.length > 0 : false
                }
                onClickViewAll={handleTicketViewAll}
              />
            ))}
          </div>
        ) : (
          <NotFound message="No events found" color="white" />
        )}
      </Container>
      <Pagination
        currentPage={pagination.currentPage}
        onPageChange={onPageChange}
        pageSize={pagination.pageSize}
        totalCount={pagination.totalCount}
      />
      <img
        src="/images/homepage/event-down.svg"
        alt="design"
        className="my-24 w-full"
      />

      {/* view tickets modal of an event */}

      {selectedEvent && (
        <ViewTicketsModal
          downloading={downloading}
          handleDownloadTicket={handleDownloadTicket}
          isOpen={!!selectedEvent}
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};
