import { getAllPostsOfABlog, getPostById } from '@/api/blogApi';
import { SingleNewsPage } from '@/components/page/SingleNewsPage';
import { NEWS_BLOGUUID } from '@/constants';

export default async function SingleNews({ params }: { params: any }) {
  const { id } = params;
  const newsData = await getPostById(id);

  const allNewsData = await getAllPostsOfABlog(NEWS_BLOGUUID, {
    ascOrDesc: 'desc',
    sortBy: 'creationDate',
  });

  return (
    <SingleNewsPage
      theNews={newsData.payload}
      latestNews={allNewsData.payload.content}
    />
  );
}
