import { useState } from "react";
import { MdDashboard, MdBarChart, MdSettings } from "react-icons/md";
import { FaReddit } from "react-icons/fa";
import type { IconType } from "react-icons";
import { IoMdFunnel } from "react-icons/io";

export type SideBarNavItems = {
  id: number;
  icon?: IconType;
  navLabel: string;
};

const navItems: SideBarNavItems[] = [
  {
    id: 0,
    navLabel: "Dashboard",
    icon: MdDashboard,
  },
  {
    id: 1,
    navLabel: "Active Subreddits",
    icon: FaReddit,
  },
  {
    id: 2,
    navLabel: "Painpoint Pipelines",
    icon: IoMdFunnel,
  },
  {
    id: 3,
    navLabel: "Reports & Analysis",
    icon: MdBarChart,
  },
  {
    id: 4,
    navLabel: "Agent Settings",
    icon: MdSettings,
  },
];

export function useSideBar(): { sideBarNavs: SideBarNavItems[] } {
  const [sideBarNavs] = useState(navItems);

  return { sideBarNavs };
}
