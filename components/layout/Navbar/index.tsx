'use client';

import { ScreenResizer } from '@/components/ui';

import { NavbarMobile } from './mobile';
import { NavbarWeb } from './web';

export const Navbar = () => {
  return (
    <>
      <ScreenResizer displayOnly="desktop">
        <NavbarWeb />
      </ScreenResizer>
      <ScreenResizer displayOnly="mobile">
        <NavbarMobile />
      </ScreenResizer>
    </>
  );
};
