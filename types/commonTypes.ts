export type ImageType = {
  createdBy: string;
  creationDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  id: number;
  fileName: string;
  fileType: string;
  fileExtension: string;
  mimeType: string;
  fileKey: string;
  uploadType: string;
  deleted: boolean;
  fileUrl: string;
  creationDateTimeStamp: number;
  creationDateTimetoInstant: number;
  lastModifiedDateTimetoInstant: number;
  lastModifiedDateTimeStamp: number;
};

export type PaginationType = {
  currentPage: number;
  pageSize: number;
  totalCount: number;
};

export type AddressType = {
  addressLine1: string;
  addressLine2: string;
  country: string;
  createdBy: string;
  creationDate: string;
  creationDateTimeStamp: number;
  creationDateTimetoInstant: number;
  eventId: number;
  id: number;
  lastModifiedBy: string;
  lastModifiedDate: string;
  lastModifiedDateTimeStamp: number;
  lastModifiedDateTimetoInstant: number;
  latitude: number;
  longitude: number;
  postalCode: string;
  state: string;
  town: string;
  userId: number;
};
