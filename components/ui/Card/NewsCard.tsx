import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

import { Heading } from '../Heading';
import { Typography } from '../Typography';

export const NewsCard = () => {
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
          Olivia Rhye • 20 Jan 2022
        </Typography>
        <Heading level={4} weight="semibold">
          Llanina “Nina” Medina is retiring from SDPD
        </Heading>
        <Typography
          variant="noStyle"
          weight="semibold"
          className="text-secondary-100"
        >
          Llanina Rosalia Medina (Nina) has worked for San Diego Police
          department for over 29 years. Throughout her career she has worked in
          Southeast Division a predominated multi racial community. Nina loved
          this community and, in these years, has come to know many…
        </Typography>
        <div className="flex gap-1">
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
