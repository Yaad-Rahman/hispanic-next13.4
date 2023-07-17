'use client';

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
          <CarouselSlider />
        </Container>
      </div>
    </main>
  );
}
