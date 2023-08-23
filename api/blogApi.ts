import type { BlogType, PostType } from '@/types/blogType';
import ApiFetch from '@/utils/ApiFetch';

async function getAllBlogs(params?: any) {
  const response = await ApiFetch<BlogType[]>({
    url: 'blogs/all',
    method: 'GET',
    params,
  });

  return response;
}

async function getAllPostsOfABlog(blogUUID: string) {
  const response = await ApiFetch<PostType[]>({
    url: 'posts/all',
    method: 'GET',
    params: {
      blogUUID,
    },
  });

  return response;
}

export { getAllBlogs, getAllPostsOfABlog };
