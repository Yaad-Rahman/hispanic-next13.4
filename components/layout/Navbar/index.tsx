'use client';

import { Button } from '@hispanic-ui';
import Link from 'next/link';

import { NavMenus } from '@/constants/testData';

import { Container } from '../Container';

export const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 w-full bg-gradient-to-b from-primary-900 to-transparent py-2">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <img
              src="/logos/logo.svg"
              alt="logo"
              className="h-[63px] w-[63px]"
            />
            <div className="flex gap-8">
              {NavMenus.map((menu) => (
                <Link href={menu.link} key={menu.id}>
                  <p className="font-semibold text-white">{menu.name}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-8">
            <Button variant="text" label="Log in" />
            <Button variant="black" label="Sign up" />
          </div>
        </div>
      </Container>
    </div>
  );
};
