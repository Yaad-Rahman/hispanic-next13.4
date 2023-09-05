import { cookies } from 'next/headers';

import { getEvent } from '@/api/eventsApi';
import { SuccessPaymentPage } from '@/components/page/SuccessPaymentPage';
import { decryptData, encryptData } from '@/libs/Encryption';

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
  console.log('ticket details', encryptData({ greetings: 'ki be?', price: 2 }));
  console.log(
    'encode url',
    encodeURIComponent(encryptData({ greetings: 'ki be?', price: 2 }))
  );
  console.log('search params', searchParams?.ticket);
  console.log('decode url', decodeURIComponent(searchParams?.ticket));

  console.log(
    'decrypt ticket',
    decryptData(decodeURIComponent(searchParams?.ticket))
  );

  console.log(
    'static data',
    decryptData(
      'U2FsdGVkX18h+xCPKBsYIiSw0cbGUtFQIpJfE3RKa/GzdzccmE64mltHh7v9OByhfmW6AEQQm5UMuFxJBH2dfw=='
    )
  );

  return (
    <SuccessPaymentPage
      event={eventData.payload.event}
      encodedTicket={searchParams?.ticket}
    />
  );
}
