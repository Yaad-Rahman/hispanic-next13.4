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

async function getAllPostsOfABlog(blogUUID: string, params?: any) {
  const response = await ApiFetch<PostType[]>({
    url: 'posts/all',
    method: 'GET',
    params: {
      blogUUID,
      ...params,
    },
  });

  return response;
}

async function getPostById(id: number) {
  const response = await ApiFetch<PostType, 'single'>({
    url: `posts/id/${id}`,
    method: 'GET',
  });

  return response;
}

export { getAllBlogs, getAllPostsOfABlog, getPostById };
