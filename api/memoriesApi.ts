import type { AlbumType, MemoryType } from '@/types/memoryType';
import ApiFetch from '@/utils/ApiFetch';

async function getAllAlbums() {
  const response = await ApiFetch<AlbumType[]>({
    url: 'albums/all',
    method: 'GET',
  });

  return response;
}

async function getAlbum(id: number) {
  const response = await ApiFetch<AlbumType, 'single'>({
    url: `albums/id/${id}`,
    method: 'GET',
  });

  return response;
}

async function getAllMemories(albumId: number) {
  const response = await ApiFetch<MemoryType[]>({
    url: 'memory-photos/all',
    method: 'GET',
    params: {
      albumId,
    },
  });

  return response;
}

export { getAlbum, getAllAlbums, getAllMemories };
