// import * as htmlToImage from 'html-to-image';
import { toJpeg } from 'html-to-image';
import { useState } from 'react';
import { toast } from 'react-toastify';

import type { EventObjectWithTickets } from '@/types/eventType';
import type { TicketType } from '@/types/ticketType';

export const useEvents = (events: EventObjectWithTickets[]) => {
  const [selectedEvent, setSelectedEvent] =
    useState<EventObjectWithTickets | null>(null);
  const [tickets, setTickets] = useState<TicketType[] | null>(null);
  const [downloading, setDownloading] = useState<boolean>(false);

  const handleTicketViewAll = (id: number) => {
    const event = events.find((e) => e.event.id === id);
    setSelectedEvent(event || null);
    if (event?.tickets) {
      setTickets(event.tickets);
    }
  };

  const handleDownloadTicket = (
    node: HTMLElement,
    eventName: string,
    ticketId: string
  ) => {
    const loading = toast.loading('Downloading...');
    setDownloading(true);
    toJpeg(node, { quality: 1 }).then((dataUrl) => {
      const link = document.createElement('a');
      link.download = `${eventName}_${ticketId}.jpeg`;
      link.href = dataUrl;
      link.click();
    });
    setDownloading(false);
    toast.update(loading, {
      render: 'Ticket Downloaded',
      type: 'success',
      isLoading: false,
      autoClose: 3000,
      closeOnClick: true,
    });
  };

  return {
    downloading,
    selectedEvent,
    setSelectedEvent,
    handleTicketViewAll,
    handleDownloadTicket,
    tickets,
  };
};
