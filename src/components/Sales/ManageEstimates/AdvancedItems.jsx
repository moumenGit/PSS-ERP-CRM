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
          name={"Currency"}
          values={["Any"]}
          classNameLabel="text-[#437c94] font-medium"
          classNameStyle="border border-[#ced4da] p-1"
        />
        <CalendarComponent calendarName={"Date"} />
      </div>
      {/* -----------------------------------------second part--------------------------------------- */}
      <div className="w-full space-y-2">
        <div className="flex sm:flex-row flex-col space-x-1">
          <FieldComponent
            labelName="Total more than"
            inputType="text"
            classNameLabel="text-[#437c94] font-medium"
            classNameInput="border border-[#ced4da] p-1"
          />
          <FieldComponent
            labelName="Total less than"
            inputType="text"
            classNameLabel="text-[#437c94] font-medium"
            classNameInput="border border-[#ced4da] p-1"
          />
        </div>
        <CalendarComponent calendarName={"Created Date"} />
      </div>
      {/* ------------------------------third part--------------------------------------- */}
      <div className="w-full space-y-2">
        <Selectcomponent
          values={[
            "Any",
            "Open",
            "Sent",
            "Viewed",
            "Replied",
            "Accepted",
            "Invoiced",
            "Draft",
          ]}
          name="Status"
          classNameStyle="border border-[#ced4da] p-1"
          classNameLabel="text-[#437c94] font-medium"
        />
        <Selectcomponent
          values={["Any Staff"]}
          name="Added By"
          classNameLabel="text-[#437c94] font-medium"
          classNameStyle="border border-[#ced4da] p-1"
        />
      </div>
    </div>
  );
}
