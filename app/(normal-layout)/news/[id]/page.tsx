'use client';

import { Heading, SocialShare, Typography } from '@hispanic-ui';

import { Container } from '@/components/layout/Container';
import { LatestNews } from '@/components/page';

export default function SingleNews() {
  return (
    <div
      className="pt-defaultPadding"
      style={{
        background:
          'linear-gradient(360deg, #081F3F 1.04%, rgba(67, 26, 36, 0.66) 43.23%, rgba(67, 26, 36, 0.00) 100%)',
      }}
    >
      <Container>
        <div>
          <Typography
            className="text-primary-100"
            variant="noStyle"
            lexend
            weight="bold"
          >
            Published 20 Jan 2022
          </Typography>
          <Heading className="mt-3" level={2} color="white" weight="normal">
            Llanina “Nina” Medina is retiring from SDPD
          </Heading>
          <Typography
            className="mt-6 text-primary-100"
            variant="noStyle"
            lexend
            size="xl"
          >
            Llanina Rosalia Medina (Nina) has worked for San Diego Police
            department for over 29 years. Throughout her career she has worked
            in Southeast Division.
          </Typography>
        </div>
        <img
          className="mb-24 mt-16 aspect-[27/16] w-full object-cover"
          src="/test/single-news.svg"
          alt="single"
        />
        <div className="flex justify-center">
          <div className="font-lexendFont text-lg text-white sm:w-[720px]">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
            posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
            feugiat sapien varius id. Eget quis mi enim, leo lacinia pharetra,
            semper. Eget in volutpat mollis at volutpat lectus velit, sed
            auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant
            diam at. Suscipit tristique risus, at donec. In turpis vel et quam
            imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
            <div className="mt-5 flex items-center justify-between border-t border-solid border-gray-200 pt-6">
              <Typography variant="lightGray" lexend weight="bold">
                Share this post
              </Typography>
              <SocialShare />
            </div>
          </div>
        </div>
        <LatestNews forNewspage />
      </Container>
    </div>
  );
}
