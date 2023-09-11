import type { RankAndBoroughsType } from '@/types/rankType';
import ApiFetch from '@/utils/ApiFetch';

async function getAllRanksAndBoroughs(params: any) {
  const response = await ApiFetch<RankAndBoroughsType[]>({
    url: 'rank-borough-management/get/all',
    method: 'GET',
    params,
  });

  return response;
}

export { getAllRanksAndBoroughs };
