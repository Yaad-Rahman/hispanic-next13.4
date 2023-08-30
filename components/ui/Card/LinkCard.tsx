import type { LinkType } from '@/types/linkType';

import { Link } from '../Link';
import { Typography } from '../Typography';

export const LinkCard = ({ link }: { link: LinkType }) => {
  return (
    <div className="flex w-full flex-col rounded-lg bg-white p-6">
      {link.displayLogo && (
        <div className="flex justify-start">
          <img
            src={link.displayLogo?.fileUrl}
            alt="icon"
            className="h-[150px] object-contain"
          />
        </div>
      )}

      <Typography size="xl" weight="bold" className="mt-3" lexend>
        {link.title}
      </Typography>
      <Typography variant="noStyle" className="mt-2 text-gray-600" lexend>
        {link.description}
      </Typography>
      <div className="mt-5 flex h-full flex-col justify-end">
        <Link href={`https://${link.link}`} target="_blank">
          {link.link}
        </Link>
      </div>
    </div>
  );
};
