'use client';

import { ProfileForm } from '@hispanic-forms';
import { Heading } from '@hispanic-ui';

import { useProfile } from '@/hooks/profile/useProfile';
import { FormatToProfileFormIntialValues } from '@/libs/Data Formaters/FormatToInitialValues';
import type { GetUserInfoType } from '@/types/authType';
import type { RankAndBoroughsType } from '@/types/rankType';

import { Container } from '../layout/Container';

export const ProfilePage = ({
  boroughs,
  ranks,
  userObject,
}: {
  boroughs: RankAndBoroughsType[];
  ranks: RankAndBoroughsType[];
  userObject: GetUserInfoType;
}) => {
  const { submitUpdateProfile } = useProfile();

  return (
    <div className="flex gap-28 pt-defaultPadding">
      <Container>
        <div className="rounded-lg bg-white p-7 shadow-lg">
          <Heading level={4} lexend center>
            Personal Details
          </Heading>
          <ProfileForm
            data={FormatToProfileFormIntialValues(userObject)}
            boroughs={boroughs}
            ranks={ranks}
            onSubmit={submitUpdateProfile}
          />
        </div>
      </Container>
    </div>
  );
};
