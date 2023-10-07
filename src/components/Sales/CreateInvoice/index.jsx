import React from "react";
import ClientDetails from "./ClientDetails";
import InvoiceDetails from "./InvoiceDetails";
import ItemDetails from "./ItemDetails";

export default function CreateDetails() {
  return (
    <div className="flex flex-col p-1 gap-2">
      <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
        <ClientDetails />
        <InvoiceDetails />
      </div>
      <div className="">
        <ItemDetails />
      </div>
    </div>
  );
}
