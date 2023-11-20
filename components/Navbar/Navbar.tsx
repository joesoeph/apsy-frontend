'use client';

import { Logo } from '@/components/Globals/Logo/Logo';
import { ToggleSidebar } from '@/components/Globals/ToggleSidebar/ToggleSidebar';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import { User } from '@nextui-org/user';
import NextLink from 'next/link';

export const Navbar = () => {
  return (
    <header className="fixed top-0 z-20 flex w-full items-center justify-between bg-background p-4 shadow-lg">
      <ToggleSidebar />

      <NextLink className="flex items-center justify-start gap-1" href="/">
        <Logo />
        <p className="font-bold text-inherit">ACME</p>
      </NextLink>

      <div className="flex items-center justify-between gap-6">
        <ThemeSwitch />
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <User
              as="button"
              avatarProps={{
                isBordered: true,
                src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
              }}
              className="transition-transform"
              description="Super Admin"
              name="Tony Reichert"
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="User Actions"
            variant="flat"
            disabledKeys={['info']}
          >
            <DropdownItem key="info" className="h-14 gap-2">
              <p className="font-bold">Signed in as</p>
              <p>John Doe (Super Admin)</p>
            </DropdownItem>
            <DropdownItem key="profile">Profile</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  );
};
