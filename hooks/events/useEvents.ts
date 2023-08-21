import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { debounce } from '@/libs/helpers/debounce';

import { useCreateQueryString } from '../useCreateQueryString';

export const useEvents = () => {
  const searchParams = useSearchParams();
  const [searchEvent, setSearchEvent] = useState<string>('');

  const { createQueryString, clearQueryString } =
    useCreateQueryString(searchParams);

  const handleSearch = (eventName: string) => {
    setSearchEvent(eventName);

    debounce(() => {
      if (eventName.length > 0) {
        createQueryString('name', eventName);
      } else {
        clearQueryString('name');
      }
    }, 1000);
  };

  return { searchEvent, handleSearch };
};
