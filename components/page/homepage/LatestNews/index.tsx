import { Button, Heading, NewsCard } from '@hispanic-ui';

import { Container } from '@/components/layout/Container';

export const LatestNews = ({ forNewspage }: { forNewspage?: boolean }) => {
  return (
    <div
      className={`aspect-[1440/943] w-full ${
        forNewspage ? 'pb-24 pt-16' : 'pt-24'
      }`}
      style={
        forNewspage
          ? undefined
          : {
              backgroundImage: 'url("/images/homepage/newsBg.svg")',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }
      }
    >
      <Container>
        <Heading level={5} color="white">
          {forNewspage ? 'News' : 'Acknowledgement'}
        </Heading>
        <div className="flex justify-between">
          <Heading level={2.5} color="white" lexend className="mt-3">
            {forNewspage ? 'Latest News' : 'Latest News and Acknowledgements'}
          </Heading>
          <Button label="View all" variant="black" />
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <NewsCard />
          <NewsCard />
        </div>
      </Container>
    </div>
  );
};
