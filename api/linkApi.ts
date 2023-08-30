import type { LinkType } from '@/types/linkType';
import ApiFetch from '@/utils/ApiFetch';

async function getAllLinks() {
  const response = await ApiFetch<LinkType[]>({
    url: 'badges/all',
    method: 'GET',
    params: {
      size: 30,
      deleted: 'false',
    },
  });

  return response;
}

export { getAllLinks };
