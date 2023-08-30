import type { TicketCategoryType } from '@/types/ticketType';
import ApiFetch from '@/utils/ApiFetch';

async function getEventTicketCategories(authToken: string, eventId: number) {
  const response = await ApiFetch<TicketCategoryType[], 'single'>({
    url: `ticket-category/available/tickets/event/${eventId}`,
    method: 'GET',
    authToken,
  });

  return response;
}

export { getEventTicketCategories };
