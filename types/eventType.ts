import type { ImageType } from './commonTypes';

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
  address: null;
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
