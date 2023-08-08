import { Button, Heading, Modal, RadioButton, Typography } from '@hispanic-ui';
import { useState } from 'react';

import { TicketInfoData } from '@/constants/tsxTestData';

import { TicketInfo } from '../TicketInfo';
import { TicketQuantity } from '../TicketQuantity';

export const BookTicket = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="rounded-lg bg-white p-6 ">
      <div className="flex items-center gap-5">
        <img
          src="/test/single-event.svg"
          alt="event"
          className="h-[90px] w-[92px] rounded-lg object-cover"
        />
        <div>
          <Typography size="xl" weight="medium">
            Hispanic Society Borica Bash
          </Typography>
          <Typography size="small" variant="lightGray" weight="medium">
            Friday
          </Typography>
        </div>
      </div>
      <div className="mt-5">
        <Typography weight="bold">Ticket Type</Typography>
        <div className="flex gap-[22px] rounded-lg bg-primary-25 px-4 py-3">
          <RadioButton name="type" labelTitle="Regular" labelSubTitle="$50" />
          <RadioButton name="type" labelTitle="Premium" labelSubTitle="$100" />
        </div>
      </div>
      <TicketQuantity />
      <div className="my-6">
        <TicketInfo info={TicketInfoData} />
      </div>
      <Button
        onClick={() => setOpen(true)}
        variant="black"
        size="large"
        label="Make Reservation"
        fullWidth
      />
      <Modal
        isOpen={open}
        onClose={() => {
          setOpen(false);
        }}
        actions={
          <div className="flex gap-5">
            <Button variant="outlined" label="Pay later" fullWidth />
            <Button variant="black" label="Pay now" fullWidth />
          </div>
        }
      >
        <Heading level={3} className="w-[516px]" center lexend>
          Do you want to make the reservation?
        </Heading>
      </Modal>
    </div>
  );
};
