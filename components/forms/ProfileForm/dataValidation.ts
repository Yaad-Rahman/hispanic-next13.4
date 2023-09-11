import * as Yup from 'yup';

import { REQUIRED_FIELD_MESSAGE } from '@/constants';

import type { ProfileFormValues } from './types';

const ProfileFormInitialValues: ProfileFormValues = {
  image: null,
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  phone: '',
  rank: '',
  sheild: '',
  essNumber: '',
  dateOfBirth: '',
  commandCode: '',
  commandName: '',
  borough: '',
  dateOfAppointment: '',
  lastPromotionDate: '',
  activeStatus: 'ACTIVE',
};

const validationSchema = Yup.object().shape({
  image: Yup.mixed().required(REQUIRED_FIELD_MESSAGE),
  firstName: Yup.string().required(REQUIRED_FIELD_MESSAGE),
  middleName: Yup.string().required(REQUIRED_FIELD_MESSAGE),
  lastName: Yup.string().required(REQUIRED_FIELD_MESSAGE),
  email: Yup.string().email().required(REQUIRED_FIELD_MESSAGE),
  phone: Yup.string().required(REQUIRED_FIELD_MESSAGE),
  rank: Yup.string().required(REQUIRED_FIELD_MESSAGE),
  sheild: Yup.string().nullable(),
  essNumber: Yup.string().required(REQUIRED_FIELD_MESSAGE),
  dateOfBirth: Yup.string().required(REQUIRED_FIELD_MESSAGE),
  commandCode: Yup.string().nullable(),
  commandName: Yup.string().nullable(),
  borough: Yup.string().required(REQUIRED_FIELD_MESSAGE),
  dateOfAppointment: Yup.string().nullable(),
  lastPromotionDate: Yup.string().required(REQUIRED_FIELD_MESSAGE),
  activeStatus: Yup.string().nullable(),
});

export { ProfileFormInitialValues, validationSchema };
