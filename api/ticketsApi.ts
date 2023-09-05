import type {
  GetTicketCountWithEventType,
  PostBookTicketType,
} from '@/types/ticketType';
import ApiFetch from '@/utils/ApiFetch';

async function getTicketCountOfAnEvent(authToken: string, eventId: number) {
  const response = await ApiFetch<GetTicketCountWithEventType, 'single'>({
    url: `events/ticket-count/eventId/${eventId}`,
    method: 'GET',
    authToken,
  });

  return response;
}

async function postBookTicket(authToken: string, values: PostBookTicketType) {
  const response = await ApiFetch<any, 'single'>({
    url: 'tickets/book-tickets',
    method: 'POST',
    body: values,
    authToken,
  });

  return response;
}

export { getTicketCountOfAnEvent, postBookTicket };
