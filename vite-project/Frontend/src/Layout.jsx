import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./pages/SideBar";
import Header from "./pages/Header";

function Layout() {
  return (
    <div className="main-wrapper position-relative">
      <Header />
      {/* <SideBar /> */}
      <Outlet />
    </div>
  );
}

export default Layout;
