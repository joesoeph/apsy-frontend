'use client';

import { SidebarContext } from '@/app/layout';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@nextui-org/button';
import { useContext } from 'react';

export const ToggleSidebar = () => {
  const x = useContext(SidebarContext);
  return (
    <>
      <Button
        isIconOnly
        variant="faded"
        aria-label="Toggle Sidebar Menu"
        onClick={x.toggleSidebar}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
    </>
  );
};
