'use client';

import { Button, Heading, Typography } from '@hispanic-ui';

import { Container } from '@/components/layout/Container';

export default function Member() {
  return (
    <div
      className="pt-defaultPadding"
      style={{
        background:
          'linear-gradient(360deg, #081F3F 1.04%, rgba(67, 26, 36, 0.66) 43.23%, rgba(67, 26, 36, 0.00) 100%)',
      }}
    >
      <Container>
        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-7 sm:w-[588px]">
            <img src="/test/nycaps.svg" alt="logo" />
            <Typography center size="xl" variant="white" lexend>
              JOIN US TODAY
            </Typography>
            <Heading center level={2} color="white" lexend>
              NYCCAPS MEMBERSHIP
            </Heading>
            <Heading center level={4} color="white" lexend>
              Join via ESS and we take care of the rest.
            </Heading>
            <Button label="$75/year membership" variant="black" />
            <Typography center size="xl" variant="white">
              Once confirmed, you will get your yearly membership card on one of
              our General Membership Meetings.
            </Typography>
          </div>
        </div>
        <div className="my-24 flex w-full flex-col items-center gap-8 rounded-lg bg-gray-300 px-5 py-7 sm:px-[176px] sm:py-11">
          <img
            src="/logos/logo.svg"
            alt="logo"
            className="h-[158px] w-[158px] object-cover"
          />
          <p className="font-lexendFont text-2xl">
            Here is our 2023 Membership application PDF File. Please print and
            give to any board member during our meeting or command delegates.
          </p>
          <Button size="medium" variant="black" label="Download" />
        </div>
      </Container>
    </div>
  );
}
