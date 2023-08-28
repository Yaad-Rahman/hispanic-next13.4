import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { debounce } from '@/libs/helpers/debounce';

import { useCreateQueryString } from './useCreateQueryString';

export const useSearch = (queryName: string) => {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState<string>('');

  const { createQueryString, clearQueryString } =
    useCreateQueryString(searchParams);

  const handleSearch = (eventName: string) => {
    setSearch(eventName);

    debounce(() => {
      if (eventName.length > 0) {
        createQueryString(queryName, eventName);
      } else {
        clearQueryString(queryName);
      }
    }, 1000);
  };

  return { search, handleSearch };
};
