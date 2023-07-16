'use client';

import { Typography } from '@hispanic-ui';
import Link from 'next/link';

import {
  FooterIcons,
  FooterLegal,
  FooterSocial,
  NavMenus,
} from '@/constants/testData';

import { Container } from '../Container';

export const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-[#421B26] to-transparent py-16">
      <Container>
        <div className="grid grid-cols-6">
          <div className="col-span-2">
            <img
              src="/logos/main.png"
              alt="logo"
              className="h-[96px] w-[96px]"
            />
            <Typography
              variant="white"
              lexend
              className="mt-8 font-bold"
              weight="bold"
            >
              PAZ Y UNIDAD | EMBRACING OUR GENTE, RAICES AND IDENTITIES TO
              DEFINE THE FUTURE
            </Typography>
          </div>
          <div className="flex flex-col gap-4">
            <Typography variant="white" size="small">
              Society
            </Typography>
            <div className="flex flex-col gap-3">
              {NavMenus.slice(2).map((menu) => (
                <Link href={menu.link} key={menu.id}>
                  <Typography variant="white" lexend>
                    {menu.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Typography variant="white" size="small">
              Social
            </Typography>
            <div className="flex flex-col gap-3">
              {FooterSocial.map((menu) => (
                <Link href={menu.link} key={menu.id}>
                  <Typography variant="white" lexend>
                    {menu.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Typography variant="white" size="small">
              Legal
            </Typography>
            <div className="flex flex-col gap-3">
              {FooterLegal.map((menu) => (
                <Link href={menu.link} key={menu.id}>
                  <Typography variant="white" lexend>
                    {menu.name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Typography variant="white" size="small">
              Get the app
            </Typography>
            <img
              src="/logos/google-play.svg"
              alt="google play"
              className="mt-4 h-10 w-[135px] object-contain"
            />
          </div>
        </div>
        <div className="mt-24 flex justify-between">
          <Typography variant="white">
            © {new Date().getFullYear()} NYPD Hispanic Society. All rights
            reserved.
          </Typography>
          <div className="flex gap-6">
            {FooterIcons.map((icon, index) => (
              <a key={index} href={icon.href}>
                <img src={icon.icon} alt="social" className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
