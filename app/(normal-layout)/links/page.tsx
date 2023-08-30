'use client';

import { getAllLinks } from '@/api/linkApi';
import { LinkPage } from '@/components/page/LinkPage';

export default async function Links() {
  const LinksData = await getAllLinks();

  return <LinkPage links={LinksData.payload.content} />;
}
