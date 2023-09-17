import Navbar from "@/components/Navbar";
import SidebarNavigation from "@/components/SidebarNavigation";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="">
      <Navbar />
       {/* <SidebarNavigation open={open}/> */}
        {children}
    </div>
  );
}
