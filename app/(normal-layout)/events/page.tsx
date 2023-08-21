import { getAllEvents } from '@/api/eventsApi';
import { EventsPage } from '@/components/page/EventsPage';
import { FormatPagination } from '@/libs/helpers/FormatPagination';

export default async function Events({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const currentTimestamp = Date.now();
  const isUpcoming = searchParams?.category === 'Upcoming';
  const isPast = searchParams?.category === 'Past';

  const eventsData = await getAllEvents({
    name: searchParams?.name ?? '',
  });

  let events = eventsData.payload.content;
  if (isUpcoming) {
    events = events.filter((event) => event.eventDateTime > currentTimestamp);
  }

  if (isPast)
    events = events.filter((event) => event.eventDateTime < currentTimestamp);

  // pagination
  const pagination = FormatPagination(eventsData.payload);

  return <EventsPage events={events} pagination={pagination} />;
}
