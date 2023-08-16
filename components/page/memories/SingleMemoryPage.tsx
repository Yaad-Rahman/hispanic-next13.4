'use client';

import type { MemoryType } from '@/types/memoryType';

export const SingleMemoryPage = ({ memories }: { memories: MemoryType[] }) => {
  return <div>{memories.map((memory) => memory.caption)}</div>;
};
