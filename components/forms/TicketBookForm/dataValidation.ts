import * as Yup from 'yup';

import type { TicketBookValues } from './types';

const initialValues: TicketBookValues = {
  ticketCategoryId: null,
  quantity: 0,
};

const validationSchema = Yup.object().shape({
  ticketCategoryId: Yup.number().required(),
  quantity: Yup.number().required(),
});

export { initialValues, validationSchema };
