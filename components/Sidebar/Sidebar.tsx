'use client';

import { SidebarDisplayContext } from '@/components/Globals/Providers/SidebarDisplayProvider';
import { motion } from 'framer-motion';
import { useContext } from 'react';

export const Sidebar = () => {
  const items = Array.from({ length: 100 }, (v, i) => i + 1);
  const { isDisplaySidebar } = useContext(SidebarDisplayContext);

  const animationVariants = {
    hidden: { left: '-200px' },
    visible: { left: '0px' },
  };

  return (
    <motion.div
      className={
        'top-0 flex w-[200px] flex-col overflow-y-auto overscroll-contain bg-emerald-400'
      }
      style={{
        left: isDisplaySidebar ? '0px' : '-200px',
        position: isDisplaySidebar ? 'relative' : 'absolute',
        height: isDisplaySidebar ? 'auto' : '100vh',
        zIndex: isDisplaySidebar ? 20 : 2,
        padding: isDisplaySidebar ? '1rem' : 'calc(72px + 1rem) 1rem 1rem 1rem',
      }}
      animate={isDisplaySidebar ? 'visible' : 'hidden'}
      variants={animationVariants}
    >
      <h1>Drawer</h1>
      {items.map((item) => {
        return <p key={item}>Menu {item}</p>;
      })}
    </motion.div>
  );
};
