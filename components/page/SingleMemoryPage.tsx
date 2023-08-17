'use client';

import { Heading, Typography } from '@hispanic-ui';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import type { AlbumType, MemoryType } from '@/types/memoryType';

import { Container } from '../layout/Container';

export const SingleMemoryPage = ({
  memories,
  album,
}: {
  memories: MemoryType[];
  album: AlbumType | undefined;
}) => {
  return (
    <div className="py-defaultPadding">
      <Container>
        <Heading level={0.5} color="white" className="!tracking-[-1.12px]">
          {album?.name}
        </Heading>
        <Typography
          weight="bold"
          size="xl"
          variant="white"
          className="mt-6"
          lexend
        >
          {album?.description}
        </Typography>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 450: 1, 750: 2, 1200: 3 }}
          className="mt-10"
        >
          <Masonry>
            {memories.map((memory) => (
              <img
                key={memory.id}
                src={memory.image.fileUrl}
                alt={memory.caption}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
    </div>
  );
};
