import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';

import {
  CheckIcon,
  CopyIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from '../../icons';
import { Button } from '../Button';

const iconClass = 'p-2.5 rounded-lg bg-white text-gray-400';

const hoverClass =
  'hover:bg-primary-800 hover:text-white hover:stroke-primary-800 ';

export const SocialShare = () => {
  const [shareUrl, setShareUrl] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
    setShareUrl(document.URL);
  }, []);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    }
    return undefined;
  }, [copied]);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        setCopied(true);
      })
      .catch(() => {});
  };

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="text"
        startIcon={
          copied ? (
            <CheckIcon className="h-6 w-6 text-green-500" />
          ) : (
            <CopyIcon />
          )
        }
        label={copied ? 'Copied' : 'Copy link'}
        className={clsx(
          'rounded-lg bg-white px-4 py-2.5 font-semibold text-gray-600',
          hoverClass
        )}
        onClick={handleCopy}
      />
      {clientReady && (
        <>
          <TwitterShareButton url={shareUrl}>
            <Button
              variant="text"
              startIcon={<TwitterIcon />}
              label={undefined}
              className={clsx(iconClass, hoverClass)}
            />
          </TwitterShareButton>
          <FacebookShareButton url={shareUrl}>
            <Button
              variant="text"
              startIcon={<FacebookIcon />}
              label={undefined}
              className={clsx(iconClass, hoverClass)}
            />
          </FacebookShareButton>
          <LinkedinShareButton url={shareUrl}>
            <Button
              variant="text"
              startIcon={<LinkedinIcon />}
              label={undefined}
              className={clsx(iconClass, hoverClass)}
            />
          </LinkedinShareButton>
        </>
      )}
    </div>
  );
};
