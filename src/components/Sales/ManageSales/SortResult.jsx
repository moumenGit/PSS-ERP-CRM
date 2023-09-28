import ButtonComponent from "@/components/ButtonComponent/ButtonComponent";
import React, { useState } from "react";
import { FaSort } from "react-icons/fa";
import { BsSortAlphaDown, BsSortAlphaDownAlt } from "react-icons/bs";

export default function SortResult() {
  const [openSort, setOpenSort] = useState(false);
  const sortdorpdown = [
    {
      name: "Client",
      icon: <BsSortAlphaDown />,
    },
    {
      name: "Created Date",
      icon: <BsSortAlphaDownAlt />,
    },
    {
      name: "Number",
      icon: <BsSortAlphaDown />,
    },
    {
      name: "Payment",
      icon: <BsSortAlphaDownAlt />,
    },
  ];
  return (
    <div>
      <ButtonComponent
        classNameButton={"flex flex-row space-x-2 items-center"}
        buttonName={<h2 className="p-1 font-serif">Sort by</h2>}
        icon={<FaSort />}
        onClick={() => {
          setOpenSort(!openSort);
        }}
      />
      {openSort && openSort ? (
        <div className="flex flex-col justify-center items-center absolute  shadow-xl z-10 bg-[#f5f4f2] p-1 border rounded-md w-36 sm:right-2">
          <div>
            {sortdorpdown &&
              sortdorpdown.map((item, index) => {
                return (
                  <ButtonComponent
                    classNameButton={"flex flex-row space-x-2 justify-between items-center hover:bg-white w-full p-1"}
                    buttonName={<h2 className="p-1 font-serif">{item.name}</h2>}
                    icon={item.icon}
                  />
                );
              })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
