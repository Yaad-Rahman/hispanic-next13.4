import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

import type { RootReducerState } from '@/redux/store';

export const useHeaderFooter = () => {
  const pathName = usePathname();
  const user = useSelector((state: RootReducerState) => state.auth.user);

  const getVariant = (): 'red' | 'blue' | 'red-blue' => {
    switch (pathName) {
      case '/':
        return 'red';
      case '/board':
        return 'red-blue';
      default:
        return 'blue';
    }
  };

  return { getVariant, user };
};
