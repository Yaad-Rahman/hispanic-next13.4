import {
  getAllBoardMemberCategories,
  getAllBoardMembers,
} from '@/api/boardMembersApi';
import { BoardPage } from '@/components/page/BoardPage';
import type { BoardPageProps } from '@/types/boardType';

export default async function Board() {
  const memberCategories = await getAllBoardMemberCategories();

  const categories = memberCategories.payload.content.map((category) => ({
    id: category.id,
    name: category.name,
  }));

  const dataPromises = categories.map(async (category) => {
    const membersResponse = await getAllBoardMembers(category.id);
    if (
      membersResponse.payload.content &&
      membersResponse.payload.content.length > 0
    ) {
      return {
        category: category.name,
        members: membersResponse.payload.content,
      };
    }

    return null;
  });

  const data = await Promise.all(dataPromises);

  const filteredData = data.filter(
    (item) => item !== null
  ) as BoardPageProps['data'];

  return <BoardPage data={filteredData} />;
}
