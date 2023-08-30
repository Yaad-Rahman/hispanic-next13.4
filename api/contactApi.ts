import type { ContactFormValues } from '@/components/forms/ContactForm/types';
import ApiFetch from '@/utils/ApiFetch';

async function postContact(body: ContactFormValues) {
  const response = await ApiFetch<any, 'single'>({
    url: 'user-message/send',
    method: 'POST',
    body,
  });

  return response;
}

export { postContact };
