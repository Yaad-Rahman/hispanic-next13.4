import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import { Typography } from '@hispanic-ui';
import { useCallback, useEffect, useState } from 'react';

export const TicketQuantity = ({
  onChange,
}: {
  onChange: (value: any) => void;
}) => {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    onChange(value);
  }, [value]);

  const handleDecrease = useCallback(() => {
    setValue((prev) => Math.max(prev - 1, 0));
  }, [value]);

  const handleIncrease = useCallback(() => {
    setValue((prev) => prev + 1);
  }, [value]);

  return (
    <div className="mt-4">
      <Typography weight="bold" lexend>
        Ticket Quantity
      </Typography>
      <div className="flex w-full items-center justify-center rounded-lg bg-primary-25 py-4">
        <div className="flex w-[231px] items-center justify-between">
          <button
            type="button"
            onClick={() => handleDecrease()}
            className="rounded bg-primary-700 p-2.5 text-white"
          >
            <MinusIcon className="h-6 w-6" />
          </button>
          <Typography lexend weight="semibold">
            {value} Tickets
          </Typography>
          <button
            type="button"
            onClick={() => handleIncrease()}
            className="rounded bg-primary-700 p-2.5 text-white"
          >
            <PlusIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
