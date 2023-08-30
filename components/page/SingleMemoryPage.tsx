'use client';

import { Heading, Typography } from '@hispanic-ui';
import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import type { AlbumType, MemoryType } from '@/types/memoryType';

import { Container } from '../layout/Container';
import { ImageModal } from './memories/ImageModal';

export const SingleMemoryPage = ({
  memories,
  album,
}: {
  memories: MemoryType[];
  album: AlbumType | undefined;
}) => {
  const [imageUrl, setimageUrl] = useState<string | null>(null);
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
          <Masonry gutter="20px">
            {memories.map((memory) => (
              <img
                className="cursor-pointer"
                onClick={() => setimageUrl(memory.image.fileUrl)}
                key={memory.id}
                src={memory.image.fileUrl}
                alt={memory.caption}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Container>

      <ImageModal imageUrl={imageUrl} setImageUrl={setimageUrl} />
    </div>
  );
};
