import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineQuestionCircle,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import { GoNorthStar, GoPerson } from "react-icons/go";
import { TbReportMoney } from "react-icons/tb";
import { TfiMenu } from "react-icons/tfi";
import { FaRegComment } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { GrLogout } from "react-icons/gr";
import { MdPointOfSale } from "react-icons/md";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { RiAdminLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Link from "next/link";
import SalesMenu from "../Sales/SalesMenu";

export default function Navbar() {
  // for open and clse sidebar navigation
  const [open, setOpen] = useState(false);

  // for dropdown menu in the header
  const [profilenav, setProfilenav] = useState(false);
  const [questionnav, setQuestionnav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdownSidebar, setDropdownSidebar] = useState(false);

  //  router to get the path
  const router = useRouter();
  const pathName = router.pathname;

  // navbar data as an array of object
  const navData = [
    { name: "Home", path: "/", icon: <AiOutlineHome /> },
    {
      name: "Sales",
      path: "/sales",
      icon: <MdPointOfSale />,
      dropdownmenu: <SalesMenu dropdownSidebar={dropdownSidebar} />,
      arrow: dropdownSidebar ? <IoMdArrowDropup /> : <IoMdArrowDropdown />,
    },
    { name: "Purchasing", path: "/purchasing", icon: <BiPurchaseTagAlt /> },
    { name: "Finance", path: "/finance", icon: <TbReportMoney /> },
    { name: "Inventory", path: "/inventory", icon: <GoNorthStar /> },
    {
      name: "Administration",
      path: "/administration",
      icon: <RiAdminLine />,
    },
  ];

  // first droupdown menu in the header
  const questionData = [
    { name: "Help Page", path: "/", icon: <AiOutlineQuestionCircle /> },
    { name: "About Page", path: "/", icon: <AiOutlineExclamationCircle /> },
  ];

  // second dropdown menu in the header
  const profileData = [
    { name: "Settings", path: "/", icon: <FiSettings /> },
    { name: "Sign Out", path: "/", icon: <GrLogout /> },
  ];

  return (
    <div className="flex flex-col ">
      {/* --------------------------------------header section--------------------------- */}
      <div className="border w-screen bg-[#f5f4f2] flex flex-row justify-between relative">
        {/* +++++++++++++++++++++++++++left large and small++++++++++++++++++++++++++++++++++++++++= */}
        <div className="flex flex-row p-2 space-x-2">
          <div>
            {open ? (
              <AiOutlineClose
                className="bg-zinc-100 text-3xl cursor-pointer p-1 border-2 rounded-md hover:bg-[#e4e3e0] duration-500"
                onClick={() => setOpen(!open)}
              />
            ) : (
              <TfiMenu
                className="bg-zinc-100 text-3xl cursor-pointer p-1 border-2 rounded-md hover:bg-[#e4e3e0] duration-500"
                onClick={() => setOpen(!open)}
              />
            )}
          </div>
          <h1>ProERP/CRM - Where Business Grows</h1>
        </div>

        {/* +++++++++++++++++++++++++++++right large screen+++++++++++++++++++++++++++++++++++ */}
        <div className="md:flex flex-row justify-center items-center hidden">
          <div className="flex flex-row space-x-2 items-center m-[2px] hover:bg-[#e4e3e0] hover:border p-2 rounded-md">
            <FaRegComment />
          </div>

          <div className="flex items-center flex-row">
            <button
              className="flex flex-row items-center space-x-2 m-[2px] p-2 text-gray-700 rounded-md focus:border-gray-400 hover:bg-[#e4e3e0] focus:border"
              onClick={() => setQuestionnav(!questionnav)}
            >
              <AiOutlineQuestionCircle />
              {questionnav ? (
                <svg
                  width="15"
                  height="19"
                  viewBox="0 0 20 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.2567 0.331044C18.6262 -0.0794662 19.2585 -0.112745 19.669 0.256714C20.0795 0.626173 20.1128 1.25846 19.7433 1.66897L10.7433 11.669C10.3461 12.1104 9.65396 12.1104 9.25671 11.669L0.256714 1.66897C-0.112745 1.25846 -0.0794662 0.626173 0.331044 0.256714C0.741554 -0.112745 1.37384 -0.0794662 1.7433 0.331044L10 9.50516L18.2567 0.331044Z"
                    fill="#1A1A1A"
                  />
                </svg>
              ) : (
                <svg
                  width="15"
                  height="10"
                  viewBox="0 0 20 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.2567 11.669L10 2.49485L1.7433 11.669C1.37384 12.0795 0.741554 12.1128 0.331044 11.7433C-0.0794662 11.3738 -0.112745 10.7415 0.256714 10.331L9.25671 0.331035C9.65396 -0.110345 10.3461 -0.110345 10.7433 0.331035L19.7433 10.331C20.1128 10.7415 20.0795 11.3738 19.669 11.7433C19.2585 12.1128 18.6262 12.0795 18.2567 11.669Z"
                    fill="#1A1A1A"
                  />
                </svg>
              )}
            </button>
            {questionnav ? (
              <div className="absolute bg-white top-11 flex flex-col items-center m-[2px] rounded p-2 shadow-xl">
                {questionData.map((link, index) => {
                  return (
                    <div key={index} className="w-full">
                      <Link
                        href={link.path}
                        className="flex flex-row items-start gap-3 p-2 rounded-md hover:bg-[#e4e3e0]"
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

          <div className="flex items-center">
            <button
              className="flex flex-row items-center space-x-2 p-2 m-[2px] rounded-md hover:bg-[#e4e3e0] hover:border"
              onClick={() => setProfilenav(!profilenav)}
            >
              <GoPerson />
              <h2>name@gmail.com</h2>
              {profilenav ? (
                <svg
                  width="15"
                  height="19"
                  viewBox="0 0 20 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.2567 0.331044C18.6262 -0.0794662 19.2585 -0.112745 19.669 0.256714C20.0795 0.626173 20.1128 1.25846 19.7433 1.66897L10.7433 11.669C10.3461 12.1104 9.65396 12.1104 9.25671 11.669L0.256714 1.66897C-0.112745 1.25846 -0.0794662 0.626173 0.331044 0.256714C0.741554 -0.112745 1.37384 -0.0794662 1.7433 0.331044L10 9.50516L18.2567 0.331044Z"
                    fill="#1A1A1A"
                  />
                </svg>
              ) : (
                <svg
                  width="15"
                  height="10"
                  viewBox="0 0 20 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.2567 11.669L10 2.49485L1.7433 11.669C1.37384 12.0795 0.741554 12.1128 0.331044 11.7433C-0.0794662 11.3738 -0.112745 10.7415 0.256714 10.331L9.25671 0.331035C9.65396 -0.110345 10.3461 -0.110345 10.7433 0.331035L19.7433 10.331C20.1128 10.7415 20.0795 11.3738 19.669 11.7433C19.2585 12.1128 18.6262 12.0795 18.2567 11.669Z"
                    fill="#1A1A1A"
                  />
                </svg>
              )}
            </button>
            {profilenav ? (
              <div className="absolute bg-white top-11 flex flex-col items-center m-[2px] rounded p-2 shadow-xl">
                {profileData.map((link, index) => {
                  return (
                    <div key={index} className="w-full">
                      <Link
                        href={link.path}
                        className="flex flex-row items-start gap-3 p-2 rounded-md hover:bg-[#e4e3e0]"
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
        </div>

        {/* ++++++++++++++++++++++++++++++++right small screen+++++++++++++++++++++++++++++++++ */}
        <div className="flex flex-col justify-center items-center md:hidden">
          <div className="flex flex-row">
            <button
              className="flex flex-row items-center space-x-2 m-[2px] p-2 text-gray-700 rounded-md focus:border-gray-400 hover:bg-[#e4e3e0] focus:border"
              onClick={() => setDropdown(!dropdown)}
            >
              <GoPerson />
              {dropdown ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </button>
            {dropdown ? (
              <div className="flex flex-col justify-center items-center absolute top-11 shadow-xl right-0 z-10 bg-[#f5f4f2] p-1 border rounded-md">
                <div className="flex flex-row space-x-2 items-center m-[2px] hover:bg-[#e4e3e0] hover:border p-2 rounded-md">
                  <FaRegComment />
                  <h2 className="">Feadback</h2>
                </div>

                <div className="flex items-center flex-col">
                  <button
                    className="flex flex-row items-center space-x-2 m-[2px] p-2 text-gray-700 rounded-md focus:border-gray-400 hover:bg-[#e4e3e0] focus:border"
                    onClick={() => setQuestionnav(!questionnav)}
                  >
                    <AiOutlineQuestionCircle />
                    <h2 className="">Pages</h2>
                    {questionnav ? (
                      <svg
                        width="15"
                        height="19"
                        viewBox="0 0 20 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.2567 0.331044C18.6262 -0.0794662 19.2585 -0.112745 19.669 0.256714C20.0795 0.626173 20.1128 1.25846 19.7433 1.66897L10.7433 11.669C10.3461 12.1104 9.65396 12.1104 9.25671 11.669L0.256714 1.66897C-0.112745 1.25846 -0.0794662 0.626173 0.331044 0.256714C0.741554 -0.112745 1.37384 -0.0794662 1.7433 0.331044L10 9.50516L18.2567 0.331044Z"
                          fill="#1A1A1A"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="15"
                        height="10"
                        viewBox="0 0 20 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.2567 11.669L10 2.49485L1.7433 11.669C1.37384 12.0795 0.741554 12.1128 0.331044 11.7433C-0.0794662 11.3738 -0.112745 10.7415 0.256714 10.331L9.25671 0.331035C9.65396 -0.110345 10.3461 -0.110345 10.7433 0.331035L19.7433 10.331C20.1128 10.7415 20.0795 11.3738 19.669 11.7433C19.2585 12.1128 18.6262 12.0795 18.2567 11.669Z"
                          fill="#1A1A1A"
                        />
                      </svg>
                    )}
                  </button>
                  {questionnav ? (
                    <div className="bg-white flex flex-col items-center m-[2px] rounded p-2">
                      {questionData.map((link, index) => {
                        return (
                          <div key={index} className="w-full">
                            <Link
                              href={link.path}
                              className="flex flex-row items-start gap-3 p-2 rounded-md hover:bg-[#e4e3e0]"
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

                <div className="flex items-center flex-col">
                  <button
                    className="flex flex-row items-center space-x-2 p-2 m-[2px] rounded-md hover:bg-[#e4e3e0] hover:border"
                    onClick={() => setProfilenav(!profilenav)}
                  >
                    <GoPerson />
                    <h2>name@gmail.com</h2>
                    {profilenav ? (
                      <svg
                        width="15"
                        height="19"
                        viewBox="0 0 20 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.2567 0.331044C18.6262 -0.0794662 19.2585 -0.112745 19.669 0.256714C20.0795 0.626173 20.1128 1.25846 19.7433 1.66897L10.7433 11.669C10.3461 12.1104 9.65396 12.1104 9.25671 11.669L0.256714 1.66897C-0.112745 1.25846 -0.0794662 0.626173 0.331044 0.256714C0.741554 -0.112745 1.37384 -0.0794662 1.7433 0.331044L10 9.50516L18.2567 0.331044Z"
                          fill="#1A1A1A"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="15"
                        height="10"
                        viewBox="0 0 20 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.2567 11.669L10 2.49485L1.7433 11.669C1.37384 12.0795 0.741554 12.1128 0.331044 11.7433C-0.0794662 11.3738 -0.112745 10.7415 0.256714 10.331L9.25671 0.331035C9.65396 -0.110345 10.3461 -0.110345 10.7433 0.331035L19.7433 10.331C20.1128 10.7415 20.0795 11.3738 19.669 11.7433C19.2585 12.1128 18.6262 12.0795 18.2567 11.669Z"
                          fill="#1A1A1A"
                        />
                      </svg>
                    )}
                  </button>
                  {profilenav ? (
                    <div className="bg-white flex flex-col items-center m-[2px] rounded p-2">
                      {profileData.map((link, index) => {
                        return (
                          <div key={index} className="w-full">
                            <Link
                              href={link.path}
                              className="flex flex-row items-start gap-3 p-2 rounded-md hover:bg-[#e4e3e0]"
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
              </div>
            ) : (
              <div className="hidden"></div>
            )}
          </div>
        </div>
      </div>

      {/* -----------------------------------------------sidebar navigation---------------------------------- */}
      <div
        className={`bg-[#f5f4f2] h-screen pt-4 border absolute duration-700 flex flex-col ${
          open ? "w-64 p-3" : "w-0"
        }`}
      >
        <div
          className={`${
            open ? "block" : "hidden"
          } flex flex-row-reverse w-full mb-1`}
        >
          {open ? (
            <AiOutlineClose
              className="bg-zinc-100 text-3xl cursor-pointer p-1 border-2 rounded-md hover:bg-[#e4e3e0]"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <TfiMenu
              className="bg-zinc-100 text-3xl cursor-pointer p-1 border-2 rounded-md hover:bg-[#e4e3e0]"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>

        <div className="overflow-auto rounded">
          {/* map through navbar data */}
          {navData.map((link, index) => {
            return (
              <div key={index} className={`${open ? "block" : "hidden"}`}>
                <Link
                  href={link.path}
                  className={`${
                    link.path === pathName &&
                    "bg-[#514c47] text-white rounded-md"
                  } 
                    m-[2px] flex flex-row justify-between  
                    ${
                      link.path === pathName ? "bg-none" : "hover:bg-[#e4e3e0]"
                    } 
                  rounded-md mb-1`}
                  onClick={() => {
                    setDropdownSidebar(!dropdownSidebar);
                  }}
                >
                  <i className={`flex flex-row items-start gap-3 p-2`}>
                    {link.icon}
                    {link.name}
                  </i>
                  <div className="flex flex-col justify-center m-3">
                    {link.arrow}
                  </div>
                </Link>
                {link.dropdownmenu}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
