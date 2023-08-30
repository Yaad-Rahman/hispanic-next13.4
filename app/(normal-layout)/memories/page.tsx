import { getAllAlbums } from '@/api/memoriesApi';
import { MemoriesPage } from '@/components/page/MemoriesPage';
import { FormatPagination } from '@/libs/helpers/FormatPagination';

export default async function Memories({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const albumsData = await getAllAlbums({
    ...(searchParams?.category === 'Recent' && {
      sortBy: 'creationDate',
      ascOrDesc: 'desc',
    }),
    ...(searchParams?.page && { pageNo: searchParams?.page }),
    ...(searchParams?.name && { name: searchParams?.name }),
  });

  // pagination
  const pagination = FormatPagination(albumsData.payload);

  return (
    <MemoriesPage albums={albumsData.payload.content} pagination={pagination} />
  );
}
