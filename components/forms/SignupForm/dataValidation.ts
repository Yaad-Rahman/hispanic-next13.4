import * as Yup from 'yup';

import { REQUIRED_FIELD_MESSAGE } from '@/constants';

import type { SignupValues } from './types';

const SignupInitialValues: SignupValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required(REQUIRED_FIELD_MESSAGE),
  email: Yup.string().email().required(REQUIRED_FIELD_MESSAGE),
  password: Yup.string().min(8).required(REQUIRED_FIELD_MESSAGE),
});

export { SignupInitialValues, validationSchema };
