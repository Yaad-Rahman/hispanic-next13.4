'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {
  CategorySelector,
  EventCard,
  Heading,
  Input,
  Pagination,
} from '@hispanic-ui';

import { Container } from '@/components/layout/Container';
import { EventCategories, UpcomingEventsData } from '@/constants/testData';

export default function Events() {
  return (
    <div className="pt-defaultPadding">
      <img src="/images/homepage/flagRope.svg" alt="flags" className="w-full" />
      <Container>
        <div className="mt-24">
          <div className="flex items-center justify-between">
            <Heading level={2.5} color="white">
              Events
            </Heading>
            <Input
              startIcon={
                <MagnifyingGlassIcon className="mt-[11px] h-6 w-6 stroke-gray-500 pr-1" />
              }
              name="search"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="py-16">
          <CategorySelector categories={EventCategories} />
        </div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-16 pb-16">
          {UpcomingEventsData.concat(
            UpcomingEventsData,
            UpcomingEventsData
          ).map((event, index) => (
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
      <Pagination
        currentPage={2}
        onPageChange={() => {}}
        pageSize={5}
        totalCount={50}
      />
      <img
        src="/images/homepage/event-down.svg"
        alt="design"
        className="my-24 w-full"
      />
    </div>
  );
}
