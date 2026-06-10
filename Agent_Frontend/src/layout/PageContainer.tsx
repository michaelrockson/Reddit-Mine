import React from "react";
import HeaderBar from "./HeaderBar.tsx";
import SideBar from "./SideBar.tsx";
import { Outlet } from "react-router-dom";

export default function PageContainer(): React.JSX.Element {
  return (
    <>
      <section className="li-grid li-grid-default-layout">
        <SideBar />
        <div className="li-flex li-flex-col li-h-full">
          <HeaderBar />
          <Outlet />
        </div>
      </section>
    </>
  );
}
