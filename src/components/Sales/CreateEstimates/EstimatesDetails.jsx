import FieldComponent from "@/components/FieldComponent";
import React from "react";

export default function EstimatesDetails() {
  const invoiceData = [
    "Estimate Number",
    "Estimate Date",
  ];
  return (
    <div className="flex flex-col bg-[#f6f9fc] rounded w-full p-1 md:h-[50%] border border-[#ced4da]">
      <div>
        <h1 className="font-serif text-xl font-semibold m-2">Estimate Details</h1>
      </div>
      <div className="flex flex-col w-full p-2">
        {invoiceData &&
          invoiceData.map((item) => {
            return (
              <FieldComponent
                labelName={item}
                inputType="text"
                classNameLabel="text-[#437c94] font-medium w-full"
                classNameInput="border border-[#ced4da] p-1 m-1 w-full"
                flexType="flex md:flex-row flex-col items-center justify-center"
              />
            );
          })}
      </div>
    </div>
  );
}
