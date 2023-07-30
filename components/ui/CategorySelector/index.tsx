import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';

import { useCreateQueryString } from '@/hooks/useCreateQueryString';

import { classes } from './styles';

export const CategorySelector = ({ categories }: { categories: string[] }) => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  const { createQueryString, clearQueryString } =
    useCreateQueryString(searchParams);

  return (
    <div className="flex gap-2">
      <p
        onClick={() => clearQueryString('category')}
        className={clsx(
          classes.default,
          category && classes.deactive,
          !category && classes.active
        )}
      >
        All
      </p>
      {categories.map((cat, key) => (
        <p
          onClick={() => createQueryString('category', cat)}
          key={key}
          className={clsx(
            classes.default,
            category !== cat && classes.deactive,
            category === cat && classes.active
          )}
        >
          {cat}
        </p>
      ))}
    </div>
  );
};
