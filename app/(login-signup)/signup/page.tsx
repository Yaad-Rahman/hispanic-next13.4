'use client';

import { SignupForm } from '@hispanic-forms';
import { Header, Typography } from '@hispanic-ui';

import OnlyClient from '@/libs/helpers/OnlyClient';

export default function Signup() {
  return (
    <div>
      <Header variant="titleS" weight="semibold" center>
        Create an account
      </Header>
      <Typography variant="lightGray" className="mt-3" center lexend>
        Welcome back! Please enter your details.
      </Typography>
      <OnlyClient>
        <div className="mt-8 w-[360px]">
          <SignupForm onSubmit={() => {}} />
        </div>
      </OnlyClient>
    </div>
  );
}
