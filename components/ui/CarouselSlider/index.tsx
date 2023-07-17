import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import { Button } from '../Button';
import { Heading } from '../Heading';
import { Typography } from '../Typography';

export const CarouselSlider = () => {
  const settings = {
    dots: true,
    appendDots: (dots: any) => <div className="mt-20 bg-white">{dots}</div>,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <div className="flex items-center justify-between">
          <div className="w-[538px]">
            <Heading level={0.5} color="white" className="!tracking-[-1.12px]">
              Welcome to the NYPD Hispanic Society
            </Heading>
            <Typography size="xl" variant="white" className="mt-6" lexend>
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
              <Button label="Become A Member" variant="blue" size="large" />
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
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
    </Slider>
  );
};
