import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

import type { PostType } from '@/types/blogType';

import { Description } from '../Description';
import { Heading } from '../Heading';
import { Typography } from '../Typography';

export const NewsCard = ({ theNews }: { theNews: PostType }) => {
  const router = useRouter();
  return (
    <div className="rounded-lg bg-white p-6">
      <img
        src="/images/homepage/news-image.svg"
        alt="news"
        className="h-[240px] w-full object-cover"
      />
      <div className="mt-8 flex flex-col gap-3">
        <Typography
          variant="noStyle"
          size="small"
          weight="semibold"
          className="text-textColor-lightPink"
        >
          {theNews.creationDate}
        </Typography>
        <Heading level={4} weight="semibold">
          {theNews.title}
        </Heading>
        <Typography
          variant="noStyle"
          weight="semibold"
          className="text-secondary-100"
          size="medium"
          lexend
        >
          <Description wordLimit={42}>{theNews.description}</Description>
        </Typography>
        <div
          onClick={() => router.push(`/news/${theNews.id}`)}
          className="flex cursor-pointer gap-1"
        >
          <Typography
            variant="noStyle"
            weight="semibold"
            className="text-primary-400"
          >
            Read more
          </Typography>
          <ArrowUpRightIcon className="h-6 w-6 text-primary-400" />
        </div>
      </div>
    </div>
  );
};
