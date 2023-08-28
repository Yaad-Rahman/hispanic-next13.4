export interface SignupValues {
  name: string;
  email: string;
  password: string;
  essNumber?: string;
}

export type FormProps = {
  onSubmit: (
    values: SignupValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (status: boolean) => void; resetForm: () => void }
  ) => void;
};
