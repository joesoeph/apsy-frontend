'use client';

import { SidebarContext } from '@/app/layout';
import clsx from 'clsx';
import { useContext } from 'react';

export const Sidebar = () => {
  const items = Array.from({ length: 100 }, (v, i) => i + 1);

  const { isDisplaySidebar } = useContext(SidebarContext);

  // className="fixed top-0 z-10 h-screen w-[200px] overflow-y-auto overscroll-contain bg-emerald-400 p-4"
  return (
    <nav
      className={clsx(
        'fixed',
        'top-0',
        'z-10',
        'h-screen',
        'overflow-y-auto',
        'overscroll-contain',
        'bg-emerald-400',
        'p-4',
        'w-[200px]',
        isDisplaySidebar ? 'flex flex-col' : 'hidden',
      )}
    >
      <h1 className="mt-12">Drawer</h1>
      {items.map((item) => {
        return <p key={item}>Menu {item}</p>;
      })}
    </nav>
  );
};
