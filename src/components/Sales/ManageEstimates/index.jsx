import React, { useState } from 'react'
import AdvancedItems from "./AdvancedItems";
import FieldComponent from "@/components/FieldComponent";
import ButtonComponent from "@/components/ButtonComponent/ButtonComponent";
import SortResult from "../SortResult";

export default function ManageEstimates() {
  const [openAdvance, setOpenAdvance] = useState(false);
  return (
    <div className="flex space-y-5 bg-[#f6f9fc] flex-col p-2">
      <div className="flex flex-col bg-white m-1 rounded w-full p-1">
        {/* --------------------------------------------Search Box------------------------------------- */}
        <div className="flex p-1 bg-[#437c94] w-auto rounded">
          <h2 className="font-serif text-xl text-white">Search</h2>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 place-items-center m-2">
          <FieldComponent
            labelName="Client"
            inputType="text"
            classNameLabel="text-[#437c94] font-medium"
            classNameInput="border border-[#ced4da] p-1 m-1"
          />
          <FieldComponent
            labelName="Estimate No."
            inputType="text"
            classNameLabel="text-[#437c94] font-medium"
            classNameInput="border border-[#ced4da] p-1 m-1"
          />
        </div>
        {/* -------------------------------------------Advanced Search-------------------------------------- */}
        <div>
          <AdvancedItems openAdvance={openAdvance} />
        </div>
        {/* ----------------------------------------------Buttoms------------------------------------------ */}
        <div className="flex sm:flex-row flex-col sm:justify-between justify-center items-center space-y-2 m-2 ">
          <ButtonComponent
            buttonName={"Advanced Search"}
            onClick={() => {
              setOpenAdvance(!openAdvance);
            }}
            classNameButton="p-2 border border-[#ced4da] flex flex-row gap-3 items-center hover:bg-[#437c94] hover:text-white duration-500"
          />
          <div className="flex flex-row space-x-4">
            <ButtonComponent
              buttonName={"Reset"}
              classNameButton="p-2 border border-[#ced4da] hover:bg-[#ced4da] duration-500"
            />
            <ButtonComponent
              buttonName={"Search"}
              classNameButton="p-2 bg-[#437c94] text-white hover:bg-[#ced4da] hover:text-black duration-500"
            />
          </div>
        </div>
      </div>
      {/* -----------------------------------------Result Table------------------------------------------ */}
      <div className="flex flex-col bg-white m-1 rounded w-full p-1">
        {/* ++++++++++++++++++++++++++++++filter-bar+++++++++++++++++++++++++++++ */}
        <div className="flex sm:flex-row flex-col sm:justify-between items-center">
          <div className="flex flex-row space-x-2">
            <h1 className="p-1 font-serif">Results</h1>
          </div>
          <SortResult />
        </div>
        {/* ++++++++++++++++++++++++++++++table++++++++++++++++++++++++++++++++ */}
        <div className="">

        </div>
      </div>
    </div>);
}
