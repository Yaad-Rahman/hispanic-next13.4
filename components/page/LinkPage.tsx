import { LinkCard } from '@hispanic-ui';

import type { LinkType } from '@/types/linkType';

import { Container } from '../layout/Container';

export const LinkPage = ({ links }: { links: LinkType[] }) => {
  return (
    <div
      className="pb-24 pt-defaultPadding"
      style={{
        background:
          'linear-gradient(360deg, #081F3F 1.04%, rgba(67, 26, 36, 0.66) 43.23%, rgba(67, 26, 36, 0.00) 100%)',
      }}
    >
      <Container>
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-3">
          {links.map((item, index) => (
            <LinkCard key={index} link={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};
