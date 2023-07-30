import { usePathname } from 'next/navigation';

export const useHeaderFooter = () => {
  const pathName = usePathname();

  const getVariant = (): 'red' | 'blue' => {
    switch (pathName) {
      case '/':
        return 'red';
      default:
        return 'blue';
    }
  };

  return { getVariant };
};
