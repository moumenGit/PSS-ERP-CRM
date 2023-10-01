import CalendarComponent from "@/components/CalendarComponent";
import FieldComponent from "@/components/FieldComponent";
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
      <CalendarComponent calendarName="Next Invoice Date" />
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
      </div>
    </div>
  );
}
