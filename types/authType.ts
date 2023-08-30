import type { ImageType } from './commonTypes';

export type RoleType = {
  createdBy: string;
  creationDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  id: number;
  roleName: string;
  privileges: PrivilegeType[];
  roleType: string;
  description?: string;
  imageUrl?: string;
  creationDateTimeStamp: number;
  creationDateTimetoInstant: number;
  lastModifiedDateTimetoInstant: number;
  lastModifiedDateTimeStamp: number;
};

export type PrivilegeType = {
  createdBy: string;
  creationDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  id: number;
  name: string;
  descName: string;
  creationDateTimeStamp: number;
  creationDateTimetoInstant: number;
  lastModifiedDateTimetoInstant: number;
  lastModifiedDateTimeStamp: number;
};

export type UserType = {
  createdBy: string;
  creationDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  id: number;
  email: string;
  firstName: string;
  middleName: null;
  lastName: string;
  roles: RoleType[];
  displayPhoto: ImageType | null;
  isblocked: boolean;
  verified: boolean;
  deleted: boolean;
  creationDateTimeStamp: number;
  creationDateTimetoInstant: number;
  lastModifiedDateTimetoInstant: number;
  lastModifiedDateTimeStamp: number;
};

export interface SignInPayloadType {
  accessToken: string;
  tokenType: string;
  refreshToken: string;
  user: UserType;
}
