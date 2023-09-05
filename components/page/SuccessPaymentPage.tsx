'use client';

import { Button, Heading, Typography } from '@hispanic-ui';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

import { TicketInfoData } from '@/constants/tsxTestData';
import { decryptData } from '@/libs/Encryption';
import type { RootReducerState } from '@/redux/store';
import type { EventType } from '@/types/eventType';
import type { URLTicketType } from '@/types/ticketType';

import { Container } from '../layout/Container';
import { TicketInfo } from './events/TicketInfo';

export const SuccessPaymentPage = ({
  event,
  encodedTicket,
}: {
  event: EventType;
  encodedTicket: string;
}) => {
  const router = useRouter();
  const ticket: URLTicketType = decryptData(decodeURIComponent(encodedTicket));
  const user = useSelector((state: RootReducerState) => state.auth.user);

  return (
    <div className="mb-24 pt-defaultPadding">
      <div
        style={{
          background:
            'linear-gradient(360deg, #081F3F 1.04%, rgba(67, 26, 36, 0.66) 43.23%, rgba(67, 26, 36, 0.00) 100%)',
        }}
      >
        <div className="flex flex-col items-center gap-5">
          <img
            src="/logos/success.svg"
            alt="success"
            className="h-32 w-32 object-cover"
          />
          <div>
            <Heading level={2.5} center lexend weight="normal" color="white">
              Thank you!
            </Heading>
            <Heading level={2.5} center lexend weight="bold" color="white">
              Payment Successful
            </Heading>
          </div>
          <Typography size="xl" center lexend weight="medium" variant="white">
            {user?.firstName} {user?.lastName} your ticket has been confirmed
          </Typography>
        </div>
      </div>
      <Container>
        <div className="flex w-full justify-center">
          <div className="mt-12 w-[576px] rounded-lg bg-white p-6">
            <TicketInfo
              info={TicketInfoData(
                event,
                String(ticket.totalTickets),
                ticket.totalAmount,
                ticket.ticketType
              )}
            />
            <Button
              onClick={() => router.push('/')}
              className="mt-6"
              label="Back to home"
              variant="black"
              fullWidth
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
