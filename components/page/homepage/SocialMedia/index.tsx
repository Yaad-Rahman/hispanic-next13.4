import { Card, Heading } from '@hispanic-ui';

import { Container } from '@/components/layout/Container';

export const SocialMedia = () => {
  return (
    <div className="bg-secondary-400 py-24">
      <Container>
        <Heading level={5} color="white" center>
          Feeds
        </Heading>
        <Heading level={2.5} color="white" lexend className="mt-3" center>
          Social Media
        </Heading>
        <div className="mt-16">
          <Card />
        </div>
      </Container>
    </div>
  );
};
