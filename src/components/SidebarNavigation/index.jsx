import React from "react";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { GoNorthStar } from "react-icons/go";
import { TbReportMoney } from "react-icons/tb";
import { MdPointOfSale } from "react-icons/md";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { useRouter } from "next/router";
import { RiAdminLine } from "react-icons/ri";


export default function SidebarNavigation({open}) {
  //  router to get the path
  const router = useRouter();
  const pathName = router.pathname;

  // navbar data as an array of object
  const navData = [
    { name: "Home", path: "/", icon: <AiOutlineHome /> },
    { name: "Sales", path: "/sales", icon: <MdPointOfSale /> },
    { name: "Purchasing", path: "/purchasing", icon: <BiPurchaseTagAlt /> },
    { name: "Finance", path: "/finance", icon: <TbReportMoney /> },
    { name: "Inventory", path: "/inventory", icon: <GoNorthStar /> },
    {
      name: "Administration",
      path: "/administration",
      icon: <RiAdminLine />,
    },
  ];

  return (
    <div
      className={`bg-[#f5f4f2] h-screen relative pt-4 border duration-300 flex flex-col ${
        open ? "w-64 p-3" : "w-0"
      }`}
    >
      {navData.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathName && "bg-[#514c47] text-white rounded-md"
            } m-[2px]`}
          >
            <i
              className={`flex flex-row items-start gap-3 p-2 rounded-md  ${
                open ? "block" : "hidden"
              } ${link.path === pathName ? "bg-none" : "hover:bg-[#e4e3e0]"}`}
            >
              {link.icon}
              {link.name}
            </i>
          </Link>
        );
      })}
    </div>
  );
}
