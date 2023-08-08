import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import { Typography } from '@hispanic-ui';

export const TicketQuantity = () => {
  return (
    <div className="mt-4">
      <Typography weight="bold" lexend>
        Ticket Quantity
      </Typography>
      <div className="flex w-full items-center justify-center rounded-lg bg-primary-25 py-4">
        <div className="flex w-[231px] items-center justify-between">
          <button className="rounded bg-primary-700 p-2.5 text-white">
            <MinusIcon className="h-6 w-6" />
          </button>
          <Typography lexend weight="semibold">
            0 Tickets
          </Typography>
          <button className="rounded bg-primary-700 p-2.5 text-white">
            <PlusIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
