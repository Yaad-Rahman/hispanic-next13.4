import { Button, Heading, NewsCard } from '@hispanic-ui';

import { Container } from '@/components/layout/Container';

export const LatestNews = () => {
  return (
    <div
      className="aspect-[1440/943] w-full pt-24"
      style={{
        backgroundImage: 'url("/images/homepage/newsBg.svg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container>
        <Heading level={5} color="white">
          Acknowledgement
        </Heading>
        <div className="flex justify-between">
          <Heading level={2.5} color="white" lexend className="mt-3">
            Latest News and Acknowledgements
          </Heading>
          <Button label="View all" variant="black" />
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8">
          <NewsCard />
          <NewsCard />
        </div>
      </Container>
    </div>
  );
};
