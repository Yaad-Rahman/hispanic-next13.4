import { getAllMemories } from '@/api/memoriesApi';
import { SingleMemoryPage } from '@/components/page/memories/SingleMemoryPage';

export default async function SingleMemory({
  params: { id },
}: {
  params: { id: string };
}) {
  const memories = await getAllMemories(Number(id));

  console.log('memories data', memories);

  return <SingleMemoryPage memories={memories.payload.content} />;
}
