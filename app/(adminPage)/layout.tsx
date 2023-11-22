import { Footer } from '@/components/Footer/Footer';
import { Navbar } from '@/components/Navbar/Navbar';
import { Sidebar } from '@/components/Sidebar/Sidebar';
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

export default function AdminLayout({ children }: { children: ReactNode }) {
  const items = Array.from({ length: 100 }, (v, i) => i + 1);
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
          <Navbar />
          <div className="flex h-screen pt-[72px]">
            <Sidebar />
            <div className="relative flex w-full flex-row overflow-y-auto overscroll-y-contain bg-red-200">
              <div className="relative flex w-full flex-col bg-amber-400">
                <main className="relative bg-background p-4">
                  {children}
                  {items.map((item) => {
                    return <p key={item}>Content {item}</p>;
                  })}
                </main>
                <Footer />
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
