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
        <FieldComponent
          labelName="Contains Item"
          inputType="text"
          classNameLabel="text-[#437c94] font-medium"
          classNameInput="border border-[#ced4da] p-1"
        />
        <div className="flex sm:flex-row flex-col items-end justify-center sm:space-x-1 space-y-1">
          <Selectcomponent
            name="Date"
            values={["Custom", "Last Month", "Last Year"]}
            classNameLabel="text-[#437c94] font-medium"
            classNameStyle="border border-[#ced4da] p-1"
          />
          <div className="flex flex-row justify-center items-center space-x-1">
            <FieldComponent
              placeHolderName="From"
              classNameInput="border border-[#ced4da] w-28 p-1"
            />
            <span className="font-bold"> - </span>
            <FieldComponent
              placeHolderName="To"
              classNameInput="border border-[#ced4da] w-28 p-1"
            />
          </div>
        </div>
        <FieldComponent
          labelName="Custom Field"
          inputType="text"
          classNameLabel="text-[#437c94] font-medium"
          classNameInput="border border-[#ced4da] p-1"
        />
        <Selectcomponent
          name="Sales Person"
          values={["Any Sales Person"]}
          classNameLabel="text-[#437c94] font-medium"
          classNameStyle="border border-[#ced4da] p-1"
        />
      </div>
      {/* -----------------------------------------second part--------------------------------------- */}
      <div className="w-full space-y-2">
        <Selectcomponent
          name={"Currency"}
          values={["Any"]}
          classNameLabel="text-[#437c94] font-medium"
          classNameStyle="border border-[#ced4da] p-1"
        />
        <div className="flex sm:flex-row flex-col items-end sm:space-x-1 space-y-1">
          <Selectcomponent
            name="Due Date"
            values={["Custom", "Last Month", "Last Year"]}
            classNameLabel="text-[#437c94] font-medium"
            classNameStyle="border border-[#ced4da] p-1"
          />
          <div className="flex flex-row justify-center items-center space-x-1">
            <FieldComponent
              placeHolderName="From"
              classNameInput="border border-[#ced4da] w-28 p-1"
            />
            <span className="font-bold"> - </span>
            <FieldComponent
              placeHolderName="To"
              classNameInput="border border-[#ced4da] w-28 p-1"
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-end justify-center sm:space-x-1 space-y-1">
          <Selectcomponent
            name="Created Date"
            values={["Custom", "Last Month", "Last Year"]}
            classNameLabel="text-[#437c94] font-medium"
            classNameStyle="border border-[#ced4da] p-1"
          />
          <div className="flex flex-row justify-center items-center space-x-1">
            <FieldComponent
              placeHolderName="From"
              classNameInput="border border-[#ced4da] w-28 p-1"
            />
            <span className="font-bold"> - </span>
            <FieldComponent
              placeHolderName="To"
              classNameInput="border border-[#ced4da] w-28 p-1"
            />
          </div>
        </div>
        <FieldComponent
          labelName="Pos Shift"
          inputType="text"
          classNameLabel="text-[#437c94] font-medium"
          classNameInput="border border-[#ced4da] p-1"
        />
      </div>
      {/* ------------------------------third part--------------------------------------- */}
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
        <Selectcomponent
          values={[
            "All",
          ]}
          name="Source"
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
