import * as Yup from 'yup';

import { REQUIRED_FIELD_MESSAGE } from '@/constants';

import type { ContactFormValues } from './types';

const ContactFormInitialValues: ContactFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  agreedPolicy: false,
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(REQUIRED_FIELD_MESSAGE),
  lastName: Yup.string().required(REQUIRED_FIELD_MESSAGE),
  email: Yup.string().email().required(REQUIRED_FIELD_MESSAGE),
  phone: Yup.string().required(REQUIRED_FIELD_MESSAGE),
  message: Yup.string().required(REQUIRED_FIELD_MESSAGE),
  agreedPolicy: Yup.boolean(),
});

export { ContactFormInitialValues, validationSchema };
