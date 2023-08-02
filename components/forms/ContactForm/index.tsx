'use client';

import { Button, Checkbox, Input, Typography } from '@hispanic-ui';
import { Formik } from 'formik';

import { ContactFormInitialValues, validationSchema } from './dataValidation';
import type { FormProps } from './types';

export const ContactForm = ({ onSubmit }: FormProps) => {
  return (
    <Formik
      initialValues={ContactFormInitialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        errors,
        touched,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Input
              name="firstName"
              label="First name"
              placeholder="First name"
              onChange={handleChange}
              value={values.email}
              isDirty={touched.email}
              validationError={
                touched.email && errors.email ? errors.email : undefined
              }
            />
            <Input
              name="lastName"
              label="Last name"
              placeholder="Last name"
              onChange={handleChange}
              value={values.email}
              isDirty={touched.email}
              validationError={
                touched.email && errors.email ? errors.email : undefined
              }
            />
            <div className="col-span-2">
              <Input
                name="email"
                label="Email"
                placeholder="Enter email"
                onChange={handleChange}
                value={values.email}
                isDirty={touched.email}
                validationError={
                  touched.email && errors.email ? errors.email : undefined
                }
              />
            </div>

            <div className="flex justify-between">
              <Checkbox
                label="Remember for 30 days"
                name="remember"
                onChange={() => console.log('hello')}
              />
              <Button type="button" label="Forgot password" variant="text" />
            </div>
          </div>
          <Button
            loading={true}
            className="mt-5"
            label="Submit"
            variant="black"
            type="submit"
            disabled={isSubmitting}
            fullWidth
          />
          <div className="mt-8 flex justify-center gap-1">
            <Typography size="small" variant="lightGray" lexend>
              Don’t have an account?
            </Typography>
            <Button type="button" label="Sign up" variant="text" />
          </div>
        </form>
      )}
    </Formik>
  );
};
