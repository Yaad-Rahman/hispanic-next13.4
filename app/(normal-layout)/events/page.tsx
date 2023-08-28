import { cookies } from 'next/headers';

import { getAllEvents } from '@/api/eventsApi';
import { EventsPage } from '@/components/page/EventsPage';
import { FormatPagination } from '@/libs/helpers/FormatPagination';

export default async function Events({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value ?? '';

  const eventsData = await getAllEvents(token, {
    name: searchParams?.name ?? '',
  });

  // pagination
  const pagination = FormatPagination(eventsData.payload);

  return (
    <EventsPage events={eventsData.payload.content} pagination={pagination} />
  );
}
