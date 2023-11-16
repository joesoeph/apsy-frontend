'use client';

import { Footer } from '@/components/Footer/Footer';
import { Navbar } from '@/components/Navbar/Navbar';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { fontSans } from '@/config/fonts';
import '@/styles/globals.css';
import { SidebarContextPropsType } from '@/types';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import clsx from 'clsx';
import { ReactNode, createContext, useState } from 'react';
import { Providers } from './providers';

config.autoAddCss = false; /* eslint-disable import/first */

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   themeColor: [
//     { media: '(prefers-color-scheme: light)', color: 'white' },
//     { media: '(prefers-color-scheme: dark)', color: 'black' },
//   ],
//   icons: {
//     icon: '/favicon.ico',
//     shortcut: '/favicon-16x16.png',
//     apple: '/apple-touch-icon.png',
//   },
// };

export const SidebarContext = createContext<
  SidebarContextPropsType | undefined
>(undefined);

export default function RootLayout({ children }: { children: ReactNode }) {
  const items = Array.from({ length: 100 }, (v, i) => i + 1);
  const [isDisplaySidebar, setIsDisplaySidebar] = useState(true);

  function toggleSidebar() {
    setIsDisplaySidebar((prev) => !prev);
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <SidebarContext.Provider value={{ isDisplaySidebar, toggleSidebar }}>
            <Navbar />
            <div className="flex">
              <Sidebar />
              <div
                className={clsx(
                  'relative',
                  'flex',
                  'min-h-screen',
                  'flex-col',
                  'bg-amber-400',
                  'grow',
                  isDisplaySidebar && 'pl-[200px]',
                )}
              >
                <main className="grow bg-violet-300 p-4">
                  <div className="mt-12"></div>
                  {children}
                  {items.map((item) => {
                    return <p key={item}>Content {item}</p>;
                  })}
                </main>
                <Footer />
              </div>
            </div>
          </SidebarContext.Provider>
        </Providers>
      </body>
    </html>
  );
}
