import type { TicketCounterListType } from '@/types/ticketType';

export interface TicketBookValues {
  ticketCategoryId: number | null;
  quantity: number;
}

export type FormProps = {
  ticketCounterList: TicketCounterListType[];
  handleData: (
    getFieldProps: any,
    ticketCounterList: TicketCounterListType[]
  ) => null;
  onSubmit: (
    values: TicketBookValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (status: boolean) => void; resetForm: () => void }
  ) => void;
};
