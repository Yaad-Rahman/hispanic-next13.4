import { cookies } from 'next/headers';

import { getAllEvents } from '@/api/eventsApi';
import { getTicketCountOfAnEvent } from '@/api/ticketsApi';
import { SingleEventPage } from '@/components/page/SingleEventPage';

export default async function SingleEvent({ params }: { params: any }) {
  const { id } = params;
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value ?? '';
  const [upcomingEventsData, ticketCountWithEventsData] = await Promise.all([
    getAllEvents(token),
    getTicketCountOfAnEvent(token, id),
  ]);

  return (
    <SingleEventPage
      upcomingEvents={upcomingEventsData.payload.content.filter(
        (c) => c.event.id !== 55
      )}
      event={ticketCountWithEventsData.payload.event}
      ticketCounterList={
        ticketCountWithEventsData.payload.eventTicketCounterList
      }
    />
  );
}
