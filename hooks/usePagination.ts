import { useRouter } from 'next/router';
import { useCallback } from 'react';

export const usePagination = () => {
  const router = useRouter();

  const onPageChange = useCallback(
    (page: number) => {
      router.replace({
        pathname: router.pathname,
        query: {
          ...router.query,
          page,
        },
      });
    },
    [router]
  );

  return { onPageChange };
};
