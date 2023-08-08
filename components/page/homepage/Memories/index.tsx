import { Heading } from '@hispanic-ui';
import React from 'react';

import { Container } from '@/components/layout/Container';
import { MemoriesData } from '@/constants/testData';

export const Memories = () => {
  return (
    <div className="bg-secondary-400 pt-24">
      <Heading level={5} color="white" center>
        Memories
      </Heading>

      <Heading level={2.5} color="white" lexend className="mt-3" center>
        Explore our Memories
      </Heading>

      <Container>
        <div className="grid grid-cols-1 gap-8 py-16 sm:grid-cols-3">
          {MemoriesData.map((memory, index, memoriesArray) => {
            if (index === 0) {
              return (
                <div key={index} className="flex flex-col gap-6">
                  <img
                    src={memory.image}
                    alt="memory"
                    className="h-[212px] w-full rounded-lg object-cover object-center"
                  />
                  <img
                    src={memoriesArray[1]?.image}
                    alt="memory"
                    className="h-[354px] w-full rounded-lg object-cover object-center"
                  />
                </div>
              );
            }

            if (index === 2) {
              return (
                <div key={index} className="flex flex-col gap-6">
                  <img
                    src={memory.image}
                    alt="memory"
                    className="h-[283px] w-full rounded-lg object-cover object-center"
                  />
                  <img
                    src={memoriesArray[3]?.image}
                    alt="memory"
                    className="h-[283px] w-full rounded-lg object-cover object-center"
                  />
                </div>
              );
            }

            if (index === 4) {
              return (
                <div key={index} className="flex flex-col gap-6">
                  <img
                    src={memory.image}
                    alt="memory"
                    className="h-[212px] w-full rounded-lg object-cover object-center"
                  />
                  <img
                    src={memoriesArray[5]?.image}
                    alt="memory"
                    className="h-[354px] w-full rounded-lg object-cover object-center"
                  />
                </div>
              );
            }

            return undefined;
          })}
        </div>
      </Container>
    </div>
  );
};
