import { Button, Modal, Typography } from '@hispanic-ui';

import type { ModalType } from '@/components/ui/Modal/types';
import { FormatDateTime } from '@/libs/helpers/FormatDate';
import type { EventObjectWithTickets } from '@/types/eventType';

export const ViewTicketsModal = ({
  isOpen,
  onClose,
  event,
  handleDownloadTicket,
  downloading,
}: Pick<ModalType, 'isOpen' | 'onClose'> & {
  event: EventObjectWithTickets;
  downloading: boolean;
  handleDownloadTicket: (
    node: any,
    eventName: string,
    ticketId: string
  ) => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="grid h-[60vh] grid-cols-3 gap-6 overflow-y-scroll py-5">
        {event.tickets &&
          event.tickets.length > 0 &&
          event.tickets.map((ticket) => (
            <div key={ticket.id} className="rounded-lg  p-4 shadow-xl">
              <div id={`ticket-print-${ticket.id}`} className="bg-white">
                <img
                  src={event.event.photo.fileUrl}
                  className="h-32 w-full object-cover"
                  alt="event"
                />
                <Typography center size="xl" weight="bold" className="mt-5">
                  {event.event.name}
                </Typography>
                <Typography center variant="lightGray" lexend>
                  {FormatDateTime(event.event.eventDateTime)}
                </Typography>

                <div className=" mt-5 flex flex-col gap-1">
                  <Typography size="large" weight="bold">
                    Ticket Status
                  </Typography>
                  <Typography variant="lightGray" lexend>
                    {ticket.ticketStatus}
                  </Typography>
                </div>

                <div className="mt-5 flex justify-between">
                  <div className="flex flex-col gap-1">
                    <Typography size="large" weight="bold">
                      Category
                    </Typography>
                    <Typography variant="lightGray" lexend>
                      {ticket.categoryName}
                    </Typography>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Typography size="large" weight="bold">
                      Ticket ID
                    </Typography>
                    <Typography variant="lightGray" lexend>
                      {ticket.ticketUUID}
                    </Typography>
                  </div>
                </div>
              </div>
              <Button
                disabled={downloading}
                className="mt-5"
                onClick={() =>
                  handleDownloadTicket(
                    document.getElementById(`ticket-print-${ticket.id}`),
                    event.event.name,
                    ticket.ticketUUID
                  )
                }
                variant="black"
                size="xs"
                label="Download Ticket"
                fullWidth
              />
            </div>
          ))}
      </div>
    </Modal>
  );
};
