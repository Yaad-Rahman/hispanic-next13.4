'use client';

import { Button } from '@hispanic-ui';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { NavMenus } from '@/constants/testData';
import { useHeaderFooter } from '@/hooks/useHeaderFooter';

import { Container } from '../Container';
import { LoggedInSection } from './LoggedInSection';
import { classes } from './styles';

export const Navbar = () => {
  const { getVariant, user } = useHeaderFooter();

  const router = useRouter();
  const pathName = usePathname();
  return (
    <div
      className={clsx(
        'fixed left-0 top-0 z-[1000] w-full py-2',
        (getVariant() === 'red' || getVariant() === 'red-blue') &&
          classes.background.red,
        getVariant() === 'blue' && classes.background.blue
      )}
    >
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
                  <p
                    className={clsx(
                      pathName === menu.link && 'text-primary-400',
                      pathName !== menu.link &&
                        'text-white hover:text-primary-400',
                      'font-semibold'
                    )}
                  >
                    {menu.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          {user ? (
            <LoggedInSection user={user} />
          ) : (
            <div className="flex gap-8">
              <Button
                onClick={() => router.push('/login')}
                variant="text"
                label="Log in"
                className="!font-bold text-white"
              />
              <Button
                onClick={() => router.push('/signup')}
                variant="black"
                label="Sign up"
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
