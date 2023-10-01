import React from "react";

export default function FieldComponent({
  labelName = "",
  inputType = "",
  classNameInput = "",
  classNameLabel = "",
  classNameDiv = "",
  placeHolderName = "",
  flexType = "flex flex-col",
  pattern = "",
}) {
  return (
    <div className={`${flexType} w-full ${classNameDiv} `}>
      <label className={classNameLabel}>{labelName}</label>
      <input
        type={`${inputType}`}
        placeholder={`${placeHolderName}`}
        className={classNameInput}
      />
    </div>
  );
}
