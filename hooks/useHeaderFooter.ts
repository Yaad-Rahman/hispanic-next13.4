import { usePathname } from 'next/navigation';

export const useHeaderFooter = () => {
  const pathName = usePathname();

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

  return { getVariant };
};
