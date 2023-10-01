import React from "react";
import ClientDetails from "./ClientDetails";
import InvoiceDetails from "./InvoiceDetails";

export default function CreateDetails() {
  return (
    <div className="flex flex-col p-1">
      <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
        <ClientDetails />
        <InvoiceDetails />
      </div>
    </div>
  );
}
