import { useState } from 'react';

import type { EventObjectWithTickets } from '@/types/eventType';
import type { TicketType } from '@/types/ticketType';

export const useEvents = (events: EventObjectWithTickets[]) => {
  const [selectedEvent, setSelectedEvent] =
    useState<EventObjectWithTickets | null>(null);
  const [tickets, setTickets] = useState<TicketType[] | null>(null);

  const handleTicketViewAll = (id: number) => {
    const event = events.find((e) => e.event.id === id);
    setSelectedEvent(event || null);
    if (event?.tickets) {
      setTickets(event.tickets);
    }
  };

  return {
    selectedEvent,
    setSelectedEvent,
    handleTicketViewAll,
    tickets,
  };
};
