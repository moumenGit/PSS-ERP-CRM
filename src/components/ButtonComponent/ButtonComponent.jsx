import React from "react";
import { FaSort } from "react-icons/fa";
export default function ButtonComponent({
  buttonName,
  classNameButton,
  onClick,
  icon,
}) {
  return (
    <div>
      <button onClick={onClick} className={classNameButton}>
        {buttonName}
        {icon}
      </button>
    </div>
  );
}
