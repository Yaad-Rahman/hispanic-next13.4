// eslint-disable-next-line import/no-cycle
import { TicketQuantity } from '@hispanic-page-ui';
import { NotFound, RadioButton, Typography } from '@hispanic-ui';
import type { FormikProps } from 'formik';
import { Formik } from 'formik';
import { forwardRef, useImperativeHandle, useRef } from 'react';

import { initialValues, validationSchema } from './dataValidation';
import type { FormProps, TicketBookValues } from './types';

export const TicketBookForm = forwardRef(
  ({ ticketCounterList, handleData, onSubmit }: FormProps, ref) => {
    const formikRef = useRef<FormikProps<TicketBookValues> | null>(null);

    useImperativeHandle(ref, () => ({
      submit() {
        formikRef.current?.submitForm();
      },
    }));

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        innerRef={formikRef}
      >
        {({ handleSubmit, setFieldValue, getFieldProps }) => (
          <form onSubmit={handleSubmit}>
            <div className="mt-5">
              <Typography weight="bold">Ticket Type</Typography>
              <div
                className="flex gap-[22px] rounded-lg bg-primary-25 px-4 py-3"
                role="group"
              >
                {ticketCounterList.length > 0 ? (
                  ticketCounterList
                    .filter((t) => t.totalAvailable > 0)
                    .map((ticket) => (
                      <RadioButton
                        key={ticket.id}
                        name="ticketCategoryId"
                        value={ticket.ticketCategoryId}
                        labelTitle={ticket.ticketCategoryName}
                        labelSubTitle={`$${ticket.price}`}
                      />
                    ))
                ) : (
                  <NotFound
                    message="Sorry! No tickets available"
                    color="black"
                  />
                )}
              </div>
            </div>

            {getFieldProps('ticketCategoryId').value !== null && (
              <TicketQuantity
                onChange={(val) => setFieldValue('quantity', val)}
              />
            )}

            {/* sending data to hook  */}
            {getFieldProps('ticketCategoryId').value !== null &&
              getFieldProps('quantity').value !== null &&
              handleData(getFieldProps, ticketCounterList)}
          </form>
        )}
      </Formik>
    );
  }
);

TicketBookForm.displayName = 'TicketBookForm';
