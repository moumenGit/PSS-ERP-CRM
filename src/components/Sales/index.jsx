import Image from "next/image";
import Link from "next/link";
import React from "react";
import salesPage from "../../../public/Images/salesPage.png";
import {
  LiaFileInvoiceSolid,
  LiaCalculatorSolid,
  LiaStickyNoteSolid,
} from "react-icons/lia";
import { IoCreateOutline, IoSettingsOutline } from "react-icons/io5";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { MdOutlineEventRepeat, MdOutlinePayments } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

export default function Sales() {
  const salesData = [
    {
      name: "Manage Invoices",
      path: "/salesPages/managesales",
      icon: <LiaFileInvoiceSolid className="w-28 h-28" />,
    },
    {
      name: "Manage Estimates",
      path: "/salesPages/manageestimates",
      icon: <LiaCalculatorSolid className="w-28 h-28" />,
    },
    {
      name: "Create Estimate",
      path: "/",
      icon: <IoCreateOutline className="w-28 h-28" />,
    },
    {
      name: "Credit Notes",
      path: "/salesPages/creditnotes",
      icon: <LiaStickyNoteSolid className="w-28 h-28" />,
    },
    {
      name: "Refund Receipts",
      path: "/salesPages/refundreceipts",
      icon: <HiOutlineReceiptRefund className="w-28 h-28" />,
    },
    {
      name: "Recurring Invoices",
      path: "/salesPages/recurringinvoices",
      icon: <MdOutlineEventRepeat className="w-28 h-28" />,
    },
    {
      name: "Client Payments",
      path: "/salesPages/clientpayments",
      icon: <MdOutlinePayments className="w-28 h-28" />,
    },
    {
      name: "Sales Settings",
      path: "/",
      icon: <IoSettingsOutline className="w-28 h-28" />,
    },
  ];
  return (
    <div>
      <div className="flex md:flex-row flex-col-reverse justify-evenly ">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col m-4 p-1 justify-center space-y-2"
        >
          <h1 className="text-2xl m-3 font-bold text-[#009c86]">Sales</h1>
          <p className="font-sans font-semibold max-w-lg tracking-wide leading-relaxed text-justify text-[#2a454e] m-1">
            Sales is a core business process for most organizations, and ERP
            systems can play a vital role in managing and optimizing sales
            performance. ProERP/CRM system provides a centralized repository for
            all sales-related data, including customer information, product
            catalogs, order history, and pricing information. This data can be
            accessed and analyzed by sales reps, managers, and other
            stakeholders to gain insights into sales trends, identify
            opportunities, and improve decision-making.
          </p>
          <div className="m-2 w-full flex flex-row justify-center mt-4">
            <Link
              href={"/salesPages/createdetails"}
              className="text-center p-2 bg-[#00dfc0] w-32 border rounded font-medium hover:bg-[#009c86] focus:outline-none focus:ring-4 focus:ring-[#a4f5ec]"
            >
              Create Invoice
            </Link>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <Image src={salesPage} className="m-2" />
        </motion.div>
      </div>

      <div className="flex justify-center">
        <hr class="h-px my-8 bg-[#a4f5ec] border-0 w-5/6"></hr>
      </div>

      <div className="flex flex-col justify-center items-center">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-2xl m-3 font-bold text-[#009c86]"
        >
          Sales Services
        </motion.h1>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-center gap-8 m-2 mb-6"
        >
          {salesData.map((item, index) => {
            return (
              <div className="flex flex-col transition-all hover:-translate-y-6 delay-150 duration-700">
                <div className="flex justify-center p-2">{item.icon}</div>
                <Link
                  href={item.path}
                  className="font-medium text-xl p-2 bg-[#00dfc0] text-center rounded-sm hover:bg-[#009c86] focus:outline-none focus:ring-4 focus:ring-[#a4f5ec]"
                >
                  <div key={index}>
                    <p>{item.name}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
