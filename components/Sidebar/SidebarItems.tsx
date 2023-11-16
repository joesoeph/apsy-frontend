'use client';

import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/accordion';

export const SidebarItems = () => {
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  return (
    <>
      <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </>
  );
};
