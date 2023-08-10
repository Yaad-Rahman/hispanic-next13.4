import type { ImageType } from './commonTypes';

export type AlbumType = {
  createdBy: string;
  creationDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  id: number;
  description: string;
  name: string;
  coverPhoto?: ImageType;
  active: string;
  creationDateTimeStamp: number;
  creationDateTimetoInstant: number;
  lastModifiedDateTimetoInstant: number;
  lastModifiedDateTimeStamp: number;
};

export type MemoryType = {
  albumId: number;
  caption: string;
  createdBy: string;
  creationDate: string;
  creationDateTimeStamp: number;
  creationDateTimetoInstant: number;
  description: string;
  id: number;
  image: ImageType;
  lastModifiedBy: string;
  lastModifiedDate: string;
  lastModifiedDateTimeStamp: number;
  lastModifiedDateTimetoInstant: number;
};
