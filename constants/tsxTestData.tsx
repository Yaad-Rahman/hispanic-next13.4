import {
  CalendarDaysIcon,
  ClockIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  QueueListIcon,
  TicketIcon,
} from '@heroicons/react/24/outline';

const TicketInfoData = [
  {
    icon: <CalendarDaysIcon className="h-6 w-6" />,
    key: 'Event Date',
    value: '20 Dec 2022',
  },
  {
    icon: <MapPinIcon className="h-6 w-6" />,
    key: 'Location',
    value: 'Domino Park',
  },
  {
    icon: <ClockIcon className="h-6 w-6" />,
    key: 'Event Time',
    value: '11am - 5pm ',
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

export { TicketInfoData };
