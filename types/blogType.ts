import type { ImageType } from './commonTypes';

export type PostType = {
  createdBy: string;
  creationDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  id: number;
  title: string;
  subTitle: string;
  coverImg: ImageType;
  blogUUID: string;
  description: string;
  content: string;
  pinned: boolean;
  active: boolean;
  creationDateTimeStamp: number;
  creationDateTimetoInstant: number;
  lastModifiedDateTimetoInstant: number;
  lastModifiedDateTimeStamp: number;
};

export type BlogType = {
  createdBy: string;
  creationDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  id: number;
  uuid: string;
  title: string;
  subtitle: string;
  coverImage: ImageType;
  blogType: string;
  pinned: boolean;
  creationDateTimeStamp: number;
  creationDateTimetoInstant: number;
  lastModifiedDateTimetoInstant: number;
  lastModifiedDateTimeStamp: number;
};
