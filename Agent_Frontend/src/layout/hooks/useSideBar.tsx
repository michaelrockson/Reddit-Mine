import { useState } from "react";
import { MdBarChart, MdDashboard, MdSettings } from "react-icons/md";
import { IoMdFunnel } from "react-icons/io";
import type { SideBarNavItems } from "../models/NavigationTypes.ts";

const navItems: SideBarNavItems[] = [
  {
    id: 0,
    navLabel: "Dashboard",
    icon: MdDashboard,
  },
  {
    id: 1,
    navLabel: "Painpoint Pipelines",
    icon: IoMdFunnel,
  },
  {
    id: 2,
    navLabel: "Reports & Analysis",
    icon: MdBarChart,
  },
  {
    id: 3,
    navLabel: "Agent Settings",
    icon: MdSettings,
  },
];

export function useSideBar(): { sideBarNavs: SideBarNavItems[] } {
  const [sideBarNavs] = useState(navItems);

  return { sideBarNavs };
}
