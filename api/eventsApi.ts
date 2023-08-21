import type { EventType } from '@/types/eventType';
import ApiFetch from '@/utils/ApiFetch';

async function getAllEvents(params?: any) {
  const response = await ApiFetch<EventType[]>({
    url: 'events/all',
    method: 'GET',
    auth: true,
    params,
  });

  return response;
}

async function getEvent(id: number) {
  const response = await ApiFetch<EventType, 'single'>({
    url: `events/eventId/${id}`,
    method: 'GET',
    auth: true,
  });

  return response;
}

export { getAllEvents, getEvent };
