import type { ImageType } from './commonTypes';

export type LinkType = {
  createdBy: string;
  creationDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  id: number;
  title: string;
  description: string;
  link: string;
  displayLogo: ImageType | null;
  deleted: boolean;
  creationDateTimeStamp: number;
  creationDateTimetoInstant: number;
  lastModifiedDateTimetoInstant: number;
  lastModifiedDateTimeStamp: number;
};
