import FieldComponent from "@/components/FieldComponent";
import Selectcomponent from "@/components/Selectcomponent";
import React, { useState } from "react";

export default function PaymentDetails() {
  const [activeTab, setActiveTab] = useState("discountAndAdjustment");

  return (
    <div className="p-4 shadow-md bg-[#f6f9fc] rounded w-full border border-[#ced4da]">
      <ul className="flex justify-center space-x-4">
        <li
          className={`cursor-pointer ${
            activeTab === "discountAndAdjustment"
              ? "text-[#437c94] font-semibold"
              : ""
          }`}
          onClick={() => setActiveTab("discountAndAdjustment")}
        >
          Discount & Adjustment
        </li>
        <li
          className={`cursor-pointer ${
            activeTab === "deposit" ? "text-[#437c94] font-semibold" : ""
          }`}
          onClick={() => setActiveTab("deposit")}
        >
          Deposit
        </li>
        <li
          className={`cursor-pointer ${
            activeTab === "shipping" ? "text-[#437c94] font-semibold" : ""
          }`}
          onClick={() => setActiveTab("shipping")}
        >
          Shipping Details
        </li>
        <li
          className={`cursor-pointer ${
            activeTab === "documents" ? "text-[#437c94] font-semibold" : ""
          }`}
          onClick={() => setActiveTab("documents")}
        >
          Attach Documents
        </li>
      </ul>
      {activeTab === "discountAndAdjustment" && (
        // Discount input and options
        <div className="m-4 p-3">
          {/* Add discount input and options here */}
          <form class="flex md:flex-row flex-col justify-center gap-8">
            <div className="flex md:flex-row flex-col">
              <FieldComponent
                labelName="Discount"
                placeHolderName="0"
                inputType="text"
                classNameLabel="text-[#437c94] font-semibold"
                classNameInput="w-64 border border border-[#ced4da] p-1 m-1"
                width="w-64"
              />
              <Selectcomponent
                values={["Percentage (%)", "Amount"]}
                classNameLabel="text-[#437c94] font-semibold"
                classNameStyle={"w-64 border border border-[#ced4da] p-1 m-1"}
                width="w-64"
                name="Type"
              />
            </div>
            <div className="flex flex-col md:ml-1">
              <label className="text-[#437c94] font-semibold">Adjustment</label>
              <div className="flex md:flex-row flex-col mt-1">
                <input
                  type="text"
                  className="w-64 border border-[#ced4da] p-1 "
                />
                <input
                  type="text"
                  className="w-64 border border-[#ced4da] p-1 "
                  placeholder="0.00"
                />
              </div>
            </div>
          </form>
        </div>
      )}
      {activeTab === "deposit" && (
        // Deposit input and options
        <div className="mt-4 p-3 ">
          {/* Add deposit input and options here */}
          <form class="flex md:flex-row flex-col justify-center gap-8">
            <div className="flex md:flex-row flex-col">
              <FieldComponent
                labelName="Advance Deposit"
                placeHolderName="0"
                inputType="text"
                classNameLabel="text-[#437c94] font-semibold"
                classNameInput="w-64 border border border-[#ced4da] p-1 m-1"
                width="w-64"
              />
              <Selectcomponent
                values={["Percentage (%)", "Amount"]}
                classNameLabel="text-[#437c94] font-semibold"
                classNameStyle={"w-64 border border border-[#ced4da] p-1 m-1"}
                width="w-64"
                name="Type"
              />
            </div>
          </form>
        </div>
      )}
      {activeTab === "shipping" && (
        // Shipping details input and options
        <div className="mt-4 flex md:flex-row flex-col p-4 justify-center gap-6">
          {/* Add shipping details input and options here */}
          <FieldComponent
            labelName="Shipping Details"
            placeHolderName="0"
            inputType="text"
            classNameLabel="text-[#437c94] font-semibold"
            classNameInput="w-64 border border border-[#ced4da] p-1 m-1"
            width="w-64"
          />
          <FieldComponent
            labelName="Shipping Fees"
            placeHolderName="0"
            inputType="text"
            classNameLabel="text-[#437c94] font-semibold"
            classNameInput="w-64 border border border-[#ced4da] p-1 m-1"
            width="w-64"
          />
        </div>
      )}
      {activeTab === "documents" && (
        // Attach documents button
        <div className="mt-4 p-3 flex flex-col justify-center items-center gap-3">
          <label className="text-[#437c94] font-semibold">
            Attach Documents
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="w-72 border border-[#ced4da] p-1 bg-white"
          />
        </div>
      )}
    </div>
  );
}
