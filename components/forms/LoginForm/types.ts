export interface LoginValues {
  email: string;
  password: string;
}

export type OnSubmitProps = (
  values: LoginValues,
  {
    setSubmitting,
    resetForm,
  }: { setSubmitting: (status: boolean) => void; resetForm: () => void }
) => void;

export type FormProps = {
  onSubmit: OnSubmitProps;
};
