export interface LoginValues {
  email: string;
  password: string;
}

export type FormProps = {
  onSubmit: (
    values: LoginValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (status: boolean) => void; resetForm: () => void }
  ) => void;
};
