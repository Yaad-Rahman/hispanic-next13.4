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

export default async function ApiFetch({
  url,
  params = '',
  body = null,
  auth = false,
  method,
  header,
}: ApiFetchProps) {
  // @ts-ignore
  const urlParams = new URLSearchParams(params).toString();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL + url}?${urlParams}`,
    {
      method,
      headers: {
        ...(auth && { Authorization: `Bearer ${232332}` }),
        ...header,
      },
      body: method === 'GET' ? null : body,
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  return res.json();
}
