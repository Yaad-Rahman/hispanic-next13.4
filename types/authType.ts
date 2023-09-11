import type { ImageType } from './commonTypes';

export type FileUploadResponse = {
  createdBy: string;
  creationDate: string;
  creationDateTimeStamp: number;
  creationDateTimetoInstant: number;
  deleted: boolean;
  fileExtension: string;
  fileKey: string;
  fileName: string;
  fileType: string;
  fileUrl: string;
  id: number;
  lastModifiedBy: string;
  lastModifiedDate: string;
  lastModifiedDateTimeStamp: number;
  lastModifiedDateTimetoInstant: number;
  mimeType: string;
  uploadType: string;
};

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

export type UserDetailsType = {
  createdBy: string;
  creationDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  id: number;
  phone: string;
  dateOfBirth: number;
  userId: number;
  essNumber: string;
  shield: string;
  cmdCode: string;
  cmdCodeDescription: string;
  borough: string;
  rank: string;
  emailAlternative: string;
  beneficiary: string;
  delegate_name: string;
  appointedDate: number;
  lastPromotionDate: number;
  activeOrRetired: 'ACTIVE' | 'RETIRED';
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
  middleName: string;
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

export interface GetUserInfoType {
  user: UserType;
  userDetails: UserDetailsType;
  addressList: null;
}
