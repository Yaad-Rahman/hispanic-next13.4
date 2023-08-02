import * as Yup from 'yup';

import { REQUIRED_FIELD_MESSAGE } from '@/constants';

import type { LoginValues } from './types';

const LoginFormInitialValues: LoginValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(REQUIRED_FIELD_MESSAGE),
  password: Yup.string().required(REQUIRED_FIELD_MESSAGE),
});

export { LoginFormInitialValues, validationSchema };
