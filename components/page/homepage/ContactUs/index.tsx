import { Heading, Typography } from '@hispanic-ui';
import clsx from 'clsx';

import { Container } from '@/components/layout/Container';
import { GetInTouchData } from '@/constants/testData';

export const ContactUs = ({ forPage }: { forPage: 'home' | 'contact' }) => {
  const isForHome = forPage === 'home';
  return (
    <div
      className="py-24"
      style={{
        background: isForHome
          ? 'linear-gradient(180deg, #431A24 50%, rgba(67, 26, 36, 0.00) 185%),  #081F3F'
          : 'linear-gradient(360deg, #081F3F 1.04%, rgba(67, 26, 36, 0.66) 43.23%, rgba(67, 26, 36, 0.00) 100%)',
      }}
    >
      <Container>
        {isForHome && (
          <Typography
            weight="bold"
            lexend
            variant="noStyle"
            className="text-primary-100"
          >
            Contact Us
          </Typography>
        )}

        <Heading level={2.5} color="white" lexend className="mt-3">
          {isForHome ? 'Get in touch' : 'Contact us'}
        </Heading>

        <Heading
          level={5}
          color="noStyle"
          className={clsx(
            'mt-5',
            isForHome && 'text-primary-100',
            !isForHome && 'text-purple-200'
          )}
        >
          Reach out to the NYPDHS - Our Friendly Team Is Here to Help
        </Heading>

        <div className="mt-16 flex flex-col justify-between sm:flex-row">
          <div className="flex flex-col gap-12">
            {GetInTouchData.map((getintouch, index) => (
              <div className="flex gap-4" key={index}>
                <img src={getintouch.icon} alt="icon" className="h-12 w-12" />
                <div>
                  <Typography
                    size="xl"
                    variant="white"
                    weight="bold"
                    className="mt-[10px]"
                    lexend
                  >
                    {getintouch.title}
                  </Typography>
                  <Typography
                    className={clsx(
                      isForHome && 'text-primary-100',
                      !isForHome && 'text-purple-200'
                    )}
                    weight="bold"
                    lexend
                    variant="noStyle"
                  >
                    {getintouch.subTitle}
                  </Typography>
                  <Typography
                    variant="white"
                    weight="bold"
                    className="mt-5"
                    lexend
                  >
                    {getintouch.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
          <div>
            <img
              src="/test/fakeMap.svg"
              alt="fake map"
              className="h-[444px] w-[804px]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
