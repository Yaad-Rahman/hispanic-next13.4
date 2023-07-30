import React from 'react';

import { ScreenResizer } from '../ScreenResizer';
import { usePaginationLogic } from './hooks/usePaginationLogic';
// eslint-disable-next-line import/no-cycle
import { PaginationMobile } from './mobile';
import type { PaginationProps } from './types';
import { PaginationWeb } from './web';

export const Pagination = ({
  onPageChange,
  currentPage,
  totalCount,
  siblingCount = 1,
  pageSize,
}: PaginationProps) => {
  const paginationRange = usePaginationLogic({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || (paginationRange && paginationRange?.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(
      Math.max(currentPage + 1, paginationRange && paginationRange.length)
    );
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  // const lastPage =
  //   paginationRange && paginationRange[paginationRange?.length - 1];

  return (
    <>
      <ScreenResizer displayOnly="desktop">
        <PaginationWeb
          {...{
            currentPage,
            onPageChange,
            onNext,
            onPrevious,
            paginationRange,
          }}
        />
      </ScreenResizer>
      <ScreenResizer displayOnly="mobile">
        <PaginationMobile
          {...{
            onNext,
            onPrevious,
            currentPage,
            onPageChange,
            pageSize,
            totalCount,
            paginationRange,
            siblingCount,
          }}
        />
      </ScreenResizer>
    </>
  );
};
