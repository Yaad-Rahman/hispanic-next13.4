import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { Button } from '@hispanic-ui';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

import { NavMenus } from '@/constants/testData';
import { useHeaderFooter } from '@/hooks/useHeaderFooter';

import { Container } from '../../Container';
import { classes } from '../styles';
import { LoggedInSection } from '../web/LoggedInSection';

export const NavbarMobile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { getVariant, user } = useHeaderFooter();

  const pathName = usePathname();
  const router = useRouter();

  const handleToggle = useCallback(() => setOpen(!open), [open]);

  return (
    <div>
      <header
        className={clsx(
          'fixed inset-x-0 z-[900] w-full',
          (getVariant() === 'red' || getVariant() === 'red-blue') &&
            classes.background.red,
          getVariant() === 'blue' && classes.background.blue
        )}
      >
        <div>
          <Container>
            <div className="flex justify-between pt-5">
              <img
                src="/logos/logo.svg"
                alt="logo"
                className="h-10 w-10 cursor-pointer"
                onClick={() => router.push('/')}
              />
              <div className="flex items-center gap-4">
                {user ? (
                  <LoggedInSection user={user} />
                ) : (
                  <div className="flex gap-8">
                    <Button
                      onClick={() => router.push('/login')}
                      variant="text"
                      size="xs"
                      label="Log in"
                      className="!font-bold text-white"
                    />
                    <Button
                      size="xs"
                      onClick={() => router.push('/signup')}
                      variant="black"
                      label="Sign up"
                    />
                  </div>
                )}
                <Button
                  variant="text"
                  onClick={handleToggle}
                  label={undefined}
                  startIcon={<Bars4Icon className="h-6 w-6 text-white" />}
                />
              </div>
            </div>
          </Container>
        </div>
      </header>
      {open && (
        <div className="fixed left-0 top-0 z-[1000] h-full w-full overflow-y-scroll bg-secondary-300 bg-cover bg-center px-5 pt-4">
          <div className="flex items-center justify-between">
            <img
              src="/logos/logo.svg"
              alt="logo"
              className="h-10 w-10 cursor-pointer"
              onClick={() => router.push('/')}
            />
            <Button
              variant="text"
              onClick={handleToggle}
              label={undefined}
              startIcon={<XMarkIcon className="h-6 w-6 text-white" />}
            />
          </div>
          <div className="mt-14 flex flex-col gap-6 text-center">
            {NavMenus.map((menu) => (
              <Link
                href={menu.link}
                key={menu.id}
                onClick={() => setOpen(false)}
              >
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
      )}
    </div>
  );
};
