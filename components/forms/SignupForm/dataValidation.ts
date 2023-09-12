import * as Yup from 'yup';

import { REQUIRED_FIELD_MESSAGE } from '@/constants';

import type { SignupValues } from './types';

const SignupInitialValues: SignupValues = {
  name: '',
  email: '',
  password: '',
  essNumber: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required(REQUIRED_FIELD_MESSAGE),
  email: Yup.string().email().required(REQUIRED_FIELD_MESSAGE),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .matches(
      /^(?=.*\d)(?=.*[!@#$%&])[A-Za-z\d!@#$%&]*$/,
      'Password must contain at least one digit and one special character'
    )
    .required(REQUIRED_FIELD_MESSAGE),
  essNumber: Yup.string(),
});

export { SignupInitialValues, validationSchema };
