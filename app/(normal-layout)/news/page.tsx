import { getAllPostsOfABlog } from '@/api/blogApi';
import NewsPage from '@/components/page/NewsPage';
import { NEWS_BLOGUUID } from '@/constants';
import { FormatPagination } from '@/libs/helpers/FormatPagination';

export default async function News({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const newsData = await getAllPostsOfABlog(NEWS_BLOGUUID, {
    title: searchParams?.title ?? '',
    ...(searchParams?.category === 'Recent' && {
      sortBy: 'creationDate',
      ascOrDesc: 'desc',
    }),
    ...(searchParams?.category === 'Top News' && {
      pinned: true,
    }),
  });

  return (
    <NewsPage
      news={newsData.payload.content}
      pagination={FormatPagination(newsData.payload)}
    />
  );
}
