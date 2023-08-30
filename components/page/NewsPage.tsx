'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import {
  CategorySelector,
  Heading,
  Input,
  NewsCard,
  NotFound,
  Pagination,
} from '@hispanic-ui';

import { Container } from '@/components/layout/Container';
import { usePagination } from '@/hooks/usePagination';
import { useSearch } from '@/hooks/useSearch';
import type { PostType } from '@/types/blogType';
import type { PaginationType } from '@/types/commonTypes';

export default function NewsPage({
  news,
  pagination,
}: {
  news: PostType[];
  pagination: PaginationType;
}) {
  const { search, handleSearch } = useSearch('title');
  const { onPageChange } = usePagination();

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
        <div className="flex items-center justify-between pr-1 pt-1">
          <Heading level={2.5} color="white">
            News
          </Heading>
          <Input
            startIcon={
              <MagnifyingGlassIcon className="mt-[11px] h-6 w-6 stroke-gray-500 pr-1" />
            }
            name="search"
            placeholder="Search"
            value={search}
            onChange={(event) => handleSearch(event.currentTarget.value)}
          />
        </div>
        <div className="py-16">
          <CategorySelector categories={['Recent', 'Top News']} />
        </div>
        {news.length > 0 ? (
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-3">
            {news.map((item) => (
              <NewsCard key={item.id} theNews={item} />
            ))}
          </div>
        ) : (
          <NotFound message="No news found" color="white" />
        )}
      </Container>
      <div className="pb-24 pt-16">
        <Pagination
          currentPage={pagination.currentPage}
          onPageChange={onPageChange}
          pageSize={pagination.pageSize}
          totalCount={pagination.totalCount}
        />
      </div>
    </div>
  );
}
