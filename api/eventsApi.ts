import type { EventType, SingleEventType } from '@/types/eventType';
import ApiFetch from '@/utils/ApiFetch';

async function getAllEvents(authToken: string, params?: any) {
  const response = await ApiFetch<EventType[]>({
    url: 'events/all',
    method: 'GET',
    authToken,
    params,
  });

  return response;
}

async function getEvent(authToken: string, id: number) {
  const response = await ApiFetch<SingleEventType, 'single'>({
    url: `events/eventId/${id}`,
    method: 'GET',
    authToken,
  });

  return response;
}

export { getAllEvents, getEvent };
