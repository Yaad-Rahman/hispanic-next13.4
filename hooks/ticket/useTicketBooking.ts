import { getCookie } from 'cookies-next';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { postBookTicket } from '@/api/ticketsApi';
import type { TicketBookValues } from '@/components/forms/TicketBookForm/types';
import { DEFAULT_ERROR_MESSAGE } from '@/constants';
import { encryptData } from '@/libs/Encryption';
import type { EventType } from '@/types/eventType';
import type {
  PostBookTicketType,
  TicketCounterListType,
  URLTicketType,
} from '@/types/ticketType';

export const useTicketBooking = ({ event }: { event: EventType }) => {
  const router = useRouter();
  const params = useParams();
  const token = getCookie('token') ?? '';
  const { id } = params;
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [ticket, setTicket] = useState<TicketCounterListType | undefined>();
  const [ticketPrice, setTicketPrice] = useState<number>(0);
  const [ticketQuantity, setTicketQuantity] = useState<number>(0);
  const [ticketBookingValues, setTicketBookingValues] =
    useState<TicketBookValues | null>(null);

  // formik form request
  const SubmitFormikData = (values: TicketBookValues) => {
    console.log('submit formik data', values);
    setTicketBookingValues(values);
  };

  // book ticket api
  const SubmitTicket = async (paymentType: 'PAY_LATER' | 'BOOKED') => {
    const loading = toast.loading('Booking...');
    if (ticket) {
      const data: PostBookTicketType = {
        eventId: Number(id),
        ticketCartRequestSet: [
          {
            quantity: Number(ticketBookingValues?.quantity),
            ticketCategoryId: ticket?.ticketCategoryId,
          },
        ],
        ticketStatus: event.paid ? paymentType : 'FREE',
        tokenRequest: {
          currencyType: 'USD',
          token: paymentType === 'PAY_LATER' ? null : 'token token',
        },
      };

      try {
        const response = await postBookTicket(token, data);
        if (response.success) {
          toast.update(loading, {
            render: 'Ticket booked!',
            type: 'success',
            isLoading: false,
            autoClose: 3000,
            closeOnClick: true,
          });
          const ticketData: URLTicketType = {
            ticketType: paymentType,
            totalAmount: ticketPrice * ticketQuantity,
            totalTickets: ticketQuantity,
          };
          router.push(
            `/events/${id}/success?ticket=${encodeURIComponent(
              encryptData(ticketData)
            )}`
          );
        }
        toast.update(loading, {
          render: response.message ?? DEFAULT_ERROR_MESSAGE,
          type: 'error',
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
        });
      } catch (error: any) {
        toast.update(loading, {
          render: error.message ?? DEFAULT_ERROR_MESSAGE,
          type: 'error',
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
        });
      } finally {
        setModalOpen(false);
      }
    } else {
      toast.update(loading, {
        render: 'ticket not found',
        type: 'error',
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });
    }
  };

  const handleData = (
    getFieldProps: any,
    ticketCounterList: TicketCounterListType[]
  ) => {
    const selectedTicketCategoryId = getFieldProps('ticketCategoryId').value;

    const ticketList = ticketCounterList.find(
      (ti) => ti.ticketCategoryId === Number(selectedTicketCategoryId)
    );

    setTicket(ticketList);
    setTicketPrice(ticketList?.price ?? 0);
    setTicketQuantity(getFieldProps('quantity').value);

    return null;
  };

  return {
    modalOpen,
    setModalOpen,
    ticketPrice,
    ticketQuantity,
    handleData,
    SubmitFormikData,
    SubmitTicket,
  };
};
