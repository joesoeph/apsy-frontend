import { SidebarContextPropsType } from '@/types';
import { ReactNode, createContext, useState } from 'react';

export const SidebarDisplayContext = createContext<
  SidebarContextPropsType | undefined
>(undefined);

function SidebarDisplayProvider({ children }: { children: ReactNode }) {
  const [isDisplaySidebar, setIsDisplaySidebar] = useState(true);

  function toggleSidebar() {
    setIsDisplaySidebar((prev) => !prev);
  }

  return (
    <SidebarDisplayContext.Provider value={{ isDisplaySidebar, toggleSidebar }}>
      {children}
    </SidebarDisplayContext.Provider>
  );
}

export default SidebarDisplayProvider;
