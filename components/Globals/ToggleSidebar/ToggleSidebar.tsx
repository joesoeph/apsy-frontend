'use client';

import { SidebarDisplayContext } from '@/providers/SidebarDisplayProvider';
import { Button } from '@nextui-org/button';
import { useContext } from 'react';
import { List } from 'react-bootstrap-icons';

export const ToggleSidebar = () => {
  const { toggleSidebar } = useContext(SidebarDisplayContext);
  return (
    <>
      <Button
        isIconOnly
        variant="faded"
        aria-label="Toggle Sidebar Menu"
        onClick={toggleSidebar}
      >
        <List size={20} />
      </Button>
    </>
  );
};
