export interface ApiResponse {
  success: boolean;
  message: string;
  payload: PayloadType;
  status: string;
}

type PayloadType = {
  content: any[];
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
