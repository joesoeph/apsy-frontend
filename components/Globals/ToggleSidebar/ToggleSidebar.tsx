'use client';

import { SidebarDisplayContext } from '@/components/Globals/Providers/SidebarDisplayProvider';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@nextui-org/button';
import { useContext } from 'react';

export const ToggleSidebar = () => {
  const { isDisplaySidebar, toggleSidebar } = useContext(SidebarDisplayContext);
  return (
    <>
      <Button
        isIconOnly
        variant="faded"
        aria-label="Toggle Sidebar Menu"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <p>{isDisplaySidebar ? 'shown' : 'hidden'}</p>
    </>
  );
};
