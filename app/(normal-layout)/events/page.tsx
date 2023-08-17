import { getAllEvents } from '@/api/eventsApi';
import { EventsPage } from '@/components/page/EventsPage';

export default async function Events() {
  const events = await getAllEvents();

  return <EventsPage events={events.payload.content} />;
}
