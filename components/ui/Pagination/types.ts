export type PaginationProps = {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
  paginationRange?: (string | number)[] | 0;
};

export type PaginationPropsSet = {
  onNext: () => void;
  onPrevious: () => void;
} & Pick<PaginationProps, 'onPageChange' | 'paginationRange' | 'currentPage'>;
