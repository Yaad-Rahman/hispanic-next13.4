import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import type { Settings } from 'react-slick';
import Slider from 'react-slick';

import { Button } from '../Button';
import { Heading } from '../Heading';
import { Typography } from '../Typography';
import { classes } from './styles';

const PrevButton = (props: any) => (
  <div {...props} className={classes.arrowDivLeft}>
    <ChevronLeftIcon className={classes.arrowButton} />
  </div>
);

const NextButton = (props: any) => (
  <div {...props} className={classes.arrowDivRight}>
    <ChevronRightIcon className={classes.arrowButton} />
  </div>
);

export const CarouselSlider = () => {
  const router = useRouter();
  const settings: Settings = {
    dots: true,
    dotsClass: 'slick-dots mt-[20px]',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
  };

  return (
    <Slider {...settings}>
      <div>
        <div className="flex items-center justify-between">
          <div className="w-[538px]">
            <Heading level={0.5} color="white" className="!tracking-[-1.12px]">
              Welcome to the NYPD Hispanic Society
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
            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={() => router.push('/about')}
                label="Learn More"
                variant="white"
                startIcon={
                  <img src="/logos/play-circle.svg" alt="circle icon" />
                }
              />
              <Button
                onClick={() => router.push('/member')}
                label="Become A Member"
                variant="blue"
                size="large"
              />
            </div>
          </div>
          <div>
            <img
              src="/logos/main-logo.svg"
              alt="main logo"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </Slider>
  );
};
