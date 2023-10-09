import React from "react";
import EstimatesDetails from "./EstimatesDetails";
import ClientDetails from "../EstimatesAndInvoiceCom/ClientDetails";
import ItemDetails from "../EstimatesAndInvoiceCom/ItemDetails";
import PaymentDetails from "../EstimatesAndInvoiceCom/PaymentDetails";

export default function CreateEstimates() {
  return (
    <div className="flex flex-col p-1 gap-2">
      <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
        <ClientDetails />
        <EstimatesDetails />
      </div>
        <ItemDetails />
        <PaymentDetails />
    </div>
  );
}
