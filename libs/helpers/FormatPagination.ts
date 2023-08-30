import type { PayloadType } from '@/types/apiType';

export const FormatPagination = (payload: PayloadType<any>) => {
  return {
    currentPage: payload.pageable.pageNumber,
    pageSize: payload.pageable.pageSize,
    totalCount: payload.totalElements,
  };
};
