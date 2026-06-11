import React from "react";

export type SideBarNavItems = {
  id: number;
  navLabel: string;
  path: string;
  icon?: React.ComponentType;
};
