'use client';

import {
  ContactUs,
  LatestNews,
  Memories,
  SocialMedia,
  UpcomingEvents,
} from '@hispanic-page-ui';
import { CarouselSlider } from '@hispanic-ui';

import { Container } from '@/components/layout/Container';
import { DJCorner } from '@/components/page/homepage/DJCorner';

export default function Home() {
  return (
    <main>
      <div
        className="aspect-[1440/798] w-full pt-[176px]"
        style={{
          backgroundImage: "url('/images/homepage/headerBg.svg')",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Container>
          <div className="h-[500px] px-20">
            <CarouselSlider />
          </div>
        </Container>
      </div>
      <SocialMedia />
      <UpcomingEvents />
      <LatestNews />
      <DJCorner />
      <Memories />
      <ContactUs />
    </main>
  );
}
