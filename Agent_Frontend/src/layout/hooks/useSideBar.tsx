import { useState } from "react";
import { MdBarChart, MdDashboard, MdSettings } from "react-icons/md";
import { IoMdFunnel } from "react-icons/io";
import type { SideBarNavItems } from "../models/NavigationTypes.ts";

const navItems: SideBarNavItems[] = [
  { id: 0, navLabel: "Dashboard", path: "/dashboard", icon: MdDashboard },
  {
    id: 1,
    navLabel: "Painpoint Pipelines",
    path: "/dashboard/pipeline",
    icon: IoMdFunnel,
  },
  {
    id: 2,
    navLabel: "Reports & Analysis",
    path: "/dashboard/reports",
    icon: MdBarChart,
  },
  {
    id: 3,
    navLabel: "Agent Settings",
    path: "/dashboard/settings",
    icon: MdSettings,
  },
];

export function useSideBar(): { sideBarNavs: SideBarNavItems[] } {
  const [sideBarNavs] = useState(navItems);

  return { sideBarNavs };
}
