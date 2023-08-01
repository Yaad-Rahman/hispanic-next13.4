'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import {
  CategorySelector,
  Heading,
  ImageCard,
  Input,
  Pagination,
} from '@hispanic-ui';

import { Container } from '@/components/layout/Container';
import { EventCategories, MemoriesPageData } from '@/constants/testData';

export default function Memories() {
  return (
    <div className="pt-defaultPadding">
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
            {MemoriesPageData.map((memory, index) => (
              <ImageCard
                key={index}
                image={memory.image}
                title={memory.title}
                height={480}
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
}
