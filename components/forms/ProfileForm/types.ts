import type { RankAndBoroughsType } from '@/types/rankType';

export interface ProfileFormValues {
  image: any;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  rank: string;
  sheild: string;
  essNumber: string;
  dateOfBirth: string | number;
  commandCode: string;
  commandName: string;
  borough: string;
  dateOfAppointment: string | number;
  lastPromotionDate: string | number;
  activeStatus: 'ACTIVE' | 'RETIRED';
}

export type FormProps = {
  data: ProfileFormValues;
  boroughs: RankAndBoroughsType[];
  ranks: RankAndBoroughsType[];
  onSubmit: (
    values: ProfileFormValues,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (status: boolean) => void;
      resetForm: () => void;
    }
  ) => void;
};
