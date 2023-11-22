import { fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import { Providers } from '@/providers/Providers';
import '@/styles/globals.css';
import clsx from 'clsx';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          'bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex w-full flex-row overflow-y-auto overscroll-y-contain">
            <div className="relative flex w-full flex-col">
              <main className="relative bg-background p-4">{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
