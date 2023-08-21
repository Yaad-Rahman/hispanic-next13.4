import { getEvent } from '@/api/eventsApi';
import { SingleEventPage } from '@/components/page/SingleEventPage';

export default function SingleEvent({ params }: { params: any }) {
  const { id } = params;

  const eventData = getEvent(id);

  console.log('event data', eventData);

  return <SingleEventPage />;
}
