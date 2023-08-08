import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
// eslint-disable-next-line import/no-cycle
import { Typography } from '@hispanic-ui';
import React from 'react';

import { Container } from '@/components/layout/Container';

import type { PaginationProps } from '../types';

export const PaginationMobile = ({
  onNext,
  onPrevious,
  currentPage,
  pageSize,
  totalCount,
}: { onNext: () => void; onPrevious: () => void } & PaginationProps) => {
  return (
    <Container>
      <div className="flex items-center justify-between border-t border-solid border-primary-200 pt-5">
        <div onClick={onPrevious}>
          <ArrowLeftIcon className="h-6 w-6 text-white" />
        </div>
        <Typography size="medium" variant="medium">
          Page {currentPage} of {Math.ceil(totalCount / pageSize)}
        </Typography>
        <div onClick={onNext}>
          <ArrowRightIcon className="h-6 w-6 text-white" />
        </div>
      </div>
    </Container>
  );
};
