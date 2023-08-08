'use client';

import { TicketInfo } from '@hispanic-page-ui';
import { Button, Heading, Typography } from '@hispanic-ui';

import { Container } from '@/components/layout/Container';
import { TicketSuccessInfoData } from '@/constants/tsxTestData';

export default function SuccessTicket() {
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
            Mr. Wilson Vernelly, your ticket has been confirmed
          </Typography>
        </div>
      </div>
      <Container>
        <div className="flex w-full justify-center">
          <div className="mt-12 w-[576px] rounded-lg bg-white p-6">
            <TicketInfo info={TicketSuccessInfoData} />
            <Button
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
}
