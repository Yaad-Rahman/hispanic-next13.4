'use client';

import { SocialMedia } from '@hispanic-page-ui';
import { CarouselSlider } from '@hispanic-ui';

import { Container } from '@/components/layout/Container';

export default function Home() {
  return (
    <main>
      <div
        className="h-[850px] w-full pt-[176px]"
        style={{
          backgroundImage: "url('/images/homepage/headerBg.svg')",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Container>
          <div className="h-[500px]">
            <CarouselSlider />
          </div>
        </Container>
      </div>
      <SocialMedia />
    </main>
  );
}
