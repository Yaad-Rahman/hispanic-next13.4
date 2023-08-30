import type { AddressType, ImageType } from './commonTypes';

export type EventType = {
  createdBy: string;
  creationDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  id: number;
  description: string;
  name: string;
  venue: string;
  photo: ImageType;
  address: AddressType | null;
  eventType: string;
  eventDateTime: number;
  deadlineBooking: number;
  numberOfSeats: number;
  maxTicketPurchasedAllowed: number;
  eventStatus: 'ACTIVE' | 'HIDDEN' | 'CANCELLED';
  active: null;
  paid: boolean;
  allSold: boolean;
  creationDateTimeStamp: number;
  creationDateTimetoInstant: number;
  lastModifiedDateTimetoInstant: number;
  lastModifiedDateTimeStamp: number;
};

export type EventObjectWithTickets = {
  event: EventType;
  ticketValue: string;
  tickets: any[];
  availableTickets: 50;
};

export type SingleEventType = {
  event: EventType;
  ticketValue: string;
  tickets: null;
  availableTickets: number;
};
