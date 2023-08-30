import { toast } from 'react-toastify';

import { postContact } from '@/api/contactApi';
import type { ContactFormValues } from '@/components/forms/ContactForm/types';
import { DEFAULT_ERROR_MESSAGE } from '@/constants';

export const useContact = () => {
  const submitContact = async (
    values: ContactFormValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (status: boolean) => void; resetForm: () => void }
  ) => {
    const loading = toast.loading('Sending...');
    setSubmitting(true);

    if (!values.agreedPolicy) {
      toast.update(loading, {
        render: 'Please agree with our policy',
        type: 'warning',
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });

      return;
    }

    try {
      const response = await postContact(values);
      if (response.success) {
        resetForm();
        toast.update(loading, {
          render: 'Message sent successfully',
          type: 'success',
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
        });
      } else {
        toast.update(loading, {
          render: response.message ?? DEFAULT_ERROR_MESSAGE,
          type: 'error',
          isLoading: false,
          autoClose: 3000,
          closeOnClick: true,
        });
      }
    } catch (error: any) {
      toast.update(loading, {
        render: error.message ?? DEFAULT_ERROR_MESSAGE,
        type: 'error',
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return { submitContact };
};
