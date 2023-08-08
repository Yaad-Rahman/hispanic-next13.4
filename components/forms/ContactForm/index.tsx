'use client';

import {
  Button,
  Checkbox,
  Input,
  Link,
  PhoneNumberInput,
  Textarea,
} from '@hispanic-ui';
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="col-span-2 sm:col-span-1">
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
            </div>
            <div className="col-span-2 sm:col-span-1">
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
            </div>
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

            <div className="col-span-2">
              <PhoneNumberInput
                name="phone"
                label="Phone number"
                // placeholder="Enter email"
                onChange={() => {}}
                value={values.email}
                // isDirty={touched.email}
                // validationError={
                //   touched.email && errors.email ? errors.email : undefined
                // }
              />
            </div>
            <div className="col-span-2">
              <Textarea
                name="message"
                label="Message"
                placeholder="Leave us a message..."
                onChange={handleChange}
                rows={4}
                value={values.message}
                isDirty={touched.message}
                validationError={
                  touched.message && errors.message ? errors.message : undefined
                }
              />
            </div>
            <div className="col-span-2 flex items-center gap-1">
              <Checkbox
                labelClassname="text-gray-500 font-lexendFont"
                label="You agree to our friendly"
                name="remember"
                onChange={() => {}}
              />
              <Link
                href="#"
                className="font-lexendFont text-gray-500 underline"
              >
                privacy policy
              </Link>
            </div>
          </div>
          <Button
            loading={false}
            className="mt-8"
            label="Send message"
            variant="black"
            type="submit"
            disabled={isSubmitting}
            fullWidth
          />
        </form>
      )}
    </Formik>
  );
};
