import { getAllAlbums } from '@/api/memoriesApi';
import { MemoriesPage } from '@/components/page/MemoriesPage';

export default async function Memories() {
  const albums = await getAllAlbums();

  return <MemoriesPage albums={albums.payload.content} />;
}
