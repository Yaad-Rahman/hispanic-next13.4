'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {
  CategorySelector,
  Heading,
  ImageCard,
  Input,
  Pagination,
} from '@hispanic-ui';
import { useRouter } from 'next/navigation';

import { EventCategories } from '@/constants/testData';
import type { AlbumType } from '@/types/memoryType';

import { Container } from '../layout/Container';

export const MemoriesPage = ({ albums }: { albums: AlbumType[] }) => {
  const router = useRouter();
  console.log('albums', albums);
  return (
    <div className="bg-[#1A1D37] pt-defaultPadding">
      <div className='w-full bg-[url("/images/wallpapers/memories-bg.png")] bg-cover bg-no-repeat pb-24'>
        <Container>
          <div className="mt-24">
            <div className="flex items-center justify-between pr-1">
              <Heading level={2.5} color="white">
                Memories
              </Heading>
              <Input
                startIcon={
                  <MagnifyingGlassIcon className="mt-[11px] h-6 w-6 stroke-gray-500 pr-1" />
                }
                name="search"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="py-16">
            <CategorySelector categories={EventCategories} />
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 pb-16 sm:grid-cols-3 ">
            {albums.map((album, index) => (
              <ImageCard
                key={index}
                image={album.coverPhoto?.fileUrl ?? ''}
                title={album.name}
                height={480}
                onClick={() => router.push(`/memories/${album.id}`)}
              />
            ))}
          </div>
        </Container>
        <Pagination
          currentPage={2}
          onPageChange={() => {}}
          pageSize={5}
          totalCount={50}
        />
      </div>
    </div>
  );
};
