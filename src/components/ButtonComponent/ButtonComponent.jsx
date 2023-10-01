import React from "react";
export default function ButtonComponent({
  buttonName,
  classNameButton,
  onClick,
  icon,
  buttonType,
}) {
  return (
    <div>
      <button onClick={onClick} className={classNameButton} type={buttonType}>
        {buttonName}
        {icon}
      </button>
    </div>
  );
}
