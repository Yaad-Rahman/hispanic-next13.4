import { getAllBoardMemberCategories } from '@/api/boardMembersApi';
import { BoardPage } from '@/components/page/BoardPage';

export default async function Board() {
  const memberCateogories = await getAllBoardMemberCategories();

  console.log('board member', memberCateogories);

  return <BoardPage />;
}
