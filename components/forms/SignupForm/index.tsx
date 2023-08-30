'use client';

import { Button, Input, Typography } from '@hispanic-ui';
import { Formik } from 'formik';
import { useRouter } from 'next/navigation';

import { SignupInitialValues, validationSchema } from './dataValidation';
import type { FormProps } from './types';

export const SignupForm = ({ onSubmit }: FormProps) => {
  const router = useRouter();
  return (
    <Formik
      initialValues={SignupInitialValues}
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
              name="name"
              label="Name*"
              placeholder="Enter your name"
              onChange={handleChange}
              value={values.name}
              isDirty={touched.name}
              validationError={
                touched.name && errors.name ? errors.name : undefined
              }
            />
            <Input
              name="email"
              label="Email*"
              placeholder="Enter your email"
              onChange={handleChange}
              value={values.email}
              isDirty={touched.email}
              validationError={
                touched.email && errors.email ? errors.email : undefined
              }
            />
            <Input
              name="password"
              label="Password*"
              type="password"
              placeholder="Create a password"
              onChange={handleChange}
              value={values.password}
              isDirty={touched.password}
              validationError={
                touched.password && errors.password
                  ? errors.password
                  : undefined
              }
              helperText="Must be at least 8 characters."
            />
            <Input
              name="essNumber"
              label="Ess Number (optional)"
              placeholder="Enter your ess number"
              onChange={handleChange}
              value={values.essNumber}
              isDirty={touched.essNumber}
              validationError={
                touched.essNumber && errors.essNumber
                  ? errors.essNumber
                  : undefined
              }
            />
          </div>
          <Button
            loading={false}
            className="mt-6"
            label="Get started"
            variant="black"
            type="submit"
            disabled={isSubmitting}
            fullWidth
          />
          <div className="mt-8 flex justify-center gap-1">
            <Typography size="small" variant="lightGray" lexend>
              Already have an account?
            </Typography>
            <Button
              onClick={() => router.push('/login')}
              type="button"
              label="Log in"
              variant="text"
            />
          </div>
        </form>
      )}
    </Formik>
  );
};
