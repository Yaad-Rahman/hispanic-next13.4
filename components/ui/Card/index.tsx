import { FacebookCard } from './FacebookCard';
import { InstagramCard } from './InstagramCard';
import { TwitterCard } from './TwitterCard';

export const Card = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <TwitterCard />
      <FacebookCard />
      <InstagramCard />
    </div>
  );
};
