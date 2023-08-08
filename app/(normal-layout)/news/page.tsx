'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import {
  CategorySelector,
  Heading,
  Input,
  NewsCard,
  Pagination,
} from '@hispanic-ui';

import { Container } from '@/components/layout/Container';
import { EventCategories } from '@/constants/testData';

export default function News() {
  return (
    <div
      className="pt-defaultPadding"
      style={{
        background:
          'linear-gradient(360deg, #081F3F 1.04%, rgba(67, 26, 36, 0.66) 43.23%, rgba(67, 26, 36, 0.00) 100%)',
      }}
    >
      <img
        src="/images/wallpapers/news-header.svg"
        alt="header"
        className="w-full pb-16"
      />
      <Container>
        <div className="flex items-center justify-between pr-1">
          <Heading level={2.5} color="white">
            News
          </Heading>
          <Input
            startIcon={
              <MagnifyingGlassIcon className="mt-[11px] h-6 w-6 stroke-gray-500 pr-1" />
            }
            name="search"
            placeholder="Search"
          />
        </div>
        <div className="py-16">
          <CategorySelector categories={EventCategories} />
        </div>
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-3">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </Container>
      <div className="pb-24 pt-16">
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
