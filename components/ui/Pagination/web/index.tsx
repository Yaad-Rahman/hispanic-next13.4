import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import React from 'react';

import { Container } from '@/components/layout/Container';

import { classes } from '../styles';
import type { PaginationPropsSet } from '../types';

export const PaginationWeb = ({
  currentPage,
  onPageChange,
  paginationRange,
  onNext,
  onPrevious,
}: PaginationPropsSet) => {
  return (
    <Container>
      <div className="border-t border-solid border-white pt-5">
        <ul className="flex justify-between">
          <li
            onClick={onPrevious}
            className={clsx(
              classes.buttons,
              classes.deactive,
              (currentPage === 0 || currentPage === 1) && classes.deactiveButton
            )}
          >
            <div className="flex items-center gap-2">
              <ArrowLeftIcon className="h-6 w-6" />
              <h2>Previous</h2>
            </div>
          </li>
          <div className="flex">
            {paginationRange &&
              paginationRange.map((pageNumber) => (
                <li
                  key={pageNumber}
                  className={clsx(
                    classes.default,
                    currentPage !== pageNumber && classes.deactive,
                    currentPage === pageNumber && classes.active
                  )}
                  onClick={() => onPageChange(Number(pageNumber))}
                >
                  {pageNumber}
                </li>
              ))}
          </div>
          <li
            onClick={onNext}
            className={clsx(
              classes.buttons,
              classes.deactive,
              paginationRange &&
                paginationRange.length === currentPage &&
                classes.deactiveButton
            )}
          >
            <div className="flex items-center gap-2">
              <h2>Next</h2>
              <ArrowRightIcon className="h-6 w-6" />
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
};
