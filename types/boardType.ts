import type { ImageType } from './commonTypes';

export type BoardMemberCategoryType = {
  createdBy: string;
  creationDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  id: number;
  name: string;
  precedence: null;
  active: true;
  creationDateTimeStamp: number;
  creationDateTimetoInstant: number;
  lastModifiedDateTimetoInstant: number;
  lastModifiedDateTimeStamp: number;
};

export type BoardMemberType = {
  createdBy: string;
  creationDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  id: number;
  name: string;
  businessEmail: string;
  phone: string;
  boardMemberCategoryId: number;
  designation: string;
  priority: number;
  description: string;
  displayPhoto?: ImageType;
  state: string;
  active: true;
  creationDateTimeStamp: number;
  creationDateTimetoInstant: number;
  lastModifiedDateTimetoInstant: number;
  lastModifiedDateTimeStamp: number;
};

export type BoardPageProps = {
  data: {
    category: string;
    members: BoardMemberType[];
  }[];
};
