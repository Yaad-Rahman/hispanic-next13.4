export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  agreedPolicy: boolean;
}

export type FormProps = {
  onSubmit: (
    values: ContactFormValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (status: boolean) => void; resetForm: () => void }
  ) => void;
};
