import Navbar from "@/components/Navbar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <Navbar />
        {children}
    </div>
  );
}
