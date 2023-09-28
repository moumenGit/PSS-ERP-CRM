import React from "react";

export default function FieldComponent({
  labelName = "",
  inputType = "",
  classNameInput = "",
  classNameLabel = "",
  classNameDiv = "",
  placeHolderName = "",
  pattern="",
}) {
  return (
    <div className={`flex flex-col w-full ${classNameDiv}`}>
      <label className={classNameLabel}>{labelName}</label>
      <input
        type={`${inputType}`}
        placeholder={`${placeHolderName}`}
        className={classNameInput}
      />
    </div>
  );
}
