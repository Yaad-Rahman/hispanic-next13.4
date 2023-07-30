import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';

export const useCreateQueryString = (searchParams: any) => {
  const router = useRouter();
  const pathName = usePathname();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return router.replace(`${pathName}?${params.toString()}`);
    },
    [searchParams]
  );

  const clearQueryString = useCallback(
    (name: string) => {
      const updatedSearchParams = new URLSearchParams(searchParams);
      updatedSearchParams.delete(name);
      return router.replace(`${pathName}?${updatedSearchParams.toString()}`);
    },
    [searchParams]
  );

  return { createQueryString, clearQueryString };
};
