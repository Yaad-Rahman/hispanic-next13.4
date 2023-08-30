'use client';

import { Heading, HTMLParser, SocialShare, Typography } from '@hispanic-ui';

import { FormatDateTime } from '@/libs/helpers/FormatDate';
import type { PostType } from '@/types/blogType';

import { Container } from '../layout/Container';
import { LatestNews } from './homepage/LatestNews';

export const SingleNewsPage = ({
  theNews,
  latestNews,
}: {
  theNews: PostType;
  latestNews: PostType[];
}) => {
  return (
    <div
      className="pt-defaultPadding"
      style={{
        background:
          'linear-gradient(360deg, #081F3F 1.04%, rgba(67, 26, 36, 0.66) 43.23%, rgba(67, 26, 36, 0.00) 100%)',
      }}
    >
      <Container>
        <div>
          <Typography
            className="text-primary-100"
            variant="noStyle"
            lexend
            weight="bold"
          >
            Published on{' '}
            {FormatDateTime(theNews.creationDateTimeStamp, 'only-date')}
          </Typography>
          <Heading className="mt-3" level={2} color="white" weight="normal">
            {theNews.title}
          </Heading>
          <Typography
            className="mt-6 text-primary-100"
            variant="noStyle"
            lexend
            size="xl"
          >
            {theNews.subTitle}
          </Typography>
        </div>
        <img
          className="mb-24 mt-16 aspect-[27/16] w-full object-cover"
          src={theNews.coverImg.fileUrl}
          alt="single"
        />
        <div className="flex justify-center">
          <div className="w-full font-lexendFont text-lg text-white sm:w-[720px]">
            <HTMLParser>{theNews.content}</HTMLParser>
            <div className="mt-5 flex items-center justify-between border-t border-solid border-gray-200 pt-6">
              <Typography variant="lightGray" lexend weight="bold">
                Share this post
              </Typography>
              <SocialShare />
            </div>
          </div>
        </div>
        {latestNews.length > 0 && <LatestNews news={latestNews} forNewspage />}
      </Container>
    </div>
  );
};
