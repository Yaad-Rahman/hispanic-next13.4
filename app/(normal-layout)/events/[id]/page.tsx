import { getEvent } from '@/api/eventsApi';
import { getEventTicketCategories } from '@/api/ticketsApi';
import { SingleEventPage } from '@/components/page/SingleEventPage';

export default async function SingleEvent({ params }: { params: any }) {
  const { id } = params;

  const eventData = await getEvent(id);

  const ticketCategoriesData = await getEventTicketCategories(id);

  return (
    <SingleEventPage
      event={eventData.payload.event}
      ticketCategories={ticketCategoriesData.payload}
    />
  );
}
