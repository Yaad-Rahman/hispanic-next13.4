'use client';

import { Button, Checkbox, Input, Typography } from '@hispanic-ui';
import { Formik } from 'formik';

import { LoginFormInitialValues, validationSchema } from './dataValidation';
import type { FormProps } from './types';

export const LoginForm = ({ onSubmit }: FormProps) => {
  return (
    <Formik
      initialValues={LoginFormInitialValues}
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
          <div className="grid grid-cols-1 gap-5">
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
            <Input
              name="password"
              label="Password"
              type="password"
              placeholder="Enter password"
              onChange={handleChange}
              value={values.password}
              isDirty={touched.password}
              validationError={
                touched.password && errors.password
                  ? errors.password
                  : undefined
              }
            />
            <div className="flex justify-between">
              <Checkbox
                label="Remember for 30 days"
                name="remember"
                onChange={() => {}}
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
