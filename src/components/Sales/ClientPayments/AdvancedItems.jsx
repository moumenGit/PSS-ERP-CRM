import CalendarComponent from "@/components/CalendarComponent";
import FieldComponent from "@/components/FieldComponent";
import Selectcomponent from "@/components/Selectcomponent";
import React from "react";

export default function AdvancedItems({ openAdvance }) {
  return (
    <div
      className={`grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 m-2 place-items-center ${
        openAdvance ? "block" : "hidden"
      }`}
    >
      {/* -------------------------------first part------------------------------------------- */}
      <div className="w-full space-y-2">
        <Selectcomponent
          values={["[Any Payment Method]", "Cash", "Cheque", "Bank Transfer"]}
          name="Payment Status"
          classNameStyle="border border-[#ced4da] p-1"
          classNameLabel="text-[#437c94] font-medium"
        />
        <div className="flex sm:flex-row flex-col space-x-1">
          <FieldComponent
            labelName="Amount more than"
            inputType="text"
            classNameLabel="text-[#437c94] font-medium"
            classNameInput="border border-[#ced4da] p-1"
          />
          <FieldComponent
            labelName="Amount less than"
            inputType="text"
            classNameLabel="text-[#437c94] font-medium"
            classNameInput="border border-[#ced4da] p-1"
          />
        </div>
        <FieldComponent
          labelName="Pos Shift"
          inputType="text"
          classNameLabel="text-[#437c94] font-medium"
          classNameInput="border border-[#ced4da] p-1"
        />
      </div>
      {/* -----------------------------------------second part--------------------------------------- */}
      <div className="w-full space-y-2">
        <CalendarComponent calendarName={"Date"} />
        <Selectcomponent
          name="Status"
          values={[
            "[Any Status]",
            "Incomplete",
            "Complete",
            "Pending",
            "Faild",
            "Overpaid",
          ]}
          classNameLabel="text-[#437c94] font-medium"
          classNameStyle="border border-[#ced4da] p-1"
        />
        <Selectcomponent
          values={[
            "[Any Invoiced By]",
            "Unpaid",
            "Partially Paid",
            "Paid",
            "Refunded",
            "Partially Refunded",
            "Overpaid",
            "Draft",
            "Due",
            "OverDue",
          ]}
          name="Invoiced By"
          classNameStyle="border border-[#ced4da] p-1"
          classNameLabel="text-[#437c94] font-medium"
        />
      </div>
      {/* -----------------------------------third part--------------------------------------- */}
      <div className="w-full space-y-2">
        <FieldComponent
          labelName="Id"
          inputType="text"
          classNameLabel="text-[#437c94] font-medium"
          classNameInput="border border-[#ced4da] p-1"
        />
        <CalendarComponent calendarName={"Created Date"} />
        <Selectcomponent
          values={["[Any Staff Id]"]}
          name="Collected By"
          classNameStyle="border border-[#ced4da] p-1"
          classNameLabel="text-[#437c94] font-medium"
        />
      </div>
    </div>
  );
}
