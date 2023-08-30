import { cookies } from 'next/headers';

import { getAllPostsOfABlog } from '@/api/blogApi';
import { getAllEvents } from '@/api/eventsApi';
import { getAllAlbums } from '@/api/memoriesApi';
import { HomePage } from '@/components/page/HomePage';
import { NEWS_BLOGUUID } from '@/constants';

export default async function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value ?? '';
  const [upcomingEventsData, latestNewsData, memoriesData] = await Promise.all([
    getAllEvents(token, {
      sortBy: 'eventDateTime',
      ascOrDesc: 'desc',
    }),
    getAllPostsOfABlog(NEWS_BLOGUUID, {
      sortBy: 'creationDate',
      ascOrDesc: 'desc',
    }),
    getAllAlbums({
      sortBy: 'creationDate',
      ascOrDesc: 'desc',
    }),
  ]);

  return (
    <HomePage
      latestNews={latestNewsData.payload?.content.slice(0, 2) ?? []}
      upcomingEvents={upcomingEventsData.payload?.content.slice(0, 3) ?? []}
      memories={memoriesData.payload?.content.slice(0, 6) ?? []}
    />
  );
}
