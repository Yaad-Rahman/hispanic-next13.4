import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

import { useCreateQueryString } from './useCreateQueryString';

export const usePagination = () => {
  const searchParams = useSearchParams();

  const { createQueryString } = useCreateQueryString(searchParams);

  const onPageChange = useCallback(
    (page: number) => {
      createQueryString('page', String(page));
    },
    [searchParams]
  );

  return { onPageChange };
};
