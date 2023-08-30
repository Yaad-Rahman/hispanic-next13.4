'use client';

import type { PostType } from '@/types/blogType';
import type { EventObjectWithTickets } from '@/types/eventType';
import type { AlbumType } from '@/types/memoryType';

import { Container } from '../layout/Container';
import { CarouselSlider } from '../ui';
import { ContactUs } from './homepage/ContactUs';
import { DJCorner } from './homepage/DJCorner';
import { LatestNews } from './homepage/LatestNews';
import { Memories } from './homepage/Memories';
import { SocialMedia } from './homepage/SocialMedia';
import { UpcomingEvents } from './homepage/UpcomingEvents';

export const HomePage = ({
  upcomingEvents,
  latestNews,
  memories,
}: {
  upcomingEvents: EventObjectWithTickets[];
  latestNews: PostType[];
  memories: AlbumType[];
}) => {
  return (
    <main>
      <div
        className="aspect-[1440/798] w-full pt-defaultPadding"
        style={{
          backgroundImage: "url('/images/homepage/headerBg.svg')",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Container>
          <div className="h-[700px] px-16 sm:h-[500px] sm:px-20">
            <CarouselSlider />
          </div>
        </Container>
      </div>
      <SocialMedia />
      {upcomingEvents.length > 0 && <UpcomingEvents events={upcomingEvents} />}
      {latestNews.length > 0 && <LatestNews news={latestNews} />}
      <DJCorner />
      {memories.length > 0 && <Memories memories={memories} />}

      <ContactUs forPage="home" />
    </main>
  );
};
