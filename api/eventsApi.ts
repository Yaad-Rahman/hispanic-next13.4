import type { EventType } from '@/types/eventType';
import ApiFetch from '@/utils/ApiFetch';

async function getAllEvents() {
  const response = await ApiFetch<EventType[]>({
    url: 'events/all',
    method: 'GET',
    auth: true,
  });

  return response;
}

export { getAllEvents };
