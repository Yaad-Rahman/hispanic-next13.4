import { Typography } from '../Typography';

export const TwitterCard = () => {
  return (
    <div className="rounded-lg bg-white px-8 py-9">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <img
            src="/logos/logo.svg"
            alt="logo"
            className="h-12 w-12 object-contain"
          />
          <div className="flex flex-col">
            <Typography variant="dark" weight="bold">
              NYPDHispanic Society
            </Typography>
            <Typography size="small" variant="medium" weight="bold">
              @NYPDHispanic
            </Typography>
          </div>
        </div>
        <img src="/logos/twitterLogo.svg" alt="twitter" className="h-6 w-5" />
      </div>

      <Typography weight="bold" className="mt-2">
        Faucibus volutpat erat rutrum quis enim, tellus eget fames. In magna
        dictum dolor nec, elit volutpat eu nunc, nisi. Leo scelerisque in
        vulputate tincidunt ultricies blandit. Eu sapien, blandit lobortis
        pharetra at diam.
      </Typography>
      <Typography
        weight="bold"
        variant="medium"
        size="small"
        className="mt-2 border-b pb-5"
      >
        14:15 PM · Oct 19, 2022
      </Typography>
      <div className="mt-3 flex gap-[30px]">
        <div className="flex gap-2">
          <img
            src="/logos/twitter-like.svg"
            alt="like"
            className="h-[18px] w-[18px]"
          />
          <Typography size="small" variant="medium" weight="bold">
            8
          </Typography>
        </div>
        <div>
          <img
            src="/logos/twitter-comment.svg"
            alt="like"
            className="h-[18px] w-[18px]"
          />
        </div>
        <div className="flex gap-2">
          <img
            src="/logos/twitter-share.svg"
            alt="like"
            className="h-[18px] w-[18px]"
          />
          <Typography size="small" variant="medium" weight="bold">
            Share this Tweet
          </Typography>
        </div>
      </div>
    </div>
  );
};
