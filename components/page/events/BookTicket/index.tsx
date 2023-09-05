// eslint-disable-next-line import/no-cycle
import { TicketBookForm } from '@hispanic-forms';
import { Button, Heading, Modal, Typography } from '@hispanic-ui';
import { useRef } from 'react';

import { TicketInfoData } from '@/constants/tsxTestData';
import { useTicketBooking } from '@/hooks/ticket/useTicketBooking';
import { FormatDateTime } from '@/libs/helpers/FormatDate';
import type { EventType } from '@/types/eventType';
import type { TicketCounterListType } from '@/types/ticketType';

import { TicketInfo } from '../TicketInfo';

export const BookTicket = ({
  event,
  ticketCounterList,
}: {
  event: EventType;
  ticketCounterList: TicketCounterListType[];
}) => {
  const bookFormRef = useRef<any>(null);

  const {
    modalOpen,
    setModalOpen,
    ticketPrice,
    ticketQuantity,
    handleData,
    SubmitFormikData,
    SubmitTicket,
  } = useTicketBooking({
    event,
  });

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
      <TicketBookForm
        ref={bookFormRef}
        ticketCounterList={ticketCounterList}
        handleData={handleData}
        onSubmit={SubmitFormikData}
      />
      <div className="my-6">
        <TicketInfo
          info={TicketInfoData(event, String(ticketQuantity), ticketPrice)}
        />
      </div>
      <Button
        onClick={() => {
          setModalOpen(true);
          bookFormRef.current?.submit();
        }}
        variant="black"
        size="large"
        label="Make Reservation"
        fullWidth
      />
      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
        actions={
          <div className="flex gap-5">
            <Button
              onClick={() => SubmitTicket('PAY_LATER')}
              variant="outlined"
              label="Pay later"
              fullWidth
            />
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
