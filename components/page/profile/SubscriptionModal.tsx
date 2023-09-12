import { Heading, Modal } from '@hispanic-ui';
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';

import type { ModalType } from '@/components/ui/Modal/types';
import { SQUARE_SANDBOX_API_KEY } from '@/constants';

export const SubscriptionModal = ({
  isOpen,
  onClose,
  submitSubscription,
}: Pick<ModalType, 'isOpen' | 'onClose'> & {
  submitSubscription: ({
    cardNumber,
    cardToken,
  }: {
    cardNumber: string;
    cardToken: string;
  }) => Promise<void>;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Heading level={5} center className="my-3">
        Subsciption Payment
      </Heading>
      <PaymentForm
        locationId="LID"
        applicationId={SQUARE_SANDBOX_API_KEY}
        cardTokenizeResponseReceived={({ details, token, errors }) => {
          if (!errors) {
            submitSubscription({
              cardNumber: details?.card?.last4 ?? '',
              cardToken: token ?? '',
            });
          }
        }}
      >
        <CreditCard />
      </PaymentForm>
    </Modal>
  );
};
