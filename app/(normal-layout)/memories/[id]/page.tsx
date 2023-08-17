import { getAlbum, getAllMemories } from '@/api/memoriesApi';
import { SingleMemoryPage } from '@/components/page/SingleMemoryPage';

export default async function SingleMemory({
  params: { id },
}: {
  params: { id: string };
}) {
  const memories = await getAllMemories(Number(id));

  let album;
  if (memories.payload.content[0]?.albumId) {
    album = await getAlbum(memories.payload.content[0].albumId);
  }

  console.log('album data', album);

  return (
    <SingleMemoryPage
      memories={memories.payload.content}
      album={album?.payload}
    />
  );
}
