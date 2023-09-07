import type { EventType } from './eventType';

// success page url ticket
export type URLTicketType = {
  ticketType: PostBookTicketType['ticketStatus'];
  totalTickets: number;
  totalAmount: number;
};

export type TicketType = {
  createdBy: string;
  creationDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  id: number;
  ticketUUID: string;
  eventId: number;
  userId: number;
  ticketCategoryId: number;
  categoryName: string;
  price: number;
  ticketStatus: PostBookTicketType['ticketStatus'];
  creationDateTimeStamp: number;
  creationDateTimetoInstant: number;
  lastModifiedDateTimetoInstant: number;
  lastModifiedDateTimeStamp: number;
};

export type TicketCategoryType = {
  createdBy: string;
  creationDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  id: number;
  categoryName: string;
  active: boolean;
  creationDateTimeStamp: number;
  creationDateTimetoInstant: number;
  lastModifiedDateTimetoInstant: number;
  lastModifiedDateTimeStamp: number;
};

export type TicketCounterListType = {
  createdBy: string;
  creationDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  id: number;
  ticketCategoryId: number;
  eventId: number;
  ticketCategoryName: string;
  totalCount: number;
  totalAvailable: number;
  totalSold: number;
  price: number;
  creationDateTimeStamp: number;
  creationDateTimetoInstant: number;
  lastModifiedDateTimetoInstant: number;
  lastModifiedDateTimeStamp: number;
};

export interface GetTicketCountWithEventType {
  event: EventType;
  eventTicketCounterList: TicketCounterListType[];
}

export interface PostBookTicketType {
  eventId: number;
  ticketCartRequestSet: [
    {
      quantity: number;
      ticketCategoryId: number;
    }
  ];
  ticketStatus: 'FREE' | 'BOOKED' | 'AVAILABLE' | 'PAY_LATER';
  tokenRequest: {
    currencyType: string;
    token: string | null;
  };
}
