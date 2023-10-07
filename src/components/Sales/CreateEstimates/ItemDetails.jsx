import React, { useState } from "react";

export default function ItemDetails() {
  // columns names
  const [rows, setRows] = useState([
    {
      item: "",
      description: "",
      unitPrice: "",
      quantity: "",
      discount: "",
      tax: "",
    },
  ]);

  // to add another row
  const addRow = () => {
    setRows([
      ...rows,
      {
        item: "",
        description: "",
        unitPrice: "",
        quantity: "",
        discount: "",
        tax: "",
      },
    ]);
  };

  // to change the input data
  const handleInputChange = (event, rowIndex, columnName) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex][columnName] = event.target.value;
    setRows(updatedRows);
  };

  // to delete a row
  const handleDeleteRow = (rowIndex) => {
    const updatedRows = [...rows];
    updatedRows.splice(rowIndex, 1);
    setRows(updatedRows);
  };

  return (
    <div className="bg-[#f6f9fc] rounded w-full p-1 border border-[#ced4da] overflow-x-auto">
      <div className="md:block hidden">
        <table className="w-full table-fixed border-collapse bg-white ">
          <thead>
            <tr className="text-[#437c94] border">
              <th className="w-1/6 p-2 border">Item</th>
              <th className="w-1/6 p-2 border">Description</th>
              <th className="w-1/6 p-2 border">Unit Price</th>
              <th className="w-1/6 p-2 border">Quantity</th>
              <th className="w-1/6 p-2 border">Discount</th>
              <th className="w-1/6 p-2 border">Tax</th>
              <th className="w-1/6 p-2 border">Subtotal</th>
              <th className="w-1/6 p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="border">
                  <input
                    type="text"
                    value={row.item}
                    onChange={(e) => handleInputChange(e, rowIndex, "item")}
                    className="w-full p-2 h-full"
                  />
                </td>
                <td className="border">
                  <textarea
                    value={row.description}
                    cols={50}
                    onChange={(e) =>
                      handleInputChange(e, rowIndex, "description")
                    }
                    className="w-full p-2"
                  />
                </td>
                <td className="border">
                  <input
                    type="number"
                    value={row.unitPrice}
                    onChange={(e) =>
                      handleInputChange(e, rowIndex, "unitPrice")
                    }
                    className="w-full p-2"
                  />
                </td>
                <td className="border">
                  <input
                    type="number"
                    value={row.quantity}
                    onChange={(e) => handleInputChange(e, rowIndex, "quantity")}
                    className="w-full  p-2"
                  />
                </td>
                <td className="border">
                  <input
                    type="number"
                    value={row.discount}
                    onChange={(e) => handleInputChange(e, rowIndex, "discount")}
                    className="w-full  p-2"
                  />
                </td>
                <td className="border">
                  <input
                    type="number"
                    value={row.tax}
                    onChange={(e) => handleInputChange(e, rowIndex, "tax")}
                    className="w-full  p-2"
                  />
                </td>
                <td className="border p-2">
                  {(
                    row.unitPrice *
                    row.quantity *
                    (1 - row.discount) *
                    (1 + row.tax)
                  ).toFixed(2)}
                </td>
                <td className="p-2 flex items-center justify-center">
                  <button
                    onClick={() => handleDeleteRow(rowIndex)}
                    className="bg-red-500 text-white px-2 py-1 rounded-full hover:bg-[#b91c1c]"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={addRow}
          className="mt-4 bg-[#437c94] text-white px-2 py-1 rounded-full hover:bg-[#1e3a8a] duration-500"
        >
          Add Row
        </button>
      </div>

      <div className="block md:hidden">
        <table className="w-full table-fixed border-collapse bg-white">
          <thead>
            <tr className="text-[#437c94] border">
              <th className="w-1/6 p-2 border text-xs md:text-base">Item</th>
              <th className="w-1/6 p-2 border text-xs md:text-base">Description</th>
              <th className="w-1/6 p-2 border text-xs md:text-base">Unit Price</th>
              <th className="w-1/6 p-2 border text-xs md:text-base">Quantity</th>
              <th className="w-1/6 p-2 border text-xs md:text-base">Discount</th>
              <th className="w-1/6 p-2 border text-xs md:text-base">Tax</th>
              <th className="w-1/6 p-2 border text-xs md:text-base">Subtotal</th>
              <th className="w-1/6 p-2 border text-xs md:text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="border">
                  <input
                    type="text"
                    value={row.item}
                    onChange={(e) => handleInputChange(e, rowIndex, "item")}
                    className="w-full p-2 h-full"
                  />
                </td>
                <td className="border">
                  <textarea
                    value={row.description}
                    cols={50}
                    onChange={(e) =>
                      handleInputChange(e, rowIndex, "description")
                    }
                    className="w-full p-2"
                  />
                </td>
                <td className="border">
                  <input
                    type="number"
                    value={row.unitPrice}
                    onChange={(e) =>
                      handleInputChange(e, rowIndex, "unitPrice")
                    }
                    className="w-full p-2"
                  />
                </td>
                <td className="border">
                  <input
                    type="number"
                    value={row.quantity}
                    onChange={(e) => handleInputChange(e, rowIndex, "quantity")}
                    className="w-full  p-2"
                  />
                </td>
                <td className="border">
                  <input
                    type="number"
                    value={row.discount}
                    onChange={(e) => handleInputChange(e, rowIndex, "discount")}
                    className="w-full  p-2"
                  />
                </td>
                <td className="border">
                  <input
                    type="number"
                    value={row.tax}
                    onChange={(e) => handleInputChange(e, rowIndex, "tax")}
                    className="w-full  p-2"
                  />
                </td>
                <td className="border p-2">
                  {(
                    row.unitPrice *
                    row.quantity *
                    (1 - row.discount) *
                    (1 + row.tax)
                  ).toFixed(2)}
                </td>
                <td className="p-2 flex items-center justify-center">
                  <button
                    onClick={() => handleDeleteRow(rowIndex)}
                    className="bg-red-500 text-white px-2 py-1 rounded-full hover:bg-[#b91c1c]"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={addRow}
          className="mt-4 bg-[#437c94] text-white px-2 py-1 rounded-full hover:bg-[#1e3a8a] duration-500"
        >
          Add Row
        </button>
      </div>
    </div>
  );
}
