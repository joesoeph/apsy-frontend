'use client';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

interface Company {
  name: string;
  location: string;
}

export const CompaniesDropdown = () => {
  const [company, setCompany] = useState<Company>({
    name: 'Acme Co.',
    location: 'Palo Alto, CA',
  });
  return (
    <Dropdown
      classNames={{
        base: 'w-full min-w-[260px]',
      }}
    >
      <DropdownTrigger className="cursor-pointer">
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col gap-4">
            <h3 className="m-0 -mb-4 whitespace-nowrap text-xl font-medium text-default-900">
              {company.name}
            </h3>
            <span className="text-xs font-medium text-default-500">
              {company.location}
              <i className="bi bi-0-circle"></i>
            </span>
          </div>
          <Icon.CaretDownFill />
        </div>
      </DropdownTrigger>
      <DropdownMenu
        onAction={(e) => {
          if (e === '1') {
            setCompany({
              name: 'Facebook',
              location: 'San Fransico, CA',
            });
          }
          if (e === '2') {
            setCompany({
              name: 'Instagram',
              location: 'Austin, Tx',
            });
          }
        }}
        aria-label="Avatar Actions"
      >
        <DropdownSection title="Organizations">
          <DropdownItem
            key="1"
            description="San Fransico, CA"
            classNames={{
              base: 'py-4',
              title: 'text-base font-semibold',
            }}
          >
            Facebook
          </DropdownItem>
          <DropdownItem
            key="2"
            description="Austin, Tx"
            classNames={{
              base: 'py-4',
              title: 'text-base font-semibold',
            }}
          >
            Instagram
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
