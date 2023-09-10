import './globals.css';

import { Kanit, Lexend } from 'next/font/google';

import { AuthWrapper } from '@/libs/helpers/AuthWrapper';
import { ProviderWrapper } from '@/redux/ProviderWrapper';

const kanit = Kanit({
  weight: ['700', '600', '500', '400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kanit',
});

const lexend = Lexend({
  weight: ['700', '600', '500', '400', '300'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

export const metadata = {
  title: 'Hispanic Society of NYPD',
  description: 'Hispanic Society of NYPD',
  icons: {
    icon: '/logos/logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${kanit.variable} ${lexend.variable}`}>
      <body className="font-kanitFont">
        <ProviderWrapper>
          <AuthWrapper>{children}</AuthWrapper>
        </ProviderWrapper>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
