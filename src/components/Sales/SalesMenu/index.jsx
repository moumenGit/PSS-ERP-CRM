import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export default function SalesMenu({ dropdownSidebar }) {
    // sales dropdown menu
  const salesData = [
    { name: "Manage Invoices", path: "/salesPages/managesales" },
    { name: "Create Invoice", path: "/" },
    { name: "Manage Estimates", path: "/salesPages/manageestimates" },
    { name: "Create Estimate", path: "/" },
    { name: "Credit Notes", path: "/salesPages/creditnotes" },
    { name: "Refund Receipts", path: "/" },
    { name: "Recurring Invoices", path: "/" },
    { name: "Client Payments", path: "/" },
    { name: "Sales Settings", path: "/" },
  ];

  //  router to get the path
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <div className="m-1 mb-2 duration-500 shadow-inner transition-all drop-shadow-md">
      {dropdownSidebar ? (
        <div className="bg-white flex flex-col items-center m-[2px] rounded">
          {salesData.map((link, index) => {
            return (
              <div key={index} className="w-full">
                <Link
                  href={link.path}
                  className={`flex flex-row items-start gap-3 p-2 hover:bg-[#e4e3e0] ${
                    link.path === pathName && "bg-[#e4e3e0]"
                  } `}
                >
                  {link.icon}
                  {link.name}
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="hidden"></div>
      )}
    </div>
  );
}
