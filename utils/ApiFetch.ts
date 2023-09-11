import type { ApiResponse } from '@/types/apiType';

type ParamsTypes = {
  [key: string]: string | number;
};

interface ApiFetchProps {
  url: string;
  params?: ParamsTypes | '';
  body?: any;
  authToken?: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  header?: object;
  isFormData?: boolean;
}

export default async function ApiFetch<
  T,
  PayloadKeyType extends 'single' | 'collection' = 'collection'
>({
  url,
  params = '',
  body = null,
  authToken,
  method,
  header,
  isFormData = false,
}: ApiFetchProps): Promise<ApiResponse<T, PayloadKeyType>> {
  // @ts-ignore
  const urlParams = new URLSearchParams(params).toString();

  let requestBody = null;

  if (method !== 'GET') {
    if (isFormData) {
      requestBody = body;
    } else {
      requestBody = JSON.stringify(body);
    }
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL + url}?${urlParams}`,
    {
      cache: 'no-store',
      method,
      headers: {
        ...(authToken && {
          Authorization: `Bearer ${authToken}`,
        }),
        ...((method === 'POST' || method === 'PUT') &&
          !isFormData && {
            'Content-Type': 'application/json',
          }),
        ...header,
      },
      body: requestBody,
    }
  );

  if (!res.ok) {
    // throw new Error('Failed to fetch');
    // console.log('Error to fetch api', res.status);
  }

  return res.json();
}
