import type {
  BoardMemberCategoryType,
  BoardMemberType,
} from '@/types/boardType';
import ApiFetch from '@/utils/ApiFetch';

async function getAllBoardMemberCategories() {
  const response = await ApiFetch<BoardMemberCategoryType[]>({
    url: 'board-member-category/all',
    method: 'GET',
  });

  return response;
}

async function getAllBoardMembers(categoryId: number) {
  const response = await ApiFetch<BoardMemberType[]>({
    url: 'board-members/all',
    method: 'GET',
    params: {
      boardMemberCategoryId: categoryId,
    },
  });

  return response;
}

export { getAllBoardMemberCategories, getAllBoardMembers };
