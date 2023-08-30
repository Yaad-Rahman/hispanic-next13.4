export interface ApiResponse<
  T,
  PayloadKeyType extends 'single' | 'collection' = 'collection'
> {
  success: true;
  message: string;
  payload: PayloadKeyType extends 'single' ? T : PayloadType<T>;
  status: string;
}

export type PayloadType<T> = {
  content: T;
  pageable: {
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalElements: number;
  totalPages: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  size: number;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
};
