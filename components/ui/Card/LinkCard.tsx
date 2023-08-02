import { Link } from '../Link';
import { Typography } from '../Typography';
import type { LinkCardType } from './types';

export const LinkCard = ({ title, logo, description, link }: LinkCardType) => {
  return (
    <div className="flex w-full flex-col rounded-lg bg-white p-6">
      <img src={logo} alt="icon" className="h-[150px] object-contain" />
      <Typography size="xl" weight="bold" className="mt-3" lexend>
        {title}
      </Typography>
      <Typography variant="noStyle" className="mt-2 text-gray-600" lexend>
        {description}
      </Typography>
      <div className="mt-5 flex h-full flex-col justify-end">
        <Link href={link}>{link}</Link>
      </div>
    </div>
  );
};
