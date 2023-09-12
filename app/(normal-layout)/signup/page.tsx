'use client';

import { SignupForm } from '@hispanic-forms';
import { Header, Typography } from '@hispanic-ui';

import { useSignupLogin } from '@/hooks/signupLogin/useSignupLogin';
import OnlyClient from '@/libs/helpers/OnlyClient';

export default function Signup() {
  const { submitSignup } = useSignupLogin();
  return (
    <div className="flex justify-center py-[96px]">
      <div className="flex flex-col items-center gap-6">
        <img
          className="h-[64px] w-[64px]"
          src="/logos/logo.svg"
          alt="hispanic logo"
        />
        <div>
          <Header variant="titleS" weight="semibold" center color="white">
            Create an account
          </Header>
          <Typography variant="lightGray" className="mt-3" center lexend>
            To join us, please enter your details.
          </Typography>
          <OnlyClient>
            <div className="mt-8 w-[360px]">
              <SignupForm onSubmit={submitSignup} />
            </div>
          </OnlyClient>
        </div>
      </div>
    </div>
  );
}
