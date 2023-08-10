'use client';

import { Accordion, Heading, Typography } from '@hispanic-ui';

import { Container } from '@/components/layout/Container';
import { FaqData } from '@/constants/testData';

export default function Faq() {
  return (
    <div>
      <div
        className="pt-defaultPadding"
        style={{
          background:
            'linear-gradient(360deg, #081F3F 1.04%, rgba(67, 26, 36, 0.66) 43.23%, rgba(67, 26, 36, 0.00) 100%)',
        }}
      >
        <Container>
          <Heading level={2.5} lexend center color="white">
            Frequently asked questions
          </Heading>
          <Typography
            className="mt-5 text-primary-100"
            variant="noStyle"
            lexend
            center
            size="xl"
          >
            Everything you need to know about the product and billing.
          </Typography>
        </Container>
      </div>
      <Container>
        <div className="flex justify-center">
          <div className="my-16 w-full sm:w-[768px]">
            <Accordion data={FaqData} />
          </div>
        </div>
      </Container>
    </div>
  );
}
