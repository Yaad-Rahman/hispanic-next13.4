import type { ApiResponse } from '@/types/apiType';

type ParamsTypes = {
  [key: string]: string | number;
};

interface ApiFetchProps {
  url: string;
  params?: ParamsTypes | '';
  body?: any;
  auth?: boolean;
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
  auth = false,
  method,
  header,
}: ApiFetchProps): Promise<ApiResponse<T, PayloadKeyType>> {
  // @ts-ignore
  const urlParams = new URLSearchParams(params).toString();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL + url}?${urlParams}`,
    {
      method,
      headers: {
        ...(auth && {
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdXBlcl9hZG1pbkBkaXNsLmNvbSIsImlhdCI6MTY5MTU2MjM2OSwiZXhwIjoxNjkzNzA5ODUzfQ.tKLcKo11wuYZpIS0kX2F-C8q0FYEEnds408OoDvBU-DR0Kr0WH9uowIByUN8On6BtO-u8RSLy-19dwsg9hR7Yw`,
        }),
        ...header,
      },
      body: method === 'GET' ? null : body,
    }
  );

  if (!res.ok) {
    // throw new Error('Failed to fetch');
    console.log('Error to fetch api', res.status);
  }

  return res.json();
}
