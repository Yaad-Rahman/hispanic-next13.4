'use client';

import { ImageCards } from '@hispanic-page-ui';
import { Button, Heading, Typography } from '@hispanic-ui';
import { useRouter } from 'next/navigation';

import { Container } from '@/components/layout/Container';
import type { BoardPageProps } from '@/types/boardType';

export const BoardPage = ({ data }: BoardPageProps) => {
  const router = useRouter();
  return (
    <div>
      <div className="aspect-[1574/695] w-full bg-[url('/images/board/board-bg.svg')] bg-cover bg-center bg-no-repeat py-28 pt-defaultPadding">
        <Container>
          <div className="sm:ml-24 sm:w-[538px]">
            <Heading level={0.5} color="white" className="!tracking-[-1.12px]">
              NYPD Hispanic Society Board 2023
            </Heading>
            <Typography
              weight="bold"
              size="xl"
              variant="white"
              className="mt-6"
              lexend
            >
              PAZ Y UNIDAD | EMBRACING OUR GENTE, RAICES AND IDENTITIES TO
              DEFINE THE FUTURE
            </Typography>
            <div className="mt-12 flex gap-3">
              <Button
                label="Learn More"
                variant="white"
                startIcon={
                  <img src="/logos/play-circle.svg" alt="circle icon" />
                }
              />
              <Button
                onClick={() => router.push('/signup')}
                label="Become A Member"
                variant="blue"
                size="large"
              />
            </div>
          </div>
        </Container>
      </div>
      <img
        src="/images/board/homes.svg"
        alt="homes"
        className="w-full translate-y-[-10px]"
      />
      <Container>
        <div className="my-24 flex flex-col gap-24">
          {data.map((member, index) => (
            <div key={index}>
              <Heading center className="mb-16 " level={3} color="white">
                {member.category}
              </Heading>
              <ImageCards members={member.members} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
