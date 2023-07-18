import { Button } from '../Button';
import { Typography } from '../Typography';

export const InstagramCard = () => {
  return (
    <div className="rounded-lg bg-white py-3">
      <div className="flex items-center justify-between px-3">
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
              737 followers
            </Typography>
          </div>
        </div>
        <Button size="xs" label="View Profile" variant="lightBlue" />
      </div>

      <img
        src="/test/instaDJLOBO.svg"
        alt="wallpaper"
        className="mt-3 h-[120px] w-full object-cover"
      />
      <div className="border-b px-3 py-[14px]">
        <a href="#" className="text-sm font-semibold text-button-blue">
          View More on Instagram
        </a>
      </div>
      <div className="mt-2 flex justify-between px-3">
        <div className="flex gap-4">
          <img
            src="/logos/instagram-like.svg"
            alt="like"
            className="h-[22px] w-[22px]"
          />
          <img
            src="/logos/instagram-comment.svg"
            alt="comment"
            className="h-[22px] w-[22px]"
          />
          <img
            src="/logos/instagram-share.svg"
            alt="share"
            className="h-[22px] w-[22px]"
          />
        </div>

        <img
          src="/logos/instagram-tag.svg"
          alt="tag"
          className="h-[22px] w-[22px]"
        />
      </div>
      <Typography size="small" weight="semibold" className="mt-2 px-3 pb-2">
        53 likes
      </Typography>
      <div className="flex justify-between border-t px-3 pt-[14px]">
        <Typography size="small" weight="normal" variant="medium" lexend>
          Add a comment...
        </Typography>
        <img
          src="/logos/instagramLogo.svg"
          alt="instagram"
          className="h-[23px] w-[23px]"
        />
      </div>
    </div>
  );
};
