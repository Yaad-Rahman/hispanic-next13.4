'use client';

import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Heading, Typography } from '@hispanic-ui';

import { Container } from '@/components/layout/Container';

export default function SingleEvent() {
  return (
    <div
      className="pt-defaultPadding"
      style={{
        background:
          'linear-gradient(360deg, #081F3F 1.04%, rgba(67, 26, 36, 0.66) 43.23%, rgba(67, 26, 36, 0.00) 100%)',
      }}
    >
      <Container>
        <div className="flex justify-between">
          <div className="basis-3/4">
            <Heading level={2} weight="normal" color="white">
              Hispanic Society Borica Bash
            </Heading>
            <div className="mt-5 flex items-center gap-1">
              <CalendarDaysIcon className="h-6 w-6 text-white" />
              <Typography variant="white" weight="bold" size="xl" lexend>
                20 Dec 2022 • 11am - 5pm
              </Typography>
            </div>
            <div className="mt-5 flex items-center gap-2 text-gray-500">
              <MapPinIcon className="h-6 w-6" />
              <Typography variant="noStyle" weight="bold" size="xl" lexend>
                Domino Park
              </Typography>
            </div>
            <img
              className="mt-6 aspect-[399/292] w-full object-cover"
              src="/test/single-event.svg"
              alt="event"
            />
            <Typography className="my-10" size="xl" variant="white" lexend>
              Llanina Rosalia Medina (Nina) has worked for San Diego Police
              department for over 29 years. Throughout her career she has worked
              in Southeast Division. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. In varius felis quis tempor malesuada. Morbi
              interdum mi vitae ornare imperdiet. Aliquam aliquam lacus volutpat
              facilisis faucibus. Llanina Rosalia Medina (Nina) has worked for
              San Diego Police department for over 29 years. Throughout her
              career she has worked in Southeast Division. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. In varius felis quis tempor
              malesuada. Morbi interdum mi vitae ornare imperdiet. Aliquam
              aliquam lacus volutpat facilisis faucibus.Llanina Rosalia Medina
              (Nina) has worked for San Diego Police department for over 29
              years. Throughout her career she has worked in Southeast Division.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
              felis quis tempor malesuada. Morbi interdum mi vitae ornare
              imperdiet. Aliquam aliquam lacus volutpat facilisis faucibus.
            </Typography>
            <img
              className="aspect-[800/347] w-full object-cover"
              src="/test/event-location.svg"
              alt="event location"
            />
          </div>
          <div className="basis-1/4">the ticket section</div>
        </div>
      </Container>
    </div>
  );
}
