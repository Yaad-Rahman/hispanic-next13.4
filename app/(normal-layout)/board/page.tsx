'use client';

import { ImageCards } from '@hispanic-page-ui';
import { Button, Heading, Typography } from '@hispanic-ui';

import { Container } from '@/components/layout/Container';

export default function Board() {
  return (
    <div>
      <div className="aspect-[1574/695] w-full bg-[url('/images/board/board-bg.svg')] bg-cover bg-center bg-no-repeat py-28 pt-defaultPadding">
        <Container>
          <div className="ml-24 w-[538px]">
            <Heading level={0.5} color="white" className="!tracking-[-1.12px]">
              NYPD Hispanic Society Board 2023
            </Heading>
            <Typography
              weight="bold"
              size="xl"
              variant="white"
              className="mt-6"
              lexend
            >
              PAZ Y UNIDAD | EMBRACING OUR GENTE, RAICES AND IDENTITIES TO
              DEFINE THE FUTURE
            </Typography>
            <div className="mt-12 flex gap-3">
              <Button
                label="Learn More"
                variant="white"
                startIcon={
                  <img src="/logos/play-circle.svg" alt="circle icon" />
                }
              />
              <Button label="Become A Member" variant="blue" size="large" />
            </div>
          </div>
        </Container>
      </div>
      <img
        src="/images/board/homes.svg"
        alt="homes"
        className="w-full translate-y-[-10px]"
      />
      <Container>
        <div className="my-24">
          <Heading center className="mb-16 " level={3} color="white">
            2023 Executive Board
          </Heading>
          <ImageCards />
          <Heading center className="mb-16 mt-24" level={3} color="white">
            2023 Executive Board
          </Heading>
          <ImageCards />
        </div>
      </Container>
    </div>
  );
}
