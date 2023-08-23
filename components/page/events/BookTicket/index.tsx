// eslint-disable-next-line import/no-cycle
import { TicketBookForm } from '@hispanic-forms';
import { Button, Heading, Modal, Typography } from '@hispanic-ui';
import { useState } from 'react';

import { TicketInfoData } from '@/constants/tsxTestData';
import { FormatDateTime } from '@/libs/helpers/FormatDate';
import type { EventType } from '@/types/eventType';
import type { TicketCategoryType } from '@/types/ticketType';

import { TicketInfo } from '../TicketInfo';

export const BookTicket = ({
  event,
  ticketCategories,
}: {
  event: EventType;
  ticketCategories: TicketCategoryType[];
}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="rounded-lg bg-white p-6 ">
      <div className="flex items-center gap-5">
        <img
          src={event.photo.fileUrl}
          alt="event"
          className="h-[90px] w-[92px] rounded-lg object-cover"
        />
        <div>
          <Typography size="xl" weight="medium">
            {event.name}
          </Typography>
          <Typography size="small" variant="lightGray" weight="medium">
            {FormatDateTime(event.eventDateTime, 'only-day')}
          </Typography>
        </div>
      </div>
      <TicketBookForm ticketCategories={ticketCategories} onSubmit={() => {}} />
      <div className="my-6">
        <TicketInfo info={TicketInfoData(event)} />
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
