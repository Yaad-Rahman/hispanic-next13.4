import { cookies } from 'next/headers';

import { getEvent } from '@/api/eventsApi';
import { SuccessPaymentPage } from '@/components/page/SuccessPaymentPage';

export default async function SuccessTicket({
  params,
  searchParams,
}: {
  params?: any;
  searchParams?: any;
}) {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value ?? '';
  const eventData = await getEvent(token, params.id);

  return (
    <SuccessPaymentPage
      event={eventData.payload.event}
      encodedTicket={searchParams?.ticket}
    />
  );
}
