// eslint-disable-next-line import/no-cycle
import { RadioButton, Typography } from '@hispanic-ui';
import { Formik } from 'formik';

import { initialValues, validationSchema } from './dataValidation';
import type { FormProps } from './types';

export const TicketBookForm = ({ ticketCategories }: FormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {}}
      validationSchema={validationSchema}
    >
      {({ values, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            <Typography weight="bold">Ticket Type</Typography>
            <div className="flex gap-[22px] rounded-lg bg-primary-25 px-4 py-3">
              {ticketCategories.map((ticketCat) => (
                <RadioButton
                  key={ticketCat.id}
                  name="ticketCategoryId"
                  setFieldValue={setFieldValue}
                  value={values.ticketCategoryId}
                  labelTitle={ticketCat.categoryName}
                  labelSubTitle="$50"
                />
              ))}
            </div>
          </div>
          {/* <TicketQuantity /> */}
        </form>
      )}
    </Formik>
  );
};
