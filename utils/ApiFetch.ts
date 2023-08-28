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
}: ApiFetchProps): Promise<ApiResponse<T, PayloadKeyType>> {
  // @ts-ignore
  const urlParams = new URLSearchParams(params).toString();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL + url}?${urlParams}`,
    {
      cache: 'reload',
      method,
      headers: {
        ...(authToken && {
          Authorization: `Bearer ${authToken}`,
        }),
        ...(method === 'POST' && {
          'Content-Type': 'application/json',
        }),
        ...header,
      },
      body: method === 'GET' ? null : JSON.stringify(body),
    }
  );

  if (!res.ok) {
    // throw new Error('Failed to fetch');
    // console.log('Error to fetch api', res.status);
  }

  return res.json();
}
