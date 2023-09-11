export type RankAndBoroughsType = {
  createdBy: string;
  creationDate: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
  id: number;
  rankName: string;
  rankType: 'BOROUGH' | 'RANK';
  priority: number;
  active: boolean;
  creationDateTimeStamp: number;
  creationDateTimetoInstant: number;
  lastModifiedDateTimetoInstant: number;
  lastModifiedDateTimeStamp: number;
};
