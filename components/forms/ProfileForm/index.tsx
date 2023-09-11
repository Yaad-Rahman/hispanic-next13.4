import { Button, ImageUploader, Input, Select } from '@hispanic-ui';
import { Formik } from 'formik';

import { ProfileFormInitialValues, validationSchema } from './dataValidation';
import type { FormProps } from './types';

export const ProfileForm = ({ data, boroughs, ranks, onSubmit }: FormProps) => {
  return (
    <Formik
      initialValues={data ?? ProfileFormInitialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({
        values,
        setFieldValue,
        handleChange,
        handleSubmit,
        errors,
        touched,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="col-span-2 flex justify-center">
              <ImageUploader
                name="image"
                value={
                  values?.image?.fileUrl ||
                  (values.image ? URL.createObjectURL(values.image) : null)
                }
                onChange={(file) => setFieldValue('image', file)}
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Input
                name="firstName"
                label="First name"
                placeholder="First name"
                onChange={handleChange}
                value={values.firstName}
                isDirty={touched.firstName}
                validationError={
                  touched.firstName && errors.firstName
                    ? errors.firstName
                    : undefined
                }
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Input
                name="middleName"
                label="Middle name"
                placeholder="Middle name"
                onChange={handleChange}
                value={values.middleName}
                isDirty={touched.middleName}
                validationError={
                  touched.middleName && errors.middleName
                    ? errors.middleName
                    : undefined
                }
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Input
                name="lastName"
                label="Last name"
                placeholder="Last name"
                onChange={handleChange}
                value={values.lastName}
                isDirty={touched.lastName}
                validationError={
                  touched.lastName && errors.lastName
                    ? errors.lastName
                    : undefined
                }
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
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
            <div className="col-span-2 sm:col-span-1">
              <Input
                name="phone"
                label="Phone"
                placeholder="Enter phone"
                onChange={handleChange}
                value={values.phone}
                isDirty={touched.phone}
                validationError={
                  touched.phone && errors.phone ? errors.phone : undefined
                }
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Select
                options={ranks.map((rank) => rank.rankName)}
                name="rank"
                label="Rank"
                placeholder="Select Rank"
                onChange={handleChange}
                value={values.rank || ''}
                isDirty={touched.rank}
                validationError={
                  touched.rank && errors.rank ? errors.rank : undefined
                }
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Input
                name="sheild"
                label="Sheild"
                placeholder="Enter sheild"
                onChange={handleChange}
                value={values.sheild}
                isDirty={touched.sheild}
                validationError={
                  touched.sheild && errors.sheild ? errors.sheild : undefined
                }
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Input
                name="essNumber"
                label="ESS Reference Number"
                placeholder="Enter ESS reference number"
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
            <div className="col-span-2 sm:col-span-1">
              <Input
                name="dateOfBirth"
                type="date"
                label="Date of Birth"
                placeholder="Enter date of birth"
                onChange={handleChange}
                value={String(values.dateOfBirth)}
                isDirty={touched.dateOfBirth}
                validationError={
                  touched.dateOfBirth && errors.dateOfBirth
                    ? errors.dateOfBirth
                    : undefined
                }
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Input
                name="commandCode"
                label="Command Code"
                placeholder="Enter your command code"
                onChange={handleChange}
                value={values.commandCode}
                isDirty={touched.commandCode}
                validationError={
                  touched.commandCode && errors.commandCode
                    ? errors.commandCode
                    : undefined
                }
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Input
                name="commandName"
                label="Command Name"
                placeholder="Enter your command name"
                onChange={handleChange}
                value={values.commandName}
                isDirty={touched.commandName}
                validationError={
                  touched.commandName && errors.commandName
                    ? errors.commandName
                    : undefined
                }
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Select
                options={boroughs.map((borough) => borough.rankName)}
                name="borough"
                label="Borough"
                placeholder="Select borough"
                onChange={handleChange}
                value={values.borough || ''}
                isDirty={touched.borough}
                validationError={
                  touched.borough && errors.borough ? errors.borough : undefined
                }
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Input
                name="dateOfAppointment"
                type="date"
                label="Date of Appointment"
                placeholder="Enter your date of appointment"
                onChange={handleChange}
                value={String(values.dateOfAppointment)}
                isDirty={touched.dateOfAppointment}
                validationError={
                  touched.dateOfAppointment && errors.dateOfAppointment
                    ? errors.dateOfAppointment
                    : undefined
                }
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Input
                name="lastPromotionDate"
                type="date"
                label="Last Promotion Date"
                placeholder="Enter last promotion date"
                onChange={handleChange}
                value={String(values.lastPromotionDate)}
                isDirty={touched.lastPromotionDate}
                validationError={
                  touched.lastPromotionDate && errors.lastPromotionDate
                    ? errors.lastPromotionDate
                    : undefined
                }
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <Select
                options={['ACTIVE', 'RETIRED']}
                name="activeStatus"
                label="Active Status"
                placeholder="Select active status"
                onChange={handleChange}
                value={values.activeStatus || ''}
                isDirty={touched.activeStatus}
                validationError={
                  touched.activeStatus && errors.activeStatus
                    ? errors.activeStatus
                    : undefined
                }
              />
            </div>
          </div>
          <Button
            loading={isSubmitting}
            className="mt-8"
            label="Update Profile"
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
