import { Typography } from '../Typography';

export const FacebookCard = () => {
  return (
    <div className="rounded-lg bg-white p-[13px]">
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
            <Typography size="small" variant="medium" lexend weight="normal">
              on Sunday
            </Typography>
          </div>
        </div>
        <img src="/logos/facebookLogo.svg" alt="twitter" className="h-6 w-5" />
      </div>

      <Typography className="mt-4 border-b pb-2" size="small" lexend>
        Beforehand I thought, ‘I’m going to have to do something extraordinary,’
        then I got in here and realised that I just need to do what I want to
        do. I just need to do what’s natural. And so, as we get closer to the
        show, I’m sort of struck with the reality that other people are going to
        see it. I think that’s the point of showing a collection. I just need to
        do what I want to do. I just need to do what’s natural. And so, as we
        get closer to the show, I’m sort of struck with the reality that other
        people are going to see it.
      </Typography>
      <div className="mt-3 flex gap-[30px]">
        <div className="flex gap-2">
          <img
            src="/logos/facebook-like.svg"
            alt="like"
            className="h-[18px] w-[18px]"
          />
          <Typography size="small" variant="medium" weight="bold">
            111
          </Typography>
        </div>
        <div className="flex gap-2">
          <img
            src="/logos/facebook-comment.svg"
            alt="like"
            className="h-[18px] w-[18px]"
          />
          <Typography size="small" variant="medium" weight="bold">
            14
          </Typography>
        </div>
        <div className="flex gap-2">
          <img
            src="/logos/facebook-share.svg"
            alt="like"
            className="h-[18px] w-[18px]"
          />
          <Typography size="small" variant="medium" weight="bold">
            16
          </Typography>
        </div>
      </div>
    </div>
  );
};
