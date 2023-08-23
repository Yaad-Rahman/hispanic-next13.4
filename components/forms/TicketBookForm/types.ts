import type { TicketCategoryType } from '@/types/ticketType';

export interface TicketBookValues {
  ticketCategoryId: number | null;
  quantity: number;
}

export type FormProps = {
  ticketCategories: TicketCategoryType[];
  onSubmit: (
    values: TicketBookValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (status: boolean) => void; resetForm: () => void }
  ) => void;
};
