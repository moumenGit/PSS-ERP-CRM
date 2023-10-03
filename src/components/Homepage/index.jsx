import React from "react";
import Link from "next/link";
import { GoNorthStar } from "react-icons/go";
import { TbReportMoney } from "react-icons/tb";
import { MdPointOfSale } from "react-icons/md";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { useRouter } from "next/router";
import Image from "next/image";
import homepage1 from "../../../public/Images/homepage1.png";
import { RiAdminLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

export default function Homepage() {
  //  router to get the path
  const router = useRouter();
  const pathName = router.pathname;

  // navbar data as an array of object
  const navData = [
    {
      name: "Sales",
      path: "/sales",
      icon: <MdPointOfSale />,
      color: "bg-[#437c94]",
    },
    {
      name: "Purchasing",
      path: "/purchasing",
      icon: <BiPurchaseTagAlt />,
      color: "bg-[#587b86]",
    },
    {
      name: "Finance",
      path: "/finance",
      icon: <TbReportMoney />,
      color: "bg-[#4f7d7b]",
    },
    {
      name: "Inventory",
      path: "/inventory",
      icon: <GoNorthStar />,
      color: "bg-[#4c825c]",
    },
    {
      name: "Administration",
      path: "/administration",
      icon: <RiAdminLine />,
      color: "bg-[#5f7d4f]",
    },
  ];

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      {/* intro part */}
      <div className="flex md:flex-row flex-col-reverse mt-4 md:mt-0 items-center justify-center gap-2">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex items-center leading-7 mb-3 md:mb-0"
        >
          <h2 className="text-3xl m-3 text-center">
            Welcome to{" "}
            <span className="text-[#0f3775] font-semibold">ProERP/CRM!</span>{" "}
            <br /> Your Company's Fastest Route <br /> to{" "}
            <span className="text-[#0f3775] font-semibold">
              Digital Transformation
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <Image src={homepage1} alt="homepage1" height={300} width={300} />
        </motion.div>
      </div>

      {/* cards part */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="md:flex md:flex-row grid grid-cols-1 sm:grid-cols-3 gap-3"
      >
        {navData.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className="w-40 h-36 shadow-md rounded-lg transition-all hover:-translate-y-6 delay-150 duration-700"
            >
              <div className="flex flex-col items-center w-40 h-36">
                <div
                  className={`flex flex-row items-center justify-center h-[80%] text-white text-3xl w-full rounded-t-lg ${link.color}`}
                >
                  {link.icon}
                </div>
                <div className="flex justify-center items-center font-semibold hover:bg-[#eef2f3] w-full h-14 duration-300">
                  {link.name}
                </div>
              </div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
