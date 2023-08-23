import {
  CalendarDaysIcon,
  ClockIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  QueueListIcon,
  TicketIcon,
} from '@heroicons/react/24/outline';

import { FormatDateTime } from '@/libs/helpers/FormatDate';
import type { EventType } from '@/types/eventType';

const TicketInfoData = (event: EventType) => [
  {
    icon: <CalendarDaysIcon className="h-6 w-6" />,
    key: 'Event Date',
    value: FormatDateTime(event.eventDateTime, 'only-date'),
  },
  {
    icon: <MapPinIcon className="h-6 w-6" />,
    key: 'Location',
    value: event.venue,
  },
  {
    icon: <ClockIcon className="h-6 w-6" />,
    key: 'Event Time',
    value: FormatDateTime(event.eventDateTime, 'only-time'),
  },
  {
    icon: <TicketIcon className="h-6 w-6" />,
    key: 'Ticket Type',
    value: 'Regular',
  },
  {
    icon: <QueueListIcon className="h-6 w-6" />,
    key: 'Ticket Quantity',
    value: '---',
  },
  {
    icon: <CurrencyDollarIcon className="h-6 w-6" />,
    key: 'Total Amount',
    value: '---',
  },
];

const TicketSuccessInfoData = [
  {
    icon: <MapPinIcon className="h-6 w-6" />,
    key: 'Event',
    value: 'Hispanic Society Borica Bash',
  },
  TicketInfoData,
];

export { TicketInfoData, TicketSuccessInfoData };
