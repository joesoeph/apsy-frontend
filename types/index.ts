import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type SidebarContextPropsType = {
  isDisplaySidebar: boolean;
  toggleSidebar: () => void;
};
