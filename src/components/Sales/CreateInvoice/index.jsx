import React from "react";
import ClientDetails from "../EstimatesAndInvoiceCom/ClientDetails";
import InvoiceDetails from "./InvoiceDetails";
import ItemDetails from "../EstimatesAndInvoiceCom/ItemDetails";
import PaymentDetails from "../EstimatesAndInvoiceCom/PaymentDetails";

export default function CreateDetails() {
  return (
    <div className="flex flex-col p-1 gap-2">
      <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
        <ClientDetails />
        <InvoiceDetails />
      </div>
        <ItemDetails />
        <PaymentDetails />
    </div>
  );
}
