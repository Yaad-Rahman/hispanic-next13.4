export interface TicketBookValues {
  ticketCategoryId: number | null;
  quantity: number;
}

export type FormProps = {
  onSubmit: (
    values: TicketBookValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (status: boolean) => void; resetForm: () => void }
  ) => void;
};
