import ApiFetch from '@/utils/ApiFetch';

async function getAllBoardMemberCategories() {
  const response = await ApiFetch({
    url: 'board-member-category/all',
    method: 'GET',
  });

  return response;
}

export { getAllBoardMemberCategories };
