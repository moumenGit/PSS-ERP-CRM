import React from "react";
import ClientDetails from "./ClientDetails";
import EstimatesDetails from "./EstimatesDetails";
import ItemDetails from "./ItemDetails";

export default function CreateEstimates() {
  return (
    <div className="flex flex-col p-1 gap-2">
      <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
        <ClientDetails />
        <EstimatesDetails />
      </div>
      <div className="">
        <ItemDetails />
      </div>
    </div>
  );
}
