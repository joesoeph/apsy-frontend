'use client';

import { Icon } from '@/components/Globals/Icons/Icons';
import { CompaniesDropdown } from '@/components/Sidebar/CompaniesDropdown';
import { SidebarChildMenu } from '@/components/Sidebar/SidebarChildMenu';
import { SidebarParentMenu } from '@/components/Sidebar/SidebarParentMenu';
import { menus } from '@/components/Sidebar/data';
import { sidebar } from '@/components/Sidebar/variant';
import { SidebarDisplayContext } from '@/providers/SidebarDisplayProvider';
import { Divider } from '@nextui-org/divider';
import { motion } from 'framer-motion';
import { useContext } from 'react';

export const Sidebar = () => {
  const items = Array.from({ length: 100 }, (v, i) => i + 1);
  const { isDisplaySidebar } = useContext(SidebarDisplayContext);

  return (
    <motion.div
      className={sidebar({ visibility: isDisplaySidebar ? 'shown' : 'hidden' })}
    >
      <CompaniesDropdown />

      <Divider className="my-4" />

      <div className="flex flex-col gap-4">
        {menus.map((parentMenu) => (
          <SidebarParentMenu key={parentMenu.id} title={parentMenu.name}>
            {parentMenu.children.map((child) => (
              <SidebarChildMenu
                key={child.id}
                icon={
                  <Icon
                    iconName="Circle"
                    color="royalblue"
                    size={20}
                    className="align-top"
                  />
                }
                title={child.name}
                href={child.pathUrl}
              />
            ))}
          </SidebarParentMenu>
        ))}
      </div>
    </motion.div>
  );
};
