'use client';

import { ProfileForm } from '@hispanic-forms';
import { Button, Heading, Typography } from '@hispanic-ui';
import clsx from 'clsx';

import { useProfile } from '@/hooks/profile/useProfile';
import { FormatToProfileFormIntialValues } from '@/libs/Data Formaters/FormatToInitialValues';
import { FormatDateTime } from '@/libs/helpers/FormatDate';
import OnlyClient from '@/libs/helpers/OnlyClient';
import type { GetUserInfoType } from '@/types/authType';
import type { RankAndBoroughsType } from '@/types/rankType';

import { Container } from '../layout/Container';
import { SubscriptionModal } from './profile/SubscriptionModal';

export const ProfilePage = ({
  boroughs,
  ranks,
  userObject,
}: {
  boroughs: RankAndBoroughsType[];
  ranks: RankAndBoroughsType[];
  userObject: GetUserInfoType;
}) => {
  const {
    openModal,
    setOpenModal,
    submitUpdateProfile,
    subscription,
    submitSubscription,
  } = useProfile();

  return (
    <Container>
      <div className="flex flex-col gap-28 pt-defaultPadding sm:flex-row">
        <div className="basis-2/3 rounded-lg bg-white p-7 shadow-lg">
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
        <OnlyClient>
          <div className="h-fit basis-1/3 rounded-lg bg-white p-7 shadow-lg">
            <Heading level={4} lexend center>
              Your subscription
            </Heading>
            <div className="mt-5 flex w-full items-center justify-center rounded-lg bg-primary-50 p-5">
              {subscription ? (
                <div className="flex flex-col gap-5">
                  <div className="flex justify-center">
                    <p
                      className={clsx(
                        'rounded-xl p-3 text-white',
                        subscription.subscriptionStatus === 'ACTIVE' &&
                          'bg-green-600',
                        subscription.subscriptionStatus === 'EXPIRING' &&
                          'bg-orange-600',
                        subscription.subscriptionStatus === 'EXPIRED' &&
                          'bg-red-600'
                      )}
                    >
                      {subscription.subscriptionStatus}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Typography size="small" weight="bold" lexend>
                      Subscription Fee:
                    </Typography>
                    <Typography size="small" variant="lightGray" lexend>
                      ${subscription.subscriptionFee}
                    </Typography>
                  </div>
                  <div className="flex gap-2">
                    <Typography size="small" weight="bold" lexend>
                      Subscription Date:
                    </Typography>
                    <Typography size="small" variant="lightGray" lexend>
                      {FormatDateTime(
                        subscription.paymentDateEpoc,
                        'only-date'
                      )}
                    </Typography>
                  </div>
                  <div className="flex gap-2">
                    <Typography size="small" weight="bold" lexend>
                      Expiration Date:
                    </Typography>
                    <Typography size="small" variant="lightGray" lexend>
                      {FormatDateTime(
                        subscription.expirationDateEpoc,
                        'only-date'
                      )}
                    </Typography>
                  </div>
                  {(subscription.subscriptionStatus === 'EXPIRING' ||
                    subscription.subscriptionStatus === 'EXPIRED') && (
                    <Button
                      onClick={() => setOpenModal(true)}
                      className="mt-5"
                      label="$75/year membership"
                      variant="black"
                      fullWidth
                    />
                  )}
                </div>
              ) : (
                <div>
                  <Typography size="xl" center>
                    Currently you have no subscribtion
                  </Typography>
                  <Typography className="mt-3" size="xl" center>
                    Join Us Now!
                  </Typography>
                  <Button
                    onClick={() => setOpenModal(true)}
                    className="mt-5"
                    label="$75/year membership"
                    variant="black"
                    fullWidth
                  />
                </div>
              )}
            </div>
          </div>
        </OnlyClient>
      </div>

      {/* subscribtion modal  */}
      <SubscriptionModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        submitSubscription={submitSubscription}
      />
    </Container>
  );
};
