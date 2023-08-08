'use client';

import { ContactForm } from '@hispanic-forms';
import { ContactUs } from '@hispanic-page-ui';
import { Heading, Typography } from '@hispanic-ui';

import { Container } from '@/components/layout/Container';
import OnlyClient from '@/libs/helpers/OnlyClient';

export default function Contact() {
  return (
    <div className="pt-14">
      <ContactUs forPage="contact" />
      <div className="bg-LoginBg py-24">
        <Heading level={2.5} center>
          Get in touch
        </Heading>
        <Typography
          className="mt-5"
          variant="lightGray"
          lexend
          center
          size="xl"
        >
          We’d love to hear from you. Please fill out this form.
        </Typography>
        <Container>
          <div className="mt-16 flex justify-center">
            <div className="sm:w-[480px]">
              <OnlyClient>
                <ContactForm onSubmit={() => {}} />
              </OnlyClient>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
