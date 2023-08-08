import { Heading } from '@hispanic-ui';

import { Container } from '@/components/layout/Container';

export const DJCorner = () => {
  return (
    <div
      className="aspect-[144/83] w-full py-28"
      style={{
        backgroundImage: 'url("/images/homepage/djBg.svg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Heading level={5} color="white" center lexend>
        DJ
      </Heading>
      <Heading level={2.5} color="white" lexend className="mt-3" center>
        DJ&apos;s Corner & Video
      </Heading>
      <Container>
        <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:gap-10">
          <div>
            <iframe
              // width={280}
              className="w-full sm:w-[280px]"
              height="100%"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/123456789&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
            ></iframe>
          </div>
          <img src="/images/homepage/djNegro.svg" alt="dj" />
          <div>
            <iframe
              // width={600}
              className="w-full sm:w-[600px]"
              height="100%"
              src="https://www.youtube.com/embed/HGrfTS6jRMQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
};
