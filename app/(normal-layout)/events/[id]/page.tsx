import { cookies } from 'next/headers';

import { getEvent } from '@/api/eventsApi';
import { getEventTicketCategories } from '@/api/ticketsApi';
import { SingleEventPage } from '@/components/page/SingleEventPage';

export default async function SingleEvent({ params }: { params: any }) {
  const { id } = params;
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value ?? '';
  const eventData = await getEvent(token, id);

  const ticketCategoriesData = await getEventTicketCategories(token, id);

  return (
    <SingleEventPage
      event={eventData.payload.event}
      ticketCategories={ticketCategoriesData.payload}
    />
  );
}
