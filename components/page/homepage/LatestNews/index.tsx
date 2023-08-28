import { Button, Heading, NewsCard } from '@hispanic-ui';
import { useParams } from 'next/navigation';

import { Container } from '@/components/layout/Container';
import type { PostType } from '@/types/blogType';

export const LatestNews = ({
  forNewspage,
  news,
}: {
  forNewspage?: boolean;
  news: PostType[];
}) => {
  const params = useParams();
  const { id } = params;
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
          {forNewspage &&
            news
              .filter((f) => f.id !== Number(id))
              .map((item) => <NewsCard key={item.id} theNews={item} />)}
        </div>
      </Container>
    </div>
  );
};
